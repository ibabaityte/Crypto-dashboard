import React, {useState, useEffect} from "react";
import {fetchAllCurrencies ,fetchCurrencyInfo, changeCurrency} from "./utils/apiUtils";

const App = () => {

    const [currencies, setCurrencies] = useState([]);
    const [pair, setPair] = useState("1INCH-USD");
    const [price, setPrice] = useState("0.00");
    // const [pastData, setPastData] = useState({});

    const url = "https://api.exchange.coinbase.com/products";
    let socket = new WebSocket('wss://ws-feed.pro.coinbase.com');

    useEffect(() => {
        fetchAllCurrencies(url, setCurrencies);
    }, []);

    useEffect(() => {
        fetchCurrencyInfo(pair, socket, setPrice);
    }, [pair]);


    return (
        <div className="App">
            <h1>Crypto dashboard</h1>
            <p>{pair}</p>
            <label htmlFor="crypto">Select cryptocurrency:</label>

            <select name="crypto" id="crypto" onChange={(e) => changeCurrency(e, url, pair, setPair, socket)}>
                {
                    currencies.map((currency, key) => {
                        return <option key={key} value={currency.id}>{currency.id}</option>
                    })
                }
            </select>
            <p>{price}</p>
        </div>
    );
}

export default App;
