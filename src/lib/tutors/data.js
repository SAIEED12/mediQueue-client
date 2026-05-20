export const fetchTutors = async(searchTerm) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors?search=${searchTerm}`)
    const data = await res.json()
    return data || []
}

export const fetchAvailableTutors = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/available`)
    const data = await res.json()
    return data || []
}