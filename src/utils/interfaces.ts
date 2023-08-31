export interface DatasetInterface {
    label: string,
    data: Array<number>, // TODO fix me later when figure out wtf data is
    backgroundColor: string,
    borderColor: string,
    fill: boolean
}

export interface PastDataInterface {
    datasets: Array<DatasetInterface>,
    labels: Array<string>
}