import React, { FC } from "react";
import { CryptoInfoPropInterface } from "../utils/interfaces";

// component imports
import ChartPanel from "./ChartPanel";
import Chart from "./Chart";

// material ui imports
import {Grid} from "@material-ui/core";

// style imports
import contentStyles from "../styles/contentStyles";

const CryptoInfo: FC<CryptoInfoPropInterface> = (props: CryptoInfoPropInterface): JSX.Element => {

    const classes = contentStyles();

    const {
        pair,
        price,
        pastData,
        timeInterval,
        setTimeInterval
    } = props;

    return (
        <Grid item xs={12} className={classes.cryptoInfo}>
                <ChartPanel
                    pair={pair}
                    price={price}
                    timeInterval={timeInterval}
                    setTimeInterval={setTimeInterval}
                />

                <Chart
                    pastData={pastData}
                />
        </Grid>
    );
}

export default CryptoInfo;