import ContactCollection from "./ContactCollection"
import ContactList from "./ContactList"


const DeleteContact = () => {
    let contactListEl = document.querySelector("#contactList")
    contactListEl.addEventListener("click", (event) => {
        if (event.target.id.startsWith("delete--")) {
            let contactId = event.target.id.split("--")[1]
            ContactCollection.deleteContact(contactId)
                .then(ContactList)
        }
    })
}

export default DeleteContact
