import React from "react";
import { TextField } from "@mui/material";

export const NumberField = (props) => {
    const { text } = props;
    return(
        <TextField
            value={text}
            fullWidth
            InputProps={{
                readOnly: true,
            }}
            sx={{
                input: {
                    fontSize: "32px",
                    textAlign: "right",
                }
            }}
        ></TextField>
    );
}