function Filter(props) {
    const typeOfSubSearch = props.typeOfSubSearch;
    const searchedType = props.searchedType;
    const search = (event) => {
        props.onSearch(event.nativeEvent.target.value)
    }

    const checkTypeOfSubSearch = (event) => {
        props.onFilterTypeOfSubSearch(event.nativeEvent.target.value)
    }

    return <>
        <div className="control">
            <div className="control has-icons-left has-icons-right">
                <input id={searchedType + "Name"}
                    className="input is-hovered is-rounded"
                    type="text" placeholder={"Search a " + searchedType + " name"}
                    onChange={search.bind(this)}
                />
                <span className="icon is-small is-left">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>
        </div>
        <div className="mt-3 is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
            {typeOfSubSearch.map((type, index) => {
                return <label key={index} className="radio is-clickable">
                    <input type="radio" name="typeOfSubSearch" value={type} onChange={checkTypeOfSubSearch} /> {type}
                </label>
            })}
            <label className="radio is-clickable">
                <input type="radio" name="typeOfSubSearch" value={""} onChange={checkTypeOfSubSearch} defaultChecked /> All
            </label>
        </div>
    </>
}

export default Filter