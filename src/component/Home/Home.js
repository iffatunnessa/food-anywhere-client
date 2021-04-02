import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Home = () => {
    const [items, setItems] = useState([]);
    const classes = useStyles();
  
    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json()) 
            .then(data => setItems(data))

    }, [])
    return (
        <div className="container-md">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    items.length === 0 &&  <CircularProgress />
                }
                {
                    items.map(item => <Item item={item}></Item>)
                }
                
            </div>
        </div>
    );
};

export default Home;