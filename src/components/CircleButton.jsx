import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from "@mui/material";

// https://www.colordic.org/
const theme = createTheme({
    palette: {
        number: { // custom
            main: '#808080',  // gray
            light: '#d3d3d3', // lightgray
            dark: '#a9a9a9',  // darkgray
            contrastText: '#fff',
        },
        symbol: { // .palette.warning
            main: '#ffa726',
            light: '#ffb74d',
            dark: '#f57c00',
            contrastText: '#fff',
        },
        other: { // custom
            main: '#c0c0c0',  // silver
            light: '#d3d3d3', // lightgray
            dark: '#dcdcdc',  // gainsboro
            contrastText: '#000',
        }
    }
});

export const CircleButton = (props) => {
    const { label, type, onButtonClick } = props;
    return(
        <ThemeProvider theme={theme}>
            <Button
                variant="contained"
                color={type}
                sx={{
                    borderRadius: "50%",
                    width: "64px",
                    height: "64px",
                    fontSize: "32px"
                }}
                onClick={() => onButtonClick(label)}
            >{label}</Button>
        </ThemeProvider>
    );
};
