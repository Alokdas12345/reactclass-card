import React from "react";
import "./Blog.css";
import img1 from "../components/image/img1.png";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PreviewIcon from "@mui/icons-material/Preview";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function blog(props) {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <hr id="separator" />
          <div className="icontop">
            <CheckCircleOutlineIcon id="icon3" />
            <FavoriteBorderIcon />
          </div>
          <img src={props.image} alt="mypic" className="card-img" />
        </div>
        <div className="card-info">
          <span className="card-category">
            <h4> {props.name}</h4>
          </span>
          <p>{props.email}</p>
          <button id="button1">
            <AssignmentIcon id="icon1" />
            Assign
          </button>
          <button id="button2">
            <PreviewIcon id="icon2" />
            View
          </button>
        </div>
      </div>
      </div>
  );
}
