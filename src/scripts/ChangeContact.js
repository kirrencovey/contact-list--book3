import ContactCollection from "./ContactCollection"
import ContactList from "./ContactList"

const saveButton = document.querySelector("#addButton")


const ChangeContact = () => {
    let contactListEl = document.querySelector("#contactList")
    contactListEl.addEventListener("click", (event) => {
        if (event.target.id.startsWith("delete--")) {
            let contactId = event.target.id.split("--")[1]
            ContactCollection.deleteContact(contactId)
                .then(ContactList)
        } else if (event.target.id.startsWith("edit--")) {
            let contactId = event.target.id.split("--")[1]
            saveButton.textContent = "Update Contact"

            ContactCollection.getContact(contactId)
                .then((contact) => {
                    document.querySelector("#name").value = contact.name
                    document.querySelector("#phone").value = contact.phone
                    document.querySelector("#email").value = contact.email
                    document.querySelector("#contactId").value = contact.id
                })
    }
})}

export default ChangeContact
