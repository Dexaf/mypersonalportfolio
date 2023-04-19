import { Link } from "react-router-dom";
import Card from "../Utility/Card/Card";
import PhotoCarousel from "../Utility/PhotoCarousel/PhotoCarousel";
import { useEffect, useState } from "react";

function AboutMe() {
    const [photosSuit, setphotosSuit] = useState([]);
    const [photosHobbies, setphotosHobbies] = useState([]);

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + 'Assets/data/json/photosSuit.json')
            .then(response => response.json())
            .then(data => setphotosSuit(data))
            .catch(err => console.error(err));

        fetch(process.env.PUBLIC_URL + 'Assets/data/json/photosHobbies.json')
            .then(response => response.json())
            .then(data => setphotosHobbies(data))
            .catch(err => console.error(err));
    }, []);

    return <>
        <Card classes="mb-5">
            <h2 className="is-size-2 has-text-centered">
                Something about <b>Federico Pisa</b>
            </h2>
        </Card>
        <Card classes="columns m-0 my-5">
            <div className="column is-4 is-flex is-align-items-center">
                <PhotoCarousel photos={photosSuit} hasAutoPlay={true} hasLoop={true} />
            </div>
            <div className="column is-8">
                <h4 className="is-size-4 is-bold">Who am I?</h4>
                <p className="content">
                    Hi, my name is <b>Federico Pisa</b>.<br />
                    I'm a <b>web developer</b> with a passion for <b>traveling</b> and <b>fitness</b>.
                </p>
                <h4 className="is-size-4 is-bold">My career</h4>
                <p className="content">
                    I've started my path in web development in 2020 thanks to an univeristy's exam, from there i've
                    kept studying to improve <Link className="tag is-info" to="/Skills">my skills</Link> trying to be up to date with the latest advancements.
                    <br />
                    I've been working in this field for {new Date().getFullYear() - 2021} years as a <b>full-stack developer</b> beacuse i think that it's a must to know how everything work even if in the end you'll
                    play only one role in the actual job.
                </p>
            </div>
        </Card>
        <Card classes="columns m-0 mt-5">
            <div className="column is-8">
                <h4 className="is-size-4 is-bold">Hobbies</h4>
                <p className="content">
                    In my free time i enjoy staying <b>active</b>, going to the <b>gym</b> and <b>practice Judo</b>.
                    <br />
                    I love to soothe my mind spending time <b>playing the guitar and studying music</b> but when i need to escape
                    from the every day life I go on <b>trekking adventure</b> or I take the first train/plane and I go to <b>explore cities</b>.
                </p>
            </div>
            <div className="column is-4 is-flex is-align-items-center">
                <PhotoCarousel photos={photosHobbies} hasAutoPlay={true} hasLoop={true} />
            </div>
        </Card>
    </>
}

export default AboutMe;