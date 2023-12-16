import React, { useEffect, useState } from "react";
import { Box, InputLabel, MenuItem, TextField, Autocomplete, Tooltip, IconButton } from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export default function CreateAutoCompleteTextfield({ options, label, onChange, whiteColor, height, fullWidth, width, autoCompleteName, value, isSubmitted, onSelect, fields, formField }) {
    // let isError = false
    // let Value = autoCompleteName

    useEffect(() => {
        fields?.forEach((field) => {
            if (!formField.hasOwnProperty(field.name)) {
                onChange && onChange(field.name, '');
            }
        });
    }, []);

    // if (isSubmitted) {
    //     if (!Value) isError = true
    // }
    return (
        <>
            {fields?.map((field) => {
                const isError = isSubmitted && field.required && !formField[field.name];

                return (
                    <Box key={field.name} mb={2}>
                    <InputLabel sx={{ color: "black", marginBottom: 1 }}>
                    {field.label}
                    {
                        field.tooltip && (
                        <Tooltip title={field.tooltipMessage ? field.tooltipMessage : ''}>
                            <IconButton size="small">
                            <QuestionMarkIcon sx={{fontSize:16}}/>
                            </IconButton>
                        </Tooltip>
                        )
                    }
        
                    </InputLabel>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={options || []}
                        value={formField[field.name] || ''}
                        sx={{
                            width: fullWidth ? '100%' : width ? width : 250, backgroundColor: whiteColor || 'rgb(145,54,93)', color: whiteColor ? 'black' : 'white', borderRadius: 1,
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: whiteColor ? '' : "transparent", // Remove border color
                                },
                                "&:hover fieldset": {
                                    borderColor: whiteColor ? '' : "transparent", // Remove border color on hover
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: whiteColor ? '' : "transparent", // Remove border color when focused
                                },
                                "& input": {
                                    color: whiteColor ? 'black' : "white", // Change font color to white
                                    height: height ? '5px' : "3px",
                                },
                            },
                        }}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                label={label}
                                InputLabelProps={{ sx: { color: whiteColor ? 'black' : 'white', fontSize: 12, top: "-0.6vh", "&.MuiInputLabel-shrink": { top: 10, color: 'rgb(145,54,93)' } } }}
                                error={isError}
                                helperText={isError ? field.errormessage : ''}

                            />
                        }
                        onChange={(event, newValue) => {
                            onSelect(newValue || '')
                        }}
                    />
                </Box>
                )})
            }
        </>
    );
}
