export const formatData = (data) => {
    let finalData = {
        data: {
            labels: [],
            datasets: [
                {
                    label: "Price",
                    data: [],
                    backgroundColor: "rgb(2, 222, 151)",
                    borderColor: "rgba(2, 222, 151, 0.2)",
                    fill: false
                }
            ]
        }
    };

    //convert dates from timestamp to mm/dd/yy format
    let dates = data.data.map((val) => {
        const ts = val[0];
        let date = new Date(ts * 1000);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return `${month}-${day}-${year}`;
    });

    //coinbase API returns multiple price values, we want the ending price for that day
    let priceArr = data.data.map((val) => {
        return val[4];
    });

    //reverse price array so it is in chronological order
    priceArr.reverse();

    //do same for dates
    dates.reverse();

    //set data labels as the date array for ChartJS
    finalData.data.labels = dates;

    //price array will be used as dataset for ChartJS
    finalData.data.datasets[0].data = priceArr;

    return finalData.data;
};