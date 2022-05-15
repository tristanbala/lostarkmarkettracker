import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getItems } from './actions/items';

import Items from './components/Items/Items';
import Form from './components/Form/Form';
import mtlogo from './images/mtlogo.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles(); 
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getItems())
    }, [dispatch]);

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Lost Ark Market Tracker</Typography>
                <img className={classes.image} src={mtlogo} alt="mtlogo" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Items />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;