export const fetchTutors = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`)
    const data = await res.json()
    return data || []
}

export const fetchAvailableTutors = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/available`)
    const data = await res.json()
    return data || []
}