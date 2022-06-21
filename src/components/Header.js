import React from "react";

// material ui imports
import Grid from '@mui/material/Grid';

const Header = () => {
    return (
        <Grid item xs={12} className={`header`}>
            <h1 className="icon">Crypto Desk</h1>
        </Grid>
    )
}

export default Header;