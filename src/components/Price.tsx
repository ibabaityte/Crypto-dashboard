import React, {FC, JSX} from "react";
import { PricePropInterface } from "../utils/interfaces";

// style imports
import contentStyles from "../styles/contentStyles";

// material ui imports
import {Grid} from "@material-ui/core";

const Price: FC<PricePropInterface> = (props: PricePropInterface): JSX.Element => {

    const classes = contentStyles();

    const {
        pair,
        price
    } = props;

    return (
        <Grid item xs={6}>
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

export default Price;