import React from "react";

// material ui imports
import Grid from '@mui/material/Grid';

const ChartInfo = (props) => {

    const {
        pair,
        price
    } = props;

    return (
        <Grid item xs={10} className={`chartInfo`}>
            {
                pair === "" ?
                    <p className={`price`}>$0.00</p>
                    :
                    <p className={`price`}>${price}</p>
            }
        </Grid>
    );
}

export default ChartInfo;