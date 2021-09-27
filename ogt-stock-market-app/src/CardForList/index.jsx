import React from "react";
import "./style.css";

export default function CardForList(props) {
    console.log("my Lit-->>", props.myList);
    return (
        <div id="listCard-container">{props.val["Name"]}</div>
    )
}