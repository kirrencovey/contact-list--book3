import ContactCollection from "./ContactCollection"

const ContactForm = () => {
    let button = document.querySelector("#addButton")
    button.addEventListener("click", () => {
        const name = document.querySelector("#name").value
        const phone = document.querySelector("#phone").value
        const email = document.querySelector("#email").value

        let newContact = {
            name: name,
            phone: phone,
            email: email
        }
        ContactCollection.post(newContact)
    })
}

export default ContactForm