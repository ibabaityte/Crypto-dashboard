import React from "react";

// material ui imports
import {Grid} from "@material-ui/core";

// component imports
import SelectCurrency from "./SelectCurrency";
import CryptoInfo from "./CryptoInfo";

// style imports
import contentStyles from "../styles/contentStyles";

const Content = (props) => {

    const classes = contentStyles();

    const {
        url,
        price,
        pastData,
        pair,
        setPair,
        socket,
        currencies
    } = props;

    return (
        <Grid item xs={11} className={classes.content}>
            {/*<Grid container className={classes.contentContainer}>*/}
                <SelectCurrency
                    url={url}
                    pair={pair}
                    setPair={setPair}
                    socket={socket}
                    currencies={currencies}
                />

                <CryptoInfo
                    pair={pair}
                    price={price}
                    pastData={pastData}
                />
            {/*</Grid>*/}
        </Grid>
    );
}

export default Content;