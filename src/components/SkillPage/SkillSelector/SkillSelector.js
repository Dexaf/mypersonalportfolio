import { useEffect, useState } from "react";
import SkillThumb from "../SkillThumb/SkillThumb";
import Filter from "../../Utility/Filter/Filter";

function SkillSelector(props) {
    const courses = props.courses
    const [coursesFiltered, setCoursesFiltered] = useState(props.courses)

    const typeOfCourses = [...new Set(courses.map(course => course.type))];

    const selectThumb = (courseId) => {
        props.onSelectCourse(courseId);
    }

    const [skillFilter, setSkillFilter] = useState("");
    const [typeSkillFilter, setTypeSkillFilter] = useState("");


    const filterSkill = (skill) => {
        setSkillFilter(skill)
    }

    const filterTypeOfCourse = (type) => {
        setTypeSkillFilter(type)
    }

    useEffect(() => {
        setCoursesFiltered(courses.filter(course => course.title.toLowerCase().includes(skillFilter.toLowerCase()) && course.type.includes(typeSkillFilter)));
    }, [courses, skillFilter, typeSkillFilter]);

    return <>
        <div>
            <Filter searchedType="skill" 
            typeOfSubSearch={typeOfCourses} 
            onSearch={filterSkill} 
            onFilterTypeOfSubSearch={filterTypeOfCourse} />
        </div>
        <hr />
        <div className="py-2 is-flex is-flex-wrap-wrap is-justify-content-space-evenly" style={{maxHeight:650, overflowY:"scroll"}}>
            {coursesFiltered.map((course, index) => (
                <SkillThumb key={index} course={course} index={index} onSelectThumb={(index) => { selectThumb(index) }} />
            ))}
        </div>
    </>
}

export default SkillSelector