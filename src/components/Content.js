import React from "react";

// material ui imports
import Grid from '@mui/material/Grid';

// component imports
import SelectCurrency from "./SelectCurrency";
import CryptoInfo from "./CryptoInfo";

const Content = (props) => {

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
        <Grid item xs={12}>
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
        </Grid>
    );
}

export default Content;