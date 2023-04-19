import "./ContactsList.css"
import LoadingSpinner from "../../Utility/LoadingSpinner/LoadingSpinner"
import { useEffect, useState } from "react";

export const ContactsList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(process.env.PUBLIC_URL + 'Assets/data/json/contacts.json')
            .then(response => response.json())
            .then(data => {
                setContacts(data)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    return <div className="contactsContainer" style={{ width: "100%" }}>
        {isLoading && <LoadingSpinner />}
        {!isLoading &&
            contacts.map(contact => {
                return <div key={contact.classIcon} onClick={() => { window.open(contact.href, "_blank") }}
                    className={"contactCard " + contact.classColor}>
                    <i className={contact.classIcon}></i>
                </div>
            })
        }
    </div>
}