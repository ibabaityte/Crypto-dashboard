import React, {FC, JSX} from "react";
import { SelectCurrencyPropInterface } from "../utils/interfaces";

// util imports
import APIUtils from "../utils/APIUtils";

// material ui imports
import {Grid, TextField} from "@material-ui/core";

// style imports
import currencySelectorStyles from "../styles/currencySelectorStyles";

const SelectCurrency: FC<SelectCurrencyPropInterface> = (props: SelectCurrencyPropInterface): JSX.Element => {

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
                onChange={(e) => APIUtils.changeCurrency(e, pair, setPair, socket)}
                SelectProps={{
                    native: true,
                }}
            >
                <option>Crypto currency</option>
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