import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import IndividualOrder from '../indivisualOrder.js/IndividualOrder';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {email} = loggedInUser;
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                // console.log(data);
            })
    }, [email])
    return (
        <div className='container'>
            <h1>orders</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map(item => <IndividualOrder item={item}/>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;