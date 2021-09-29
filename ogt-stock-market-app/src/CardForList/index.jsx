import React,{useCallback, useState} from "react";
import "./style.css";

export default function CardForList(props) {
    
    const [valueOfShare,setValueOfShare] = useState(10);

    function sellHandler(event) {
        // console.clear();
        let searchedCompany = props.val["key"];
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
                // console.log("data--->>",props.walletAmount);
                // setCompanyDetails(data)
                props.setWalletAmount(+props.walletAmount+(+props.val["numberOfShares"]*valueOfShare));
                props.deleteListItem(event);
                
            }
        }
        )
    }
    return (
        <tr key={props.val["key"]} id="listCard-container"><td>{props.val["Name"]}</td><td>{props.val["numberOfShares"]}</td><td>{props.val["costOfPurchase"]}</td><td><button onClick={()=>sellHandler(props.idx)}>Sell</button></td></tr>
    )
}