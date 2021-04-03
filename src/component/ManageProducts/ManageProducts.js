import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ManageIndividual from '../ManageIndividual/ManageIndividual';

const ManageProducts = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://agile-taiga-37624.herokuapp.com/admin/manageItems')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Size</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <ManageIndividual item={item} />)
                    }
                </tbody>
            </table>
            <div>
            {
                items.length === 0 && <div style={{ width: "100%", textAlign: "center",marginTop:"200px" }}><CircularProgress /></div>
            }
            </div>
          
        </div>
    );
};

export default ManageProducts;