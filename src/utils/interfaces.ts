export interface DatasetInterface {
    // label: string,
    // data: Array<number>,
    // backgroundColor: string,
    // borderColor: string,
    // fill: boolean
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

export interface FormattedDataInterface {
    // labels: Array<string>,
    // datasets: Array<DatasetInterface>
    getLabels(): Array<string>
    setLabels(labels: Array<string>): void
}

export interface CurrencyPairInterface {
    base_currency: string,
    quote_currency: string
}

export interface SocketMessageEventInterface {
    data: string
}

export interface SocketMessageContentInterface {
    type: string,
    product_id: string,
    price: string
}