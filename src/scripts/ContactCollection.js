const ContactCollection = {
    get: function () {
        return fetch("http://localhost:8088/contacts")
            .then(response => response.json())
    },
    getContact: (contactId) => {
        return fetch(`http://localhost:8088/contacts/${contactId}`)
        .then(response => response.json())
    },
    post: function (newContact) {
        fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact)
    })
    },
    deleteContact: (contactId) => {
        return fetch(`http://127.0.0.1:8088/contacts/${contactId}`, {
                method: "DELETE"
        })
    },
    editContact: (contact, contactId) => {
        fetch(`http://localhost:8088/contacts/${contactId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        })
    }
}

export default ContactCollection