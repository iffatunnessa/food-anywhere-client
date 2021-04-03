import { CircularProgress } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import IndividualOrder from '../indivisualOrder.js/IndividualOrder';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { email } = loggedInUser;
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        fetch(`https://agile-taiga-37624.herokuapp.com/orders?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [email])
    
    return (
        <div className='container'>
            <h1>orders</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => <IndividualOrder item={item} />)
                    }
                </tbody>
                <div style={{ margin: "200px" }}>
                {
                    data.length === 0 && <div style={{ width: "100%", textAlign: "center" }}><CircularProgress /></div>
                }
                </div>
            </table>
        </div>
    );
};

export default Orders;