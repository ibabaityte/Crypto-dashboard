import React from "react";

// component imports
import ChartInfo from "./ChartInfo";
import ChartComponent from "./ChartComponent";

// material ui imports
import Grid from '@mui/material/Grid';

const CryptoInfo = (props) => {

    const {
        pair,
        price,
        pastData
    } = props;

    return (
        <Grid container className={`dashboard`}>
            <ChartInfo
                pair={pair}
                price={price}
            />

            <ChartComponent
                data={pastData}
            />
        </Grid>
    );
}

export default CryptoInfo;