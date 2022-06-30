import React from "react";

// util imports
import {changeCurrency} from "../utils/apiUtils";

// material ui imports
import {Grid, TextField} from "@material-ui/core";

// style imports
import currencySelectorStyles from "../styles/currencySelectorStyles";

const SelectCurrency = (props) => {

    const classes = currencySelectorStyles();

    const {
        pair,
        setPair,
        socket,
        currencies
    } = props;

    return (
        <Grid item xs={12} className={classes.selectCurrencyContainer}>
            <h4 className={classes.label}>Select cryptocurrency:</h4>
            <TextField
                className={classes.selector}
                select
                value={pair}
                onChange={(e) => changeCurrency(e, pair, setPair, socket)}
                SelectProps={{
                    native: true,
                }}
            >
                <option value={null}>Crypto currency</option>
                {
                    currencies.map((currency, key) => {
                        return <option key={key} value={currency.id}>{currency.id}</option>
                    })
                }
            </TextField>
        </Grid>
    );
}

export default SelectCurrency;