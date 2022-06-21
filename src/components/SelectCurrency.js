import React from "react";
import {changeCurrency} from "../utils/apiUtils";

// material ui imports
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

// style imports
// import materialUiStyles from "../styles/styles";

const useStyles = makeStyles({
    root: {
        width: "20%",
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: "15px"
    },
    label: {
        color: "white !important"
    }
});

const SelectCurrency = (props) => {
    const {
        url,
        pair,
        setPair,
        socket,
        currencies
    } = props;

    // const styles = materialUiStyles();

    const classes = useStyles();

    return (
        <Grid container className={`selectCurrency`}>
            <FormControl className={classes.root}>
                <InputLabel id="demo-simple-select-label" className={classes.label}>Crypto</InputLabel>
                <Select
                    className={classes.label}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pair}
                    label="Crypto"
                    onChange={(e) => changeCurrency(e, url, pair, setPair, socket)}
                >
                    {
                        currencies.map((currency, key) => {
                            return <MenuItem key={key} value={currency.id}>{currency.id}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </Grid>

    );
}

export default SelectCurrency;