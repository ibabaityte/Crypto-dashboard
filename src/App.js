import React, {useState, useRef, useEffect} from "react";
import axios from "axios";

const App = () => {

    const [currencies, setCurrencies] = useState([]);
    const [pair, setPair] = useState("1INCH-USD");
    const [price, setPrice] = useState("0.00");
    const [pastData, setPastData] = useState({});

    const ws = useRef(null);
    const url = "https://api.exchange.coinbase.com/products";

    useEffect(() => {
        //connect to websocket API
        ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");

        //make an API call with async function
        let pairs = [];
        const apiCall = async () => {
            await axios.get(url)
                .then(res => {
                    pairs = res.data;
                })

            let filtered = pairs.filter(pair => pair.quote_currency === 'USD');
            filtered.sort((a, b) => (a.base_currency > b.base_currency) ? 1 : -1);
            setCurrencies(filtered);
        }

        apiCall().catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            <h1>Crypto dashboard</h1>
        </div>
    );
}

export default App;
