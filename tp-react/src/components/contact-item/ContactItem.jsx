import React from 'react'
import './contact-items.css';

// Reminder: Props in React can be seen parameters in regular JavaScript functions
// The data passed as props can be accessed in such a way:
// props.data1, props.data2, props.data3
export default function ContactItem(props) {
    return (
        
        <div className="container">
            <img src={props.contactData.avatar} alt="" />
            <div className='name'>{props.contactData.first_name} {props.contactData.last_name}</div>
        </div>
    )
}
