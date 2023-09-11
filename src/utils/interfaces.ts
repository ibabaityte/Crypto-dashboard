import { MutableRefObject } from "react"

export interface PricePropInterface {
    pair: string,
    price: string
}

export interface TimeIntervalPropInterface {}

export interface CryptoInfoPropInterface {
    pair: string,
    price: string,
    pastData: FormattedDataPropInterface,
    timeInterval: string, 
    setTimeInterval: Function
}

export interface ChartPanelPropInterface {
    pair: string,
    price: string,
    timeInterval: string,
    setTimeInterval: Function
}

export interface ChartPropInterface {
    pastData: FormattedDataPropInterface
}

export interface SelectCurrencyPropInterface {
    pair: string, 
    setPair: Function, 
    socket: MutableRefObject<WebSocket | null>, 
    currencies: Array<CurrencyPairInterface>
}

export interface ContentPropInterface {
    price: string,
    pastData: FormattedDataPropInterface,
    pair: string, 
    setPair: Function, 
    socket: MutableRefObject<WebSocket | null>,
    currencies: Array<CurrencyPairInterface>,
    timeInterval: string, 
    setTimeInterval: Function
}

export interface ChartOptionsInterface {
    tooltips: {
        intersect: boolean,
        mode: string
    },
    responsive: boolean,
    maintainAspectRatio: boolean,
    scales: {
        y: {
            grid: {
                color: string
            }
        },
        x: {
            grid: {
                color: string
            }
        }
    }
}

export interface DatasetPropInterface {
    label: string,
    data: Array<number>,
    backgroundColor: string,
    borderColor: string,
    fill: boolean
}

export interface DatasetInterface {
    getLabel(): string
    setLabel(label: string): void
    getData(): Array<number>
    setData(data: Array<number>): void
    getBackgroundColor(): string
    setBackgroundColor(backgroundColor: string): void
    getBorderColor(): string
    setBorderColor(borderColor: string): void
    getFill(): boolean
    setFill(fill: boolean): void
}

export interface ApiResultInterface {
    data: Array<Array<number>>
}

export interface FormattedDataPropInterface {
    labels: Array<string>,
    datasets: Array<DatasetPropInterface>
}

export interface FormattedDataInterface {
    getLabels(): Array<string>
    setLabels(labels: Array<string>): void
}

export interface CurrencyPairInterface {
    base_currency: string,
    quote_currency: string,
    id: string
}

export interface SocketMessageEventInterface {
    data: string
}

export interface SocketMessageContentInterface {
    type: string,
    product_id: string,
    price: string
}