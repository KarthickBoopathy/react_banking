import { Button, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Summary from '../Summary';
const WithinAccountTransfer = () => {
    const [data, SetData] = useState<any>({
        age: '',
        text: ''
    });

    const [enableSummary, SetEnableSummary] = useState(false);
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(data);
        SetEnableSummary(true);
    }


    const handleCancel = (event: any) => {
        event.preventDefault();
        console.log(data);
        SetEnableSummary(false);
    }


    const inputForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    fullWidth
                    value={data.age}
                    // onChange={(event) =>handleChange(event)}
                    onChange={(event) =>
                        SetData({ ...data, age: event.target.value })}

                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <TextField id="standard-basic" fullWidth value={data?.text ?? ''} label="Standard" variant="standard" onChange={(event) =>
                    SetData({ ...data, text: event.target.value })
                } />
                <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        );
    }


    // const summary = () => {
    //     return (
    //         <Stack spacing={2}>
    //             <h1>Summary</h1>
    //             <Typography>{data?.age ?? ''}</Typography>
    //             <Typography>{data?.text ?? ''}</Typography>
    //             <Button
    //                 fullWidth
    //                 variant="contained"
    //                 color="secondary"
    //                 onClick={handleCancel}
    //             >
    //                 Cancel
    //             </Button>
    //         </Stack>
    //     );
    // }


    return (
        <React.Fragment>
            {!enableSummary && inputForm()}
            {/* {enableSummary && summary()} */}
            <Summary age={data?.age ?? ''} text={data?.text ?? ''} />
        </React.Fragment>
    )

};


export default WithinAccountTransfer;
