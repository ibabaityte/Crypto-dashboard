import { FormattedData } from "./models/FormattedData";
import { ApiResultInterface } from "./interfaces";

export default class DataChartUtils {
    static formatDate = (timestamp: number): string => {
        const date: Date = new Date(timestamp * 1000);
        const day: number = date.getDate();
        const month: number = date.getMonth() + 1;
        const year: number = date.getFullYear();

        return `${month}-${day}-${year}`;
    };

    static getDateArr = (apiResult: ApiResultInterface): Array<string> => {
        // convert dates from timestamp to mm/dd/yy format
        const dates = apiResult.data.map((value: Array<number>): string => this.formatDate(value[0]));

        // reverse dates array so it is in chronological order
        return dates.reverse();
    };

    static getEndPriceArr = (apiResult: ApiResultInterface): Array<number> => {
        //coinbase API returns multiple price values, we want the ending price for that day
        let priceArr: Array<number> = apiResult.data.map((val: Array<number>) => val[4]);

        //reverse price array so it is in chronological order
        return priceArr.reverse();
    };

    static formatData = (apiResult: ApiResultInterface): FormattedData => {

        // let formattedData: FormattedDataInterface = {
        //     labels: [],
        //     datasets: 
        //     [
        //         {
        //             label: "Price",
        //             data: [],
        //             backgroundColor: "rgb(2, 222, 151)",
        //             borderColor: "rgba(2, 222, 151, 0.2)",
        //             fill: false
        //         }
        //     ]
        // };
        const formattedData = FormattedData.defaultFormattedData();

        //set data labels as the date array for ChartJS
        formattedData.setLabels(this.getDateArr(apiResult));

        //price array will be used as dataset for ChartJS
        formattedData.getDatasets()[0].setData(this.getEndPriceArr(apiResult));

        return formattedData;
    }
}