import { createTheme, type Theme } from "@mui/material/styles";

// With libraries such as Material UI which need some configuration, don't hesitate to put
// it in a separate file
const theme: Theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#F3F3FF"
        },
        primary: {
            main: "#2069D0"
        },
        success: {
            main: "#37D020"
        },
        error: {
            main: "#E72C2C"
        }
    },
});

export default theme;
