import React from "react";
import image12 from "../images/image 12.png";
import star from "../images/Star 1.png";
export default function Carousel() {
  return (
    <div>
      <div id="card-1">
        <small className="tag">SOLD OUT</small>
        <img className="image-12" src={image12} alt="" />
        <img className="star" src={star} alt="" />
        <small>
          5.0 <small className="light-text">(6)</small>{" "}
          <div className="dot"></div>{" "}
          <small className="light-text">India</small>
        </small>
        <p className="about-person">Life lessons with Katie Zaferes</p>
        <p className = "price-tag">
          <strong>From $136</strong>
           &nbsp;/ person
        </p>
      </div>
      <div id="card-2">
        <small className="tag">SOLD OUT</small>
        <img className="image-12" src={image12} alt="" />
        <img className="star" src={star} alt="" />
        <small>
          5.0 <small className="light-text">(6)</small>{" "}
          <div className="dot"></div>{" "}
          <small className="light-text">India</small>
        </small>
        <p className="about-person">Life lessons with Katie Zaferes</p>
        <p className = "price-tag">
          <strong>From $136</strong>
           &nbsp;/ person
        </p>
      </div>
      <div id="card-3">
        <small className="tag">SOLD OUT</small>
        <img className="image-12" src={image12} alt="" />
        <img className="star" src={star} alt="" />
        <small>
          5.0 <small className="light-text">(6)</small>{" "}
          <div className="dot"></div>{" "}
          <small className="light-text">India</small>
        </small>
        <p className="about-person">Life lessons with Katie Zaferes</p>
        <p className = "price-tag">
          <strong>From $136</strong>
           &nbsp;/ person
        </p>
      </div>
    </div>
  );
}
