function Card(props) {
    const classes = (props.classes ? props.classes : "") + " card p-2"
    const block = props.isBlock ? { display: "block" } : null;

    return <div className={classes} style={block}>
        {props.children}
    </div>
}

export default Card;