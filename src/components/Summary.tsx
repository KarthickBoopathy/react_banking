import { Button, Stack, Typography } from "@mui/material";
import React from 'react';

type data = {
    age: string;
    text: string;
}
const Summary = ({age, text}: data) => {

    const handleCancel= (event: any) => {
        event.preventDefault();   
        
    }
    return (
        <Stack spacing={2}>
            <h1>Summary</h1>
            <Typography>{age}</Typography>
            <Typography>{text}</Typography>
            <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleCancel}
            >
                Cancel
            </Button>
        </Stack>
    );
}


export default Summary;