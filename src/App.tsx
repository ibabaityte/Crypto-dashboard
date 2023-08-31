import React, {FC, useState, useEffect, useRef} from "react";

// style imports
import "./styles/styles.css";

// material ui imports
import {Grid} from "@material-ui/core";

// util imports
import {fetchAllCurrencies, fetchCurrencyInfo} from "./utils/apiUtils";

// component imports
import Header from "./components/Header";
import Content from "./components/Content";
import { PastDataInterface } from "./utils/interfaces";


const App: React.FC = () : React.JSX.Element => {

    const [currencies, setCurrencies] = useState<string[]>([]);
    const [pair, setPair] = useState<string>("");
    const [price, setPrice] = useState<string>("0.00");
    const [timeInterval, setTimeInterval] = useState<string>("300");
    const [pastData, setPastData] = useState<PastDataInterface>({
        datasets: [],
        labels: []
    });

    let socket = useRef<WebSocket | null>(null);
    let first = useRef<Boolean>(false);

    // TS is already expecting useEffect to return a function(void) or undefined so we do not need to declare any return types
    useEffect(() => {
        socket.current = new WebSocket('wss://ws-feed.pro.coinbase.com');
        fetchAllCurrencies(setCurrencies, first);
    }, []);

    // TS is already expecting useEffect to return a function(void) or undefined so we do not need to declare any return types
    useEffect(() => {
        fetchCurrencyInfo(pair, socket, setPrice, first, setPastData, timeInterval);
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
