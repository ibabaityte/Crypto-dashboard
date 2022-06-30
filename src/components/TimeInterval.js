import React from "react";

// material ui imports
import {Button, ButtonGroup, Grid} from "@material-ui/core";

// style imports
import contentStyles from "../styles/contentStyles";

const TimeInterval = (props) => {
    const {
        timeInterval,
        setTimeInterval
    } = props;

    const classes = contentStyles();

    return (
        <Grid item xs={6} className={classes.intervalDiv}>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group" className={classes.interval}>
                <Button className={classes.selector} color={timeInterval === "300" ? "secondary" : "primary"} value={300} onClick={(e) => setTimeInterval(e.currentTarget.value)}>300 days</Button>
                <Button className={classes.selector} color={timeInterval === "30" ? "secondary" : "primary"} value={30} onClick={(e) => setTimeInterval(e.currentTarget.value)}>30 days</Button>
                <Button className={classes.selector} color={timeInterval === "7" ? "secondary" : "primary"} value={7} onClick={(e) => setTimeInterval(e.currentTarget.value)}>7 days</Button>
                <Button className={classes.selector} color={timeInterval === "24" ? "secondary" : "primary"} value={24} onClick={(e) => setTimeInterval(e.currentTarget.value)}>24 hours</Button>
            </ButtonGroup>
        </Grid>
    );
}

export default TimeInterval;