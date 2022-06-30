import axios from "axios";
import {formatData} from "./dataChartUtils";
import React from "react";

const fetchAllCurrencies = async (setCurrencies, first) => {
    let pairs = [];
    const url = "https://api.exchange.coinbase.com";
    await axios.get(url + "/products")
        .then(res => {
            pairs = res.data;
        })
        .catch(err => {
            console.log(err);
        })

    let filtered = pairs.filter(pair => pair.quote_currency === 'USD');
    filtered.sort((a, b) => (a.base_currency > b.base_currency) ? 1 : -1);
    setCurrencies(filtered);
    first.current = true;
}

const changeTimeInterval = (timeInterval, pair) => {
    let url = "";
    let endDate = new Date();
    let startDate = new Date();
    switch(timeInterval) {
        case "300":
            url = `https://api.exchange.coinbase.com/products/${pair}/candles?granularity=86400`;
            break;
        case "30":
            startDate = startDate.setDate(startDate.getDate() - 30);
            startDate = new Date(startDate).toLocaleString('sv');
            url = `https://api.exchange.coinbase.com/products/${pair}/candles?granularity=21600&start=${startDate}&end=${endDate}`;
            break;
        case "7":
            startDate = startDate.setDate(startDate.getDate() - 7);
            startDate = new Date(startDate).toLocaleString('sv');
            url = `https://api.exchange.coinbase.com/products/${pair}/candles?granularity=3600&start=${startDate}&end=${endDate}`;
            break;
        case "24":
            startDate = startDate.setDate(startDate.getDate() - 1);
            startDate = new Date(startDate).toLocaleString('sv');
            url = `https://api.exchange.coinbase.com/products/${pair}/candles?granularity=900&start=${startDate}&end=${endDate}`
    }
    return url;
}

const fetchCurrencyInfo = async (pair, socket, setPrice, first, setPastData, timeInterval) => {
    const url = changeTimeInterval(timeInterval, pair);
    if (!first.current) {
        return;
    }

    let sub = {
        type: "subscribe",
        product_ids: [pair],
        channels: ["ticker"]
    };
    let subMsg = JSON.stringify(sub);

    socket.current.send(subMsg);

    socket.current.onmessage = (e) => {
        let data = JSON.parse(e.data);
        if (data.type !== "ticker") {
            return;
        }
        //every time we receive an even from the websocket for our currency pair, update the price in state
        if (data.product_id === pair) {
            setPrice(data.price);
        }
    }

    let dataArr = [];
    await axios.get(url)
        .then((data) => (dataArr = data));

    // helper function to format data that will be implemented later
    let formattedData = formatData(dataArr);
    setPastData(formattedData);
}

const changeCurrency = (e, pair, setPair, socket) => {
    if(e.target.value === "Crypto currency") {
        return null;
    } else {
        let unsub = {
            type: "unsubscribe",
            product_ids: [pair],
            channels: ["ticker"]
        };
        let unsubMsg = JSON.stringify(unsub);

        socket.current.send(unsubMsg);

        setPair(e.target.value);
    }
}

export {fetchAllCurrencies, fetchCurrencyInfo, changeCurrency, changeTimeInterval};