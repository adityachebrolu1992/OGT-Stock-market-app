import React, { useState, useRef } from "react";
import "./style.css";
import CompanysDetail from "../CompanysDetail";

export default function Search(props) {
    const [searchedList, setSearchedList] = useState([]);
    const [companyDetails, setCompanyDetails] = useState([])
    function changeHandler(event) {
        let searchedKeyWord = event.target.value;
        if (searchedKeyWord.length > 0) {
            let request = require("request");
            let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchedKeyWord}&apikey=9E3RT7E2BU9RO7SW`;
            request.get({
                url: url,
                json: true,
                headers: { "User-Agent": "request" }
            }, (err, res, data) => {
                if (err) {
                    console.log("Error:", err);
                } else if (res.statusCode !== 200) {
                    console.log("Status:", res.statusCode);
                } else {
                    let recommendedList = [];
                    for (let i = 0; i < data["bestMatches"].length; i++) {
                        recommendedList.push(data["bestMatches"][i]["1. symbol"]);
                    }
                    console.log(recommendedList);
                    setSearchedList(recommendedList);
                }
            }
            )
        }

    }



    const myRef = useRef();

    function searchHandler() {
        console.clear();
        let searchedCompany = myRef.current.value;
        let request = require("request");
        let url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${searchedCompany}&apikey=9E3RT7E2BU9RO7SW`;
        request.get({
            url: url,
            json: true,
            headers: { "User-Agent": "request" }
        }, (err, res, data) => {
            if (err) {
                console.log("Error:", err);
            } else if (res.statusCode !== 200) {
                console.log("Status:", res.statusCode);
            } else {
                console.log(data);
                setCompanyDetails(data)
            }
        }
        )
    }

    return (
        <div id="search-container">
            <label htmlFor="search-bar">Enter the company name:
                <input ref={myRef} onChange={changeHandler} list="browser" name="browser" id="search-bar" />
                <datalist id="browser">
                    {searchedList.map((myVal, idx) => {
                        return <option key={idx} value={myVal} />
                    })}
                </datalist>
                <button onClick={searchHandler} id="button">Search</button>
            </label>
            <CompanysDetail companyDetails={companyDetails} myList={props.myList} setMyList={props.setMyList} />
        </div>
    )
}