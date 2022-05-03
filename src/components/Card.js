import React from "react";
import star from "../images/Star 1.png";
import dot from "../images/Ellipse 6.png";
export default function Card(props) {
  const { img, rating, rank, Country , about , Price} = props;
  if(rank === 1){
    return (
        <div>
          <img src={img} width="120px" height='200px' alt="" />
          <div>
            <img src={star} width = '15px' alt="" />
            <span>{rating} </span>
            <span>
              ({rank}) <img src={dot} alt="" />
            </span>
            <span>{Country}</span>
          </div>
          <p>{about}</p>
          <div>
              <strong>From {Price}</strong> <span>/ person</span>
          </div>
        </div>
      );
  }
  else{
    return (
        <div>
          <img src={img} width="150px" alt="" />
          <div>
            <img src={star} width = '15px' alt="" />
            <span>{rating} </span>
            <span>
              ({rank}) <img src={dot} alt="" />
            </span>
            <span>{Country}</span>
          </div>
          <p>{about}</p>
          <div>
              <strong>From {Price}</strong> <span>/ person</span>
          </div>
        </div>
      );
  }
}
