import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts.js";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
      id={contact.id}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map(createCard)}

      {/*   <Card
        name={contacts[0].name}
        phone={contacts[0].phone}
        email={contacts[0].email}
        img={contacts[0].imgURL}
      />
      <Card
        name={contacts[1].name}
        phone={contacts[1].phone}
        email={contacts[1].email}
        img={contacts[1].imgURL}
      />
      <Card
        name={contacts[2].name}
        phone={contacts[2].phone}
        email={contacts[2].email}
        img={contacts[2].imgURL}
      /> */}
    </div>
  );
}

export default App;
