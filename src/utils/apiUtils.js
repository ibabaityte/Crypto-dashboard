import axios from "axios";
import {formatData} from "./dataChartUtils";
import {Msg} from "./msgUtils";

const apiUrl = process.env.REACT_APP_API_URL;

const getGranularity = (timeInterval) => {
    switch(timeInterval) {
        case 300:
            return 86400;
        case 30:
            return 21600;
        case 7:
            return 3600;
        case 1:
            return 900;
        default:
            return null;
    }
};

const generateUrl = (timeInterval, pair) => {
    const interval = parseInt(timeInterval);
    let endDate = new Date();
    let startDate = new Date();

    if ([30, 7, 1].includes(interval)) {
        startDate = startDate.setDate(startDate.getDate() - interval);
        startDate = new Date(startDate).toLocaleString('sv');
        endDate = new Date(endDate).toLocaleString('sv');
        return `${apiUrl}/products/${pair}/candles?granularity=${getGranularity(interval)}&start=${startDate}&end=${endDate}`;
    } else {
        return `${apiUrl}/products/${pair}/candles?granularity=${getGranularity(interval)}`;
    }
};

const fetchAllCurrencies = async (setCurrencies, first) => {
    let pairs = [];
    await axios.get(`${apiUrl}/products`)
        .then(res => {
            pairs = res.data;
        })
        .catch(err => {
            console.log(err);
        });

    let filtered = pairs.filter(pair => pair.quote_currency === 'USD');
    filtered.sort((a, b) => (a.base_currency > b.base_currency) ? 1 : -1);
    setCurrencies(filtered);
    first.current = true;
}

const changeTimeInterval = (timeInterval, pair) => {
    return generateUrl(timeInterval, pair);
}

const fetchCurrencyInfo = async (pair, socket, setPrice, first, setPastData, timeInterval) => {
    if (!first.current) {
        return;
    }

    const url = changeTimeInterval(timeInterval, pair);

    let subMsgJson = Msg.getMsgJson(Msg.SubMsg, pair);

    socket.current.send(subMsgJson);

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
    if(e.target.value !== "Crypto currency") {
        let unsubMsgJson = Msg.getMsgJson(Msg.UnsubMsg, pair);
        socket.current.send(unsubMsgJson);
        setPair(e.target.value);
    }
}

export {fetchAllCurrencies, fetchCurrencyInfo, changeCurrency, changeTimeInterval};
