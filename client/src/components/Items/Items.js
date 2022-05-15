import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item/Item';
import useStyles from './styles';

const Items = () => {
    const items = useSelector((state) => state.items)
    const classes = useStyles();

    console.log(items);

    return (
        <>
            <h1>ITEMS</h1>
            <Item />
            <Item />
        </>
    );
}

export default Items;