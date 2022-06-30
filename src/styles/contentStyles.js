import {makeStyles} from "@material-ui/core";

const contentStyles = makeStyles(() => ({
    content: {
        margin: "0 auto",
        height: "90vh"
    },
    price: {
        fontSize: "35px",
        fontWeight: "600",
        display: "inline-block"
    },
    pair: {
        display: "inline-block",
        marginRight: "30px"
    },
    chartContainer: {
        height: "100%"
    },
    chart:{
      height: "80%"
    },
    contentContainer: {
        height: "100%"
    },
    cryptoInfo: {
        height: "70%"
    },
    intervalDiv: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    interval: {
        "&.MuiButtonGroup-root": {
            display: "block",
            height: "auto"
        }
    },
    selector: {
        "&.MuiButton-textPrimary": {
            color: "rgb(4,190,152)"
        },
        "&.MuiButtonGroup-groupedTextHorizontal:not(:last-child)": {
            borderRight: "1px solid rgb(4,190,152)"
        }
    }
}));

export default contentStyles;