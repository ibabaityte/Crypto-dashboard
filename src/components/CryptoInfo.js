import React from "react";

// component imports
import ChartPanel from "./ChartPanel";
import ChartComponent from "./ChartComponent";

// material ui imports
import {Grid} from "@material-ui/core";

// style imports
import contentStyles from "../styles/contentStyles";

const CryptoInfo = (props) => {

    const classes = contentStyles();

    const {
        pair,
        price,
        pastData
    } = props;

    return (
        <Grid item xs={12} className={classes.cryptoInfo}>
                <ChartPanel
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