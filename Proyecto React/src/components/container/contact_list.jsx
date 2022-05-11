import React, { useState, useRef } from "react";
import ContactComponent from "../pure/contact";
import { Contact } from "../../models/contact.class";

const ContactListComponent = () => {

    const nameRef = useRef('')
    const surNameRef = useRef('')
    const emailRef = useRef('')

    const [contacts, setContacts] = useState([]);

    const handleAddContact = () => {
        if (nameRef.current.value !== '' && surNameRef.current.value !== '' && emailRef.current.value !== '') {
            const newContact = new Contact(
                nameRef.current.value,
                surNameRef.current.value,
                emailRef.current.value,
                false
            )
            setContacts([...contacts, newContact])
            limpiarCampos();
            
        } else {
            alert('Debes rellenar todos los campos')
        }
    }

    const limpiarCampos = () => {
        nameRef.current.value = ''
        surNameRef.current.value = ''
        emailRef.current.value = ''
    }


    const handleDeleteContact = (email) => {
        const newContacts = contacts.filter((contact) => contact.email !== email);
        setContacts(newContacts)
    }



    return (
        <div>
            <div>
                <div style={{ marginTop: "20px" }}>
                    <input ref={nameRef} type="text" placeholder="nombre" />
                </div>
                <div style={{ marginTop: "20px" }}>
                    <input ref={surNameRef} type="text" placeholder="apellidos" />
                </div>
                <div style={{ marginTop: "20px" }}>
                    <input ref={emailRef} type="text" placeholder="email" />
                </div>
                <div style={{ marginTop: "20px" }}>
                    <button onClick={handleAddContact}>Agregar Contacto</button>
                </div>
            </div>

            <div style={{ marginTop: "20px" }}>
                {contacts.map((contact, index) => {
                    return (<ContactComponent contact={contact} key={index} handleDeleteContact={handleDeleteContact} />)
                })}

            </div>
        </div>

    );
};

export default ContactListComponent;
