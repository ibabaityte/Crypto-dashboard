import axios from "axios";

const fetchAllCurrencies = async (url, setCurrencies) => {
    let pairs = [];
    await axios.get(url)
        .then(res => {
            pairs = res.data;
        })
        .catch(err => {
            console.log(err);
        })

    let filtered = pairs.filter(pair => pair.quote_currency === 'USD');
    filtered.sort((a, b) => (a.base_currency > b.base_currency) ? 1 : -1);
    setCurrencies(filtered);
}

const fetchCurrencyInfo = (pair, socket, setPrice) => {
    let sub = {
        type: "subscribe",
        product_ids: [pair],
        channels: ["ticker"]
    };

    let subMsg = JSON.stringify(sub);

    socket.onopen = () => socket.send(subMsg);

    socket.onmessage = (e) => {
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
}

const changeCurrency = (e, url, pair, setPair) => {
    let unsub = {
        type: "unsubscribe",
        product_ids: [pair],
        channels: ["ticker"]
    };
    let unsubMsg = JSON.stringify(unsub);

    let socket = new WebSocket('wss://ws-feed.pro.coinbase.com');

    socket.onmessage = function(e){ console.log(e.data); };
    socket.onopen = () => socket.send(unsubMsg);

    setPair(e.target.value);
}

export {fetchAllCurrencies, fetchCurrencyInfo, changeCurrency};