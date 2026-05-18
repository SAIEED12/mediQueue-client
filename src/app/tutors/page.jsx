import TutorCard from "@/components/TutorCard";
const fetchTutors = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`)
    const data = res.json()
    return data || []
}

const TutorsPage = async() => {
    const tutors = await fetchTutors()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 cursor-pointer">
            

            {
                tutors.map((tutor) =>  <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
            }
        </div>
    );
};

export default TutorsPage;