import ContactCollection from "./ContactCollection"

const ContactForm = () => {
    let button = document.querySelector("#addButton")
    button.addEventListener("click", () => {
        const name = document.querySelector("#name").value
        const phone = document.querySelector("#phone").value
        const email = document.querySelector("#email").value
        const contactId = document.querySelector("#contactId").value

        let newContact = {
            name: name,
            phone: phone,
            email: email
        }

        if (button.textContent === "Add Contact") {
            ContactCollection.post(newContact)

        } else if (button.textContent === "Update Contact"){
            ContactCollection.editContact(newContact, contactId)
        }



    })
}

export default ContactForm