const API_BASE_URL = 'https://stgbackend.spodia.com/api';

export async function fetchEventTypes() {
  try {
    const res = await fetch(`${API_BASE_URL}/event/types/`, {
      method: "GET",
      // next: { revalidate: 3600 } // only for Next.js App Router
    });
    if (!res.ok) return { records: [] };
    return res.json();
  } catch (error) {
    console.error("Error fetching event types:", error);
    return { records: [] };
  }
}

export async function fetchVenueTypes() {
  try {
    const res = await fetch(`${API_BASE_URL}/venue/types/`, {
      method: "GET",
      // next: { revalidate: 3600 }
    });
    if (!res.ok) return { records: [] };
    return res.json();
  } catch (error) {
    console.error("Error fetching venue types:", error);
    return { records: [] };
  }
}

export async function searchCityByName(name: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/cities/?name=${encodeURIComponent(name)}`, {
      method: "GET",
    });
    if (!res.ok) return { data: { records: [] } };
    const data = await res.json();
    return { data };
  } catch (error) {
    console.error("Error searching cities:", error);
    return { data: { records: [] } };
  }
}
