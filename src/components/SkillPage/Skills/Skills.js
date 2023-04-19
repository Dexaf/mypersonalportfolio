import SkillDetails from "../SkillDetails/SkillDetails"
import Card from "../../Utility/Card/Card"
import SkillSelector from "../SkillSelector/SkillSelector"
import { useEffect, useState } from "react"
import LoadingSpinner from "../../Utility/LoadingSpinner/LoadingSpinner"

function Skills() {
    const [courses, setCourses] = useState([])
    const [selectedCourse, setSelectedCourse] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        fetch(process.env.PUBLIC_URL + 'Assets/data/json/skills.json')
            .then(response => response.json())
            .then(data => {
                setCourses(data)
                setSelectedCourse(data[0])
                setIsLoading(false)
            })
            .catch(err => console.error(err))
    }, []);

    const onSelectCourse = (courseId) => {
        setSelectedCourse(courses[courseId])
    }

    return <>
        {isLoading ?
            <Card classes="LoadingBox">
                <LoadingSpinner />
            </Card>
            :
            <>
                <Card>
                    <SkillDetails course={selectedCourse} />
                </Card>
                <div className="my-5"></div>
                <Card>
                    <SkillSelector courses={courses} onSelectCourse={onSelectCourse} />
                </Card>
            </>}
    </>
}

export default Skills