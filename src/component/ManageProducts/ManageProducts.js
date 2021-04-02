import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../admin/Admin';
import ManageIndividual from './ManageIndividual/ManageIndividual';

const ManageProducts = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/admin/manageItems')
            .then(res => res.json()) 
            .then(data => setItems(data))

    }, [])
    console.log(items);

    return (
        // <div className='container'>
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
                    items.map(item=> <ManageIndividual item={item}/>)
                }
                </tbody>
            </table>
        // </div>
    );
};

export default ManageProducts;