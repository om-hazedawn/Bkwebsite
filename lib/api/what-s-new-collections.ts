export async function getWhatsNewCollections(year: string, locale: string = 'en', page: number = 1, pageSize: number = 10) {
    const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://52.175.21.181';
    const API_TOKEN = process.env.STRAPI_API_TOKEN;

    // Construct pagination query parameters
    const paginationParams = `&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
  
    try {
      const res = await fetch(`${CMS_URL}/api/what-s-new-collections?populate=*&filters[Date][$gte]=${year}-01-01&filters[Date][$lte]=${year}-12-31&locale=${locale}${paginationParams}`, {
        method: 'GET',
        headers: API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : {},
        cache: 'no-store', // Or 'force-cache' or 'default' depending on caching strategy
      });
  
      if (!res.ok) {
        // Log the error status and text for more details
        const errorText = await res.text();
        console.error(`API request failed with status ${res.status}: ${errorText}`);
        throw new Error(`Failed to fetch what-s-new-collections data. Status: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching what-s-new-collections data:', error);
      // Optionally, re-throw the error or return a specific error structure
      throw error; // Re-throwing the error to be handled by the caller
    }
  }