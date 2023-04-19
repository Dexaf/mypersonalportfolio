import Card from "../Utility/Card/Card"
import { ContactMe } from "./ContactMe/ContactMe"
import { ContactsList } from "./ContactsList/ContactsList"

export const Contacts = () => {

    return <>
        <Card classes="p-4 mb-5">
            <ContactMe />
        </Card>
        <Card classes="p-4" isBlock={true}>
            <ContactsList />
        </Card>
    </>
}