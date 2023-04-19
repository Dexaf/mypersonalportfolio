import { useState } from "react";
import './PortfolioThumb.css'

function PortfolioThumb(props) {
    const project = props.project;
    const [mediaToggler, setMediaToggler] = useState(true);

    return <div className="box p-1">
        <div className="columns m-0">
            <div className="column is-3 has-text-centered">
                <h3 className="is-size-4 mb-3">
                    {project.name}
                </h3>
                {mediaToggler ?
                    <img src={project.imgPreview + project.name + ".png"} alt={project.name + " img preview"} />
                    :
                    <video controls width="300" height="300">
                        <source type="video/mp4" src={project.videoPreview} alt={project.name + " video preview"} />
                    </video>
                }
                <div className="buttonHolder">
                    <button className="button" onClick={() => { setMediaToggler(true) }}>
                        <i className="fa-solid fa-image"></i>
                    </button>
                    <button className="button" onClick={() => { setMediaToggler(false) }}>
                        <i className="fa-solid fa-video"></i>
                    </button>
                </div>
            </div>
            <div>
                <h5 className="is-size-5">
                    Description
                </h5>
                <p className="descriptionBox mb-3" dangerouslySetInnerHTML={{ __html: project.description }}>
                </p>
                <div className="mb-2">
                    <h5 className="is-size-5">
                        Used technologies
                    </h5>
                    <ul className="lister-xs">
                        {project.technologies.map((technology, index) => {
                            return <li key={index}>
                                {technology}
                            </li>
                        })}
                    </ul>
                </div>
                <div>
                    <a href={project.onlineUrl}>
                        <i className="fas fa-globe"></i> link to the project
                    </a>
                    <br />
                    <a href={project.gitHubUrl}>
                        <i className="fab fa-github"></i> link to github repository
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default PortfolioThumb;