import React, { useEffect } from 'react';

const ManageIndividual = (props) => {
    const { productName, size, price, _id } = props.item;
    console.log(_id);
    const deleteItem = id => {
        fetch(`http://localhost:5000/admin/manageItems/${id}`, {
            method:'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <tr>
            <td>{productName}</td>
            <td>{size}</td>
            <td>{price}</td>
            <td><button onClick={() => deleteItem(_id)}>delete</button></td>
        </tr>
    );
};
export default ManageIndividual;