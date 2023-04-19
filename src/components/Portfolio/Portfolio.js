import { useEffect, useState } from "react";
import Card from "../Utility/Card/Card";
import LoadingSpinner from "../Utility/LoadingSpinner/LoadingSpinner";
import PortfolioSelector from "./PortfolioSelector/PortfolioSelector";

function Portfolio() {

    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(process.env.PUBLIC_URL + 'Assets/data/json/projects.json')
            .then(response => response.json())
            .then(data => {
                setProjects(data)
                setIsLoading(false)
            })
            .catch(err => console.error(err));
    }, []);

    return <>
        <Card classes="mb-5">
            <h3 className="is-size-3 p-4">
                My projects
            </h3>
        </Card>

        {isLoading ?
            <Card classes="LoadingBox">
                <LoadingSpinner />
            </Card>
            :
            <Card>
                <PortfolioSelector projects={projects} />
            </Card>
        }
    </>
}

export default Portfolio;