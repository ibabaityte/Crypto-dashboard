import {makeStyles} from "@material-ui/core";

const currencySelectorStyles = makeStyles(() => ({
    selectCurrencyContainer: {
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    selector: {
        width: "20%",
        background: "rgb(255, 255, 255, 0.3)",
        padding: "5px",
        borderRadius: "5px"
    },
    label: {
        margin: "0 15px"
    }
}));

export default currencySelectorStyles;