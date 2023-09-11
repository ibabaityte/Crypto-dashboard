import axios from "axios";
import DataChartUtils from "./DataChartUtils";
import Msg from "./msgUtils";
import { ApiResultInterface, CurrencyPairInterface, FormattedDataInterface, SocketMessageEventInterface } from "./interfaces";
import React from "react";

export default class APIUtils {
    static API_URL: string | undefined = process.env.REACT_APP_API_URL;
    static INTERVALS: Array<number> = [30, 7, 1];
    static USD: string = "USD";

    static getGranularity = (timeInterval: number): number | null => {
        switch (timeInterval) {
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

    static generateUrl = (timeInterval: string, pair: string): string => {
        const interval: number = parseInt(timeInterval);
        const endDate: Date = new Date();
        const startDate: Date = new Date();

        if (this.INTERVALS.includes(interval)) {
            startDate.setDate(startDate.getDate() - interval);
            const start: string = new Date(startDate).toLocaleString('sv');
            const end: string = new Date(endDate).toLocaleString('sv');
            return `${this.API_URL}/products/${pair}/candles?granularity=${this.getGranularity(interval)}&start=${start}&end=${end}`;
        } else {
            return `${this.API_URL}/products/${pair}/candles?granularity=${this.getGranularity(interval)}`;
        }
    };

    static fetchAllCurrencies = async (setCurrencies: Function, first: any): Promise<void> => {
        let pairs: Array<CurrencyPairInterface> = [];
        await axios.get(`${this.API_URL}/products`)
            .then(res => {
                pairs = res.data;
            })
            .catch(err => {
                console.log(err);
            });

        const filtered: Array<CurrencyPairInterface> = pairs.filter((pair: CurrencyPairInterface) => pair.quote_currency === this.USD);
        filtered.sort((a: CurrencyPairInterface, b: CurrencyPairInterface) => (a.base_currency > b.base_currency) ? 1 : -1);
        setCurrencies(filtered);
        first.current = true;
    }

    static changeTimeInterval = (timeInterval: string, pair: string): string => {
        return this.generateUrl(timeInterval, pair);
    }

    static fetchCurrencyInfo = async (pair: string, socket: React.MutableRefObject<WebSocket | null>, setPrice: Function, first: React.MutableRefObject<Boolean>, setPastData: Function, timeInterval: string): Promise<void> => {
        if (!first.current) {
            return;
        }

        const url: string = this.changeTimeInterval(timeInterval, pair);
        const subMsgJson: string = Msg.getMsgJson(Msg.SubMsg, pair);

        if (socket.current != null) {
            socket.current.send(subMsgJson);
            socket.current.onmessage = (e: SocketMessageEventInterface) => {
                const data = JSON.parse(e.data);
                if (data.type !== "ticker") {
                    return;
                }
                //every time we receive an event from the websocket for our currency pair, update the price in state
                if (data.product_id === pair) {
                    setPrice(data.price);
                }
            }
        }

        await axios.get(url)
            .then((result: ApiResultInterface) => {
                let formattedData: FormattedDataInterface = DataChartUtils.formatData(result);
                setPastData(formattedData);
            }
            );
    }

    static changeCurrency = (e: React.ChangeEvent<HTMLInputElement>, pair: string, setPair: Function, socket: React.MutableRefObject<WebSocket>) => {
        console.log(e.nativeEvent);
        if (e.target.value !== "Crypto currency") {
            let unsubMsgJson = Msg.getMsgJson(Msg.UnsubMsg, pair);
            socket.current.send(unsubMsgJson);
            setPair(e.target.value);
        }
    }
}