import Contact from "./Contact"
import ContactCollection from "./ContactCollection"

let contactListEl = document.querySelector("#contactList")

const ContactList = () => {
    ContactCollection.get()
        .then((parsedContacts) => {
            contactListEl.innerHTML = ""
            parsedContacts.map((contactObject) => {
                const contactHTML = Contact(contactObject)
                contactListEl.innerHTML += contactHTML
            })
        })
}

export default ContactList