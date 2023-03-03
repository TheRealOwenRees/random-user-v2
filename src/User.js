import React from "react";
import Contact from "./Contact";

export default function User({ name, dob, location, email, phone, picture }) {
  
  return (
    <div>
      <img src={picture.large} alt="name" />
      <p>Name : {name.title} {name.first} {name.last}</p>
      <p>Age : {dob.age}</p>
      <Contact location={location} email={email} phone={phone} />
      <br />
    </div>
  );
}
