import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";

const Counter = (props) => {
    const [value, setValue] = useState(props.value ?? 0);
    const handleClick = (event, action) => {
        action === "add"
            ? setValue((prevValue) => {
                let val = prevValue + 1
                props.onChange(val)
                return val
            })
            : setValue((prevValue) =>{
                let val = (prevValue === 0 ? 0 : prevValue - 1)
                props.onChange(val)
                return val
            });
    };
    return (
        <TextField
            {...props}
            sx={{ width: 150 }}
            size="small"
            InputProps={{
                inputProps: {
                    style: { textAlign: "center" }
                },
                readOnly: true,
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton
                            edge="start"
                            color="success"
                            onClick={(e) => handleClick(e, "add")}
                        >
                            <AddCircle />
                        </IconButton>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            edge="end"
                            color="error"
                            disabled={value === 0}
                            onClick={(e) => handleClick(e, "subtract")}
                        >
                            <RemoveCircle />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        ></TextField>
    );
}
export default Counter