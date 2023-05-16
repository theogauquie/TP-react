import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './contactinfo.css'


export default function ContactInfo() {

  const API_URL = "https://random-data-api.com/api/v2/users?";

  let { id } = useParams();


  const [info, setInfo] = useState();

  useEffect(() => {
    const url = API_URL + "?size=10"
    fetch(API_URL)
        .then(data => data.json())
        .then(data => setInfo(data));
  }, [])

  if (info) {
    console.log(info);
    return (
      <body>
         <div className="title">Voici les détails</div>
         <div className="details">
          <p>First Name: {info.first_name}</p>
          <p>Last Name: {info.last_name}</p>
          <p>City: {info.address.city}</p>
          <p>Gender: {info.gender}</p>
          <p>Date of birth: {info.date_of_birth}</p>
          <button className="backtolist">Back to list</button>
         </div>
         
        
      </body>
    )
  }

  else {
    return <p>Data is being fetched...</p>
  }
}