// Define interfaces for the Notice data structure
export interface NoticeSectionItem {
  // id: number; // Removed as it's not in sample_notice.json for these items
  name: string;
  slug: string;
}

interface NoticeSectionsData {
  // id: number; // Removed as it's not in sample_notice.json for the Sections object itself
  // The actual array of section items
  sections: NoticeSectionItem[]; 
}


export interface NoticeEntry {
  id: number;
  PageTitle: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  Sections: NoticeSectionsData; // Updated to use the new interface
  localizations: any[]; // Define further if structure is known
}

// This represents the overall API response structure for a single notice entry
// If your API returns a collection, this would be NoticeEntry[]
// Based on sample_notice.json, it seems to be a single entry response.
export interface NoticeApiResponse {
  data: NoticeEntry; 
  meta: Record<string, unknown>; // Or a more specific type for meta if known
}

export async function getNotice(): Promise<NoticeApiResponse> {
    const CMS_URL = process.env.CMS_URL || 'http://52.175.21.181';
    const API_TOKEN = process.env.STRAPI_API_TOKEN;
  
    try {
      const res = await fetch(`${CMS_URL}/api/notice?populate=*`, {
        method: 'GET',
        headers: API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : {},
        cache: 'no-store', // Or 'force-cache' or 'default' depending on caching strategy
      });
  
      if (!res.ok) {
        // Log the error status and text for more details
        const errorText = await res.text();
        console.error(`API request failed with status ${res.status}: ${errorText}`);
        throw new Error(`Failed to fetch notice data. Status: ${res.status}`);
      }
  
      const data: NoticeApiResponse = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching notice data:', error);
      // Optionally, re-throw the error or return a specific error structure
      throw error; // Re-throwing the error to be handled by the caller
    }
  }