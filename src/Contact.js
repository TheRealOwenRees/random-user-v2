import React from 'react';

export default function Contact({ location, email, phone}) {
  const address = `${location.street.number} ${location.street.name},  
${location.city}, ${location.country} ${location.postcode}`
  return (
    <div>
      <p>Address: {address}</p>
      <p>Email: {email}</p>
      <p>Phone number: {phone}</p>
    </div>
  )
}
