import "./Data.css";
import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Data({
  name,
  contact,
  city,
  stat,
  discription,
  bs,
  conperson,
  street,
  suite,
  zipcode,
  email,
  website,
}) {
  const [{ details }, dispach] = useStateValue();

  const viewdetails = () => {
    dispach({
      type: "SHOW-DETAILS",
      item: {
        name: name,
        contact: contact,
        city: city,
        discription: discription,
        bs: bs,
        conperson: conperson,
        street: street,
        suite: suite,
        zipcode: zipcode,
        email: email,
        website: website,
      },
    });
  };

  return (
    <div className="container">
      <div className="Name">
        <p>{name}</p>
      </div>
      <div className="contact">
        <div className="subhed"> CONTACT</div>
        <p>{contact}</p>
      </div>
      <div className="city">
        <div className="subhed">CITY</div>
        <p>{city}</p>
      </div>
      <div className="state">
        <div className="subhed">STATE</div>
        <p>{stat}</p>
      </div>
      <div className="view-details">
        <Link to="/details">
          <button onClick={viewdetails}> View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Data;
