import React, {FC, JSX, useState, useEffect, useRef} from "react";

// style imports
import "./styles/styles.css";

// material ui imports
import {Grid} from "@material-ui/core";

// util imports
import ApiUtils from "./utils/APIUtils";

// component imports
import Header from "./components/Header";
import Content from "./components/Content";
import { FormattedDataInterface } from "./utils/interfaces";
import { FormattedData } from "./utils/models/FormattedData";


const App: FC = () : JSX.Element => {

    const [currencies, setCurrencies] = useState<string[]>([]);
    const [pair, setPair] = useState<string>("");
    const [price, setPrice] = useState<string>("0.00");
    const [timeInterval, setTimeInterval] = useState<string>("300");
    const [pastData, setPastData] = useState<FormattedDataInterface>(new FormattedData([], []));

    let socket = useRef<WebSocket | null>(null);
    let first = useRef<Boolean>(false);

    // TS is already expecting useEffect to return a function(void) or undefined so we do not need to declare any return types
    useEffect(() => {
        socket.current = new WebSocket('wss://ws-feed.pro.coinbase.com');
        ApiUtils.fetchAllCurrencies(setCurrencies, first);
    }, []);

    // TS is already expecting useEffect to return a function(void) or undefined so we do not need to declare any return types
    useEffect(() => {
        ApiUtils.fetchCurrencyInfo(pair, socket, setPrice, first, setPastData, timeInterval);
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
