import React, { useState } from "react";
import "./style.css";

export default function Search() {
    const [searchedList, setSearchedList] = useState([]);
    function changeHandler(event) {
        let searchedKeyWord = event.target.value;
        if (searchedKeyWord.length === 0) {
            return
        } else {
            fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchedKeyWord}&apikey=9E3RT7E2BU9RO7SW`).then(response => {
                if (response.ok) {
                    console.clear();
                    return response.json();
                    
                } else {
                    throw new Error("cant find any match")
                    return
                }
            }).then(list => list["bestMatches"]).then(val => {
                let myList = [];
                console.log("my val--->>>",val)
                if(val.length>0){
                for (let i = 0; i < val.length; i++) {
                    myList.push(val[i]["2. name"])
                };
                setSearchedList(myList);
            }else{
                setSearchedList([]);
            }
            });
        }

    }

    return (
        <div id="search-container">
            <label htmlFor="search-bar">Enter the company name:
                <input onChange={changeHandler} list="browser" name="browser" id="search-bar" />
                <datalist id="browser">
                    {searchedList.map((myVal,idx) => {
                        return <option key={idx} value={myVal} />
                    })}
                </datalist>
                <button id="button">Search</button>
            </label>
        </div>
    )
}