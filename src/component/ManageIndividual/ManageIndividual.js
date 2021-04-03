import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const ManageIndividual = (props) => {
    const { productName, size, price, _id } = props.item;
    const [deleted, setDeleted] = useState(false);
    const deleteItem = id => {

        fetch(`https://agile-taiga-37624.herokuapp.com/admin/manageItems/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
        setDeleted(true);
    }
    return (
        <>
            { deleted ? <div className="alert alert-success" role="alert">
                This item has been deleted!!
                </div>
                : <tr>
                    <td>{productName}</td>
                    <td>{size}</td>
                    <td>{price}</td>
                    <td><button className="btn btn-danger" onClick={() => deleteItem(_id)}> <FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: 18, color: "white" }} /></button></td>
                </tr>
            }
        </>

    );
};
export default ManageIndividual;