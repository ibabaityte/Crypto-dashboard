import React from "react";

// material ui imports
import {Grid} from "@material-ui/core";

// style imports
import headerStyles from "../styles/headerStyles";

const Header = () => {

    const classes = headerStyles();

    return (
        <Grid item xs={12} className={classes.header}>
            <h1 className={classes.icon}>Crypto Desk</h1>
        </Grid>
    )
}

export default Header;