import {makeStyles} from "@material-ui/core";

const headerStyles = makeStyles(() => ({
    icon: {
        fontFamily: "'Russo One', sans-serif",
        letterSpacing: "10px",
        fontSize: "40px",
        margin: "0",
        background: "-webkit-linear-gradient(#06639B, #02DE97)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    },
    header: {
        padding: "20px",
        height: "10vh"
    }
}));

export default headerStyles;