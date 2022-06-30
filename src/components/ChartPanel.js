import React from "react";

// material ui imports
import {Grid} from "@material-ui/core";

// commponent imports
import Price from "./Price";
import TimeInterval from "./TimeInterval";

const ChartPanel = (props) => {

    const {
        pair,
        price,
        timeInterval,
        setTimeInterval
    } = props;

    return (
        <Grid item xs={12}>
            <Grid container>
                <Price
                    pair={pair}
                    price={price}
                />
                <TimeInterval
                    timeInterval={timeInterval}
                    setTimeInterval={setTimeInterval}
                />
            </Grid>
        </Grid>
    );
}

export default ChartPanel;