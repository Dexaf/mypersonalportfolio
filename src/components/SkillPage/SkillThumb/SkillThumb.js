import "./SkillThumb.css"

function SkillThumb(props) {
    const index = props.index;
    const course = props.course;
    const selectThumb = index => {
        props.onSelectThumb(index);
    }

    return <div className="has-text-centered p-1 skillthumb mb-2" onClick={() => { selectThumb(index) }}>
        <img src={process.env.PUBLIC_URL + course.certification} alt={course.title}
            className="is4rat3"
            style={{ "width": 300 }} />
        <p className="legend">
            {course.title}
        </p>
    </div>
}

export default SkillThumb;