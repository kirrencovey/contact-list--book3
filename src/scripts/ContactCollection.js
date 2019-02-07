const ContactCollection = {
    get: function () {
        return fetch("http://localhost:8088/contacts")
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
    }
}

export default ContactCollection