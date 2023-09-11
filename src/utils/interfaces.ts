export interface PricePropInterface {}

export interface TimeIntervalPropInterface {}

export interface CryptoInfoPropInterface {}

export interface ChartPanelPropInterface {}

export interface ChartPropInterface {
    pastData: FormattedDataPropInterface
}

export interface SelectCurrencyPropInterface {}

export interface ContentPropInterface {}

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