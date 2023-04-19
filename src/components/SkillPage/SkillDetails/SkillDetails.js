function SkillDetails(props) {

    const course = props.course;
    const courseCertification = course.certification;
    const courseTitle = course.title;
    const courseExperience = course.experience
    const courseDescritpion = course.description
    const courseUsage = course.usage

    return <div className="columns">
        <div className="column is-4 is-flex is-align-items-center">
            <img src={courseCertification} alt={courseTitle} />
        </div>
        <div className="column is-8 content">
            <h2 className="is-size-2 is-size-3-mobile pb-3" style={{ "borderBottom": "1px solid #a7a7a7" }}>
                {courseTitle}
            </h2>
            <div>
                <h4 className="is-size-4 is-size-5-mobile">
                    <i className="fa-solid fa-person-digging"></i> Experience
                </h4>
                <progress className="progress is-info" value={courseExperience} max="100">
                </progress>
            </div>
            <div className="columns pt-5">
                <div className="column">
                    <h4 className="is-size-4 is-size-5-mobile">
                        <i className="fa-solid fa-cloud"></i> My thought
                    </h4>
                    <p>
                        {courseDescritpion}
                    </p>
                </div>
                {courseUsage.length > 0 &&
                    <div className="column">
                        <h4 className="is-size-4 is-size-5-mobile">
                            <i className="fa-solid fa-diagram-project"></i> Project where used
                        </h4>
                        <ul>
                            {courseUsage.map((project, index) => {
                                return <li key={index}>
                                    {project}
                                </li>
                            })}
                        </ul>
                    </div>
                }
            </div>
        </div>
    </div>
}

export default SkillDetails