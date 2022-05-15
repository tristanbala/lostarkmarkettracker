import React, {useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import useStyles from './styles';
import { createItem } from '../../actions/items';
import { useDispatch } from 'react-redux';

const Form = () => {
    const [itemData, setItemData] = useState({itemName: '', date: '', price: ''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createItem(itemData))
    } 

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Add an Entry</Typography>
            <TextField name="itemName" variant="outlined" label="Item Name" fullWidth value={itemData.itemName} onChange={(e) => setItemData({ ... itemData, itemName: e.target.value })}/>
            <TextField name="date" variant="outlined" label="Date/Time" fullWidth value={itemData.date} onChange={(e) => setItemData({ ... itemData, date: e.target.value })}/>
            <TextField name="price" variant="outlined" label="Price" fullWidth value={itemData.price} onChange={(e) => setItemData({ ... itemData, price: e.target.value })}/>
            <div className={classes.fileInput}> <FileBase type="file" multiple={false} onDone={({base64}) => setItemData({ ...itemData, selectedFile: base64 })}/></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;