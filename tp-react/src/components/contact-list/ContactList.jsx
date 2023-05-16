import React, { useState, useEffect } from 'react';
import ContactItem from '../contact-item/ContactItem';
import './contactList.css'
import { Link } from 'react-router-dom';


export default function ContactList() {
    const API_URL = "https://random-data-api.com/api/v2/users?size=100";
    
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        
        fetch(API_URL)
            .then(data => data.json())
            .then(data => setContacts(data));

    }, []);

    const items = contacts.map(contact => {
        const newURL = "contact/" + contact.id
        return(
        <li key={contact.uid}>
            <Link to={newURL}>
            <ContactItem contactData = {contact}/>
            </Link>
        </li>);
    
    });

    if (contacts.length > 0) {
        return (
            <div>
                <ul className='ul'>
                {/* Reminder: {} (brackets) are used
                    to include data in the JSX */}
                    {items}
                </ul>
            </div>
        )
    }

    else {
        return <p>The contact list are being fetched...</p>
    }
}
