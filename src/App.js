import React, {useState, useEffect, useRef} from "react";
import {fetchAllCurrencies, fetchCurrencyInfo, changeCurrency} from "./utils/apiUtils";
import Dashboard from "./components/Dashboard";
import "./styles.css";

const App = () => {

    const [currencies, setCurrencies] = useState([]);
    const [pair, setPair] = useState("");
    const [price, setPrice] = useState("0.00");
    const [pastData, setPastData] = useState({
        datasets: [],
        labels: []
    });

    const url = "https://api.exchange.coinbase.com";
    let socket = useRef(null);
    let first = useRef(false);

    useEffect(() => {
        socket.current = new WebSocket('wss://ws-feed.pro.coinbase.com');
        fetchAllCurrencies(url, setCurrencies, first).then(err => err ? console.log(err) : null);
    }, []);

    useEffect(() => {
        fetchCurrencyInfo(url, pair, socket, setPrice, first, setPastData);
    }, [pair]);

    console.log(pastData);
    return (
        <div className="App">
            <h1>Crypto dashboard</h1>
            <p>{pair}</p>
            <label htmlFor="crypto">Select cryptocurrency:</label>

            <select name="crypto" id="crypto" onChange={(e) => changeCurrency(e, url, pair, setPair, socket)}>
                <option value="">Select currency</option>
                {
                    currencies.map((currency, key) => {
                        return <option key={key} value={currency.id}>{currency.id}</option>
                    })
                }
            </select>

            {
                pair === "" ?
                    <p>$0.00</p>
                    :
                    <p>${price}</p>
            }

            <Dashboard data={pastData}/>

        </div>
    );
}

export default App;
