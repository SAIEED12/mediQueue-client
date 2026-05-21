export const fetchTutors = async (searchTerm = "", startDate = "", endDate = "") => {
  try {
    // Construct search url with search parameter hooks dynamically
    const queryParams = new URLSearchParams();
    
    if (searchTerm) queryParams.append("search", searchTerm);
    if (startDate) queryParams.append("startDate", startDate);
    if (endDate) queryParams.append("endDate", endDate);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors?${queryParams.toString()}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to pull collections");
    return await res.json();
  } catch (error) {
    console.error("Data fetch exception log:", error);
    return [];
  }
};
export const fetchAvailableTutors = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/available`)
    const data = await res.json()
    return data || []
}