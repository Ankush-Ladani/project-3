import React from "react";
// import image12 from "../images/image 12.png";
import star from "../images/Star 1.png";
import Card from "./Card";
import image12 from "../images/image 12.png";
import weddPhoto from "../images/wedding-photography 1.png";
import mounBike from "../images/mountain-bike 1.png";
export default function Carousel() {
  return (
    <div className="Cards">
      <Card
        img={image12}
        rating="5.0"
        rank={6}
        Country="canada"
        about="Learn wedding photography"
        Price="$125"
        id="first"
      ></Card>
      <Card
        img={weddPhoto}
        rating="5.0"
        rank={9}
        Country="USA"
        about="Group Mountain Biking"
        Price="$50"
        id="second"
      ></Card>
      <div className="third">
      <Card
        className="third"
        img={mounBike}
        rating="5.0"
        rank={1}
        Country="India"
        about="Life lessons with Katie Zaferes"
        Price="$135"
        id="third"
      ></Card>
      </div>
      {/* <div id="card-1">
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
      </div> */}
    </div>
  );
}
