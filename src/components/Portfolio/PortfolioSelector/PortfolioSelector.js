import { useEffect, useState } from "react";
import Filter from "../../Utility/Filter/Filter";
import PortfolioThumb from "../PortfolioThumb/PortfolioThumb";
function PortfolioSelector(props) {
    const projects = props.projects
    const [projectsFiltered, setProjectsFiltered] = useState(props.projects)

    const typeOfProjects = [...new Set(projects.map(project => project.type))];

    const [projTechFilter, setProjTechFilter] = useState("");
    const [typeProjFilter, setTypeProjFilter] = useState("");


    const filterProjTech = (ProjTech) => {
        setProjTechFilter(ProjTech)
    }

    const filterTypeOfProject = (type) => {
        setTypeProjFilter(type)
    }

    const findInArrayOfStringWithLowercase = (arr, str) => {
        if (str !== "") {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].toLowerCase().includes(str.toLowerCase())) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }

    useEffect(() => {
        setProjectsFiltered(projects.filter(project =>
            (project.name.toLowerCase().includes(projTechFilter.toLowerCase()) || findInArrayOfStringWithLowercase(project.technologies, projTechFilter))
            &&
            findInArrayOfStringWithLowercase(project.type, typeProjFilter)
        ));
    }, [projects, projTechFilter, typeProjFilter]);


    return <>
        <div>
            <Filter searchedType="project or technology"
                typeOfSubSearch={typeOfProjects}
                onSearch={filterProjTech}
                onFilterTypeOfSubSearch={filterTypeOfProject} />
        </div>
        <hr />
        <div className="is-flex is-flex-wrap-wrap lister-xl p-1 no-border" style={{maxHeight:650}}>
            {projectsFiltered.map((project, index) => {
                return <PortfolioThumb key={index} project={project} />
            })}
        </div>
    </>
}

export default PortfolioSelector