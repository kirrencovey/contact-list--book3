const Contact = (contactObject) => {
    return `
        <section id="${contactObject.id}" class="contactCard">
            <h3>${contactObject.name}</h3>
            <div>${contactObject.phone}</div>
            <div>${contactObject.email}</div>
            <button id="delete--${contactObject.id}">Delete Contact</button>
            <button id="edit--${contactObject.id}">Edit Contact</button>
        </section>
    `
}

export default Contact