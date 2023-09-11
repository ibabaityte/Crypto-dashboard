import React, {FC, JSX} from "react";
import { ContentPropInterface } from "../utils/interfaces";

// material ui imports
import {Grid} from "@material-ui/core";

// component imports
import SelectCurrency from "./SelectCurrency";
import CryptoInfo from "./CryptoInfo";

// style imports
import contentStyles from "../styles/contentStyles";

const Content: FC<ContentPropInterface> = (props: ContentPropInterface): JSX.Element => {

    const classes = contentStyles();

    const {
        price,
        pastData,
        pair,
        setPair,
        socket,
        currencies,
        timeInterval,
        setTimeInterval
    } = props;

    return (
        <Grid item xs={11} className={classes.content}>
            <SelectCurrency
                pair={pair}
                setPair={setPair}
                socket={socket}
                currencies={currencies}
            />

            <CryptoInfo
                pair={pair}
                price={price}
                pastData={pastData}
                timeInterval={timeInterval}
                setTimeInterval={setTimeInterval}
            />
        </Grid>
    );
}

export default Content;