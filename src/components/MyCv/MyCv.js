import { useState } from "react";
import Card from "../Utility/Card/Card";

function MyCv() {

    const ITA_CV = "Assets/Pdf/FedericoPisa-CV-ITA.pdf";
    const ENG_CV = "Assets/Pdf/FedericoPisa-CV-ENG.pdf";
    const [selectedCv, setSelectedCv] = useState(ITA_CV);

    return <Card>
        <div style={{ height: "70vh" }}>
            <embed src={selectedCv} type="application/pdf" width="100%" height="100%" />
        </div>
        <div className="buttons is-flex is-justify-content-space-evenly mt-3">
            <button className="button is-large itaBg" onClick={() => {setSelectedCv(ITA_CV)}}>
            </button>
            <button className="button is-large engBg" onClick={() => {setSelectedCv(ENG_CV)}}>
            </button>
        </div>
    </Card>
}

export default MyCv;