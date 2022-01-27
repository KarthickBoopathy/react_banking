import { Box } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Button, Divider, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WithinAccPreconfirm from "./WithinAccPreconfirm";

const WithinAcc = () => {

    const navigate = useNavigate();
    // navigate('/WithinAccPreconfirm');

    const [transferBean, setTransferBean] = React.useState({fromAcc : '', toAcc:'', amount:''});
    const [preconfirm, setPreconfirm] = React.useState(false);

    const handleChange = (e: any) => {
        console.log(e.target.value);
        setTransferBean({...transferBean,[e.target.name]:e.target.value});
    };

    const handleSubmit = (e: any) => {
        console.log(e.target.value);
        setPreconfirm(true);
         //return <WithinAccPreconfirm data={preconfirm} />;
        
        // navigate('/WithinAccPreconfirm');
    }

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const FormFromAccRow = () => {

        return (
            <React.Fragment>
                <Stack direction="row" spacing={2}>
                    {/* <Item><InputLabel>FROM ACCOUNT</InputLabel></Item> */}
                    <Item><Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={transferBean.fromAcc}
                        onSelect={handleChange}
                        sx={{ width: "200px" }}
                        label="FROM ACCOUNT"
                    >

                        <MenuItem value={10}>0011-753285-001</MenuItem>
                        <MenuItem value={21}>0011-753285-002</MenuItem>
                        <MenuItem value={22}>0011-753285-003</MenuItem>
                    </Select></Item>
                </Stack>
            </React.Fragment>
        );
    }

    const FormToAccRow = () => {

        return (
            <React.Fragment>
                <Stack direction="row" spacing={2}>
                    {/* <Item><InputLabel>TO ACCOUNT</InputLabel></Item> */}
                    <Item> <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={transferBean.toAcc}
                        onSelect={handleChange}
                        sx={{ width: "200px" }}
                        label="TO ACCOUNT"
                    >

                        <MenuItem value={10}>0011-753285-001</MenuItem>
                        <MenuItem value={21}>0011-753285-002</MenuItem>
                        <MenuItem value={22}>0011-753285-003</MenuItem>
                    </Select></Item>
                </Stack>
            </React.Fragment>
        );
    }

  
    // const [data, SetData] = useState<any[]>([]);

    // useEffect(() => {
    //     SetData(timeLineData);
    // }, []);

    // const handleTimeLineProduct = useCallback(
    //     (categoryId) => {
    //         console.log(categoryId);
    //     }, []
    // );
    return (
        
        <React.Fragment>
             <Box>
            
            {/* <FormControl sx={{ m: 1, minWidth: 80 }}> */}

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary="From Account"
                        sx={{ width: "200px" }}>

                    </ListItemText>
                    <FormFromAccRow />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary="Amount">

                    </ListItemText>
                    <TextField sx={{ p: 1 }} value={transferBean.amount} onChange={handleChange} label="INR" variant="outlined" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary="To Account"
                        sx={{ width: "200px" }}>

                    </ListItemText>
                    <FormToAccRow />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem><Button variant="contained" onClick={handleSubmit}>Submit</Button></ListItem>
            </List>
            {/* </FormControl> */}
        </Box>
            { preconfirm ? <WithinAccPreconfirm data={preconfirm} /> : null }
            
        </React.Fragment>
    );
}

export default WithinAcc;