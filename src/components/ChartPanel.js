import React from "react";

// material ui imports
import {Grid} from "@material-ui/core";

// style imports
import contentStyles from "../styles/contentStyles";

const ChartPanel = (props) => {

    const classes = contentStyles();

    const {
        pair,
        price
    } = props;

    return (
        <Grid item xs={12}>
            {
                pair === "" ?
                    <div>
                        <h3 className={classes.pair}>Crypto</h3>
                        <p className={classes.price}>$0.00</p>
                    </div>
                    :
                    <div>
                        <h3 className={classes.pair}>{pair}</h3>
                        <p className={classes.price}>{price}</p>
                    </div>
            }
        </Grid>
    );
}

export default ChartPanel;