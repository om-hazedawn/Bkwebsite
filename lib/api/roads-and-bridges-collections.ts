export async function getRoadsAndBridgesCollections() {
    const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://52.175.21.181';
    const API_TOKEN = process.env.STRAPI_API_TOKEN;
  
    try {
      const res = await fetch(`${CMS_URL}/api/roads-and-bridges-collections?populate=*`, {
        method: 'GET',
        headers: API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : {},
        cache: 'no-store', // Or 'force-cache' or 'default' depending on caching strategy
      });
  
      if (!res.ok) {
        // Log the error status and text for more details
        const errorText = await res.text();
        console.error(`API request failed with status ${res.status}: ${errorText}`);
        throw new Error(`Failed to fetch roads-and-bridges-collections data. Status: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching roads-and-bridges-collections data:', error);
      // Optionally, re-throw the error or return a specific error structure
      throw error; // Re-throwing the error to be handled by the caller
    }
  }