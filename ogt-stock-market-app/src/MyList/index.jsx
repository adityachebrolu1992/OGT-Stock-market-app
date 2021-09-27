import React from "react";
import CardForList from "../CardForList";
import "./style.css";

export default function MyList(props) {

    return (
        <div id="list-container">
            {props.myList.map((val, idx) => {
                return <CardForList val={val} />
            })}
        </div>
    )
}