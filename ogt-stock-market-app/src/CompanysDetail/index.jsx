import React, { useState } from "react";
import "./style.css";

export default function CompanysDetail(props) {


    function listHandler() {
        // console.log("add to list-->>",props.myList)
        let tempList = [...props.myList, props.companyDetails];
        // console.log("tempList-->>",tempList[0])
        props.setMyList(tempList);
        // console.log("setList-->>",props.MyList[0])

    }

    return (
        props.companyDetails.hasOwnProperty("Name") ? <div id="card-container">
            <h2>{props.companyDetails["Name"]}</h2>
            <div id="inner-container"><p><strong>AssetType:</strong> {props.companyDetails["AssetType"]}</p> <button id="list-button" onClick={listHandler}>Add to my List</button></div>
            <p><strong>CIK:</strong> {props.companyDetails["CIK"]}</p>
            <p><strong>Description</strong></p>
            <p>{props.companyDetails["Description"]}</p>
        </div> : null
    )
}