import React from "react";
import "./View.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function View() {
  const [{ details }, dispach] = useStateValue();
  console.log("specific", details[0]);

  return (
    <div className="contain">
      <div className="top">
        <div className="Name">
          <p>{details[0].name}</p>
        </div>
        <div className="contact">
          <h> CONTACT</h>
          <p>{details[0].contact}</p>
        </div>
        <div className="city">
          <h>CITY</h>
          <p>{details[0].city}</p>
        </div>
        <div className="state">
          <h>STATE</h>
          <p>Maharashtra</p>
        </div>
        <div className="view-details">
          <Link to="/">
            <button> Hide Details</button>
          </Link>
        </div>
      </div>
      <div className="below">
        <div className="desp">
          <h>Description</h>
          <p>{details[0].discription}</p>
          <p>{details[0].bs}</p>
        </div>
        <div className="details">
          <div className="left">
            <div className="contact-person">
              <h>Contact Person</h>
              <p>{details[0].conperson}</p>
            </div>
            <div className="designation">
              <h>Designation</h>
              <p>{details[0].website}</p>
            </div>

            <div className="email">
              <h>Email</h>
              <p>{details[0].email}</p>
            </div>
            <div className="phone">
              <h>phones</h>
              <p>{details[0].conperson}</p>
            </div>
          </div>
          <div className="right">
            <div className="address">
              <h>Addresss</h>
              <p>
                {details[0].street} , {details[0].suite}, {details[0].zipcode}
              </p>
            </div>
            <div className="city">
              <h>City</h>
              <p>{details[0].city}</p>
            </div>
            <div className="state">
              <h>State</h>
              <p>Maharashtra</p>
            </div>
            <div className="country">
              <h>country</h>
              <p>India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
