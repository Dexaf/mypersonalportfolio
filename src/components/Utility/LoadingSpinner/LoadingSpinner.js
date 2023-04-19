import "./LoadingSpinner.css"
function LoadingSpinner(props) {
    const classes = props.classes
    return <img className={"spinnerPlacer " + classes}
        src={process.env.PUBLIC_URL + "/Assets/svg/loading-spinner.svg"}
        alt="loading spinner" />
}

export default LoadingSpinner;