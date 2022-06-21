import axios from "axios";
import {formatData} from "./dataChartUtils";

const fetchAllCurrencies = async (url, setCurrencies, first) => {
    let pairs = [];
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

const fetchCurrencyInfo = async (url, pair, socket, setPrice, first, setPastData) => {
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
        // console.log(e.data);
        let data = JSON.parse(e.data);
        if (data.type !== "ticker") {
            return;
        }
        //every time we receive an even from the websocket for our currency pair, update the price in state
        if (data.product_id === pair) {
            setPrice(data.price);
        }
    }

    let historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`;
    let dataArr = [];
    await axios.get(historicalDataURL)
        .then((data) => (dataArr = data));

    // helper function to format data that will be implemented later
    let formattedData = formatData(dataArr);
    setPastData(formattedData);
}

const changeCurrency = (e, url, pair, setPair, socket) => {
    let unsub = {
        type: "unsubscribe",
        product_ids: [pair],
        channels: ["ticker"]
    };
    let unsubMsg = JSON.stringify(unsub);

    socket.current.send(unsubMsg);

    setPair(e.target.value);
}

export {fetchAllCurrencies, fetchCurrencyInfo, changeCurrency};