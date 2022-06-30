import React, {useState, useEffect, useRef} from "react";

// style imports
import "./styles/styles.css";

// material ui imports
import {Grid} from "@material-ui/core";

// util imports
import {fetchAllCurrencies, fetchCurrencyInfo} from "./utils/apiUtils";

// component imports
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {

    const [currencies, setCurrencies] = useState([]);
    const [pair, setPair] = useState("");
    const [price, setPrice] = useState("0.00");
    const [pastData, setPastData] = useState({
        datasets: [],
        labels: []
    });
    const [timeInterval, setTimeInterval] = useState("300");

    let socket = useRef(null);
    let first = useRef(false);

    useEffect(() => {
        socket.current = new WebSocket('wss://ws-feed.pro.coinbase.com');
        fetchAllCurrencies(setCurrencies, first).then(err => err ? console.log(err) : null);
    }, []);

    useEffect(() => {
        fetchCurrencyInfo(pair, socket, setPrice, first, setPastData, timeInterval).then(err => err ? console.log(err) : null);
    }, [pair, timeInterval]);

    return (
        <Grid container className="App">
            <Header/>
            <Content
                price={price}
                pastData={pastData}
                pair={pair}
                setPair={setPair}
                socket={socket}
                currencies={currencies}
                timeInterval={timeInterval}
                setTimeInterval={setTimeInterval}
            />
        </Grid>
    );
}

export default App;
