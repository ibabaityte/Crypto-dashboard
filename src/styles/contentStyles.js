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
    }
}));

export default contentStyles;