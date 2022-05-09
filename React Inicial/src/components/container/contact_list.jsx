import React from 'react';
import ContactComponent from '../pure/contact'
import {Contact} from '../../models/contact.class'


const ContactListComponent = () => {


    const defaultContact = new Contact('Antonio', 'Piñero', 'antoniops@mail.com', false)

    

    return (
        <div>
                <ContactComponent contact={defaultContact} />           
        </div>
    );
};



export default ContactListComponent;
