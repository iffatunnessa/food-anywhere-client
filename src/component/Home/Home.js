import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import CircularProgress from '@material-ui/core/CircularProgress';
const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://agile-taiga-37624.herokuapp.com/home')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    return (
        <div className="container-md mt-2">
            <div className="row row-cols-1 row-cols-md-3 g-4 p-2">
                {
                    items.map(item => <Item item={item}></Item>)
                }
            </div>
            <div >
                {
                    items.length === 0 && <div style={{ width: "100%", textAlign: "center", marginTop: "200px" }}><CircularProgress /></div>
                }
            </div>
        </div>
    );
};

export default Home;