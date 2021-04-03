import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { photoURL, email, displayName } = loggedInUser;
    const { id } = useParams();
    const [data, setData] = useState({});
    const [checkout, setCheckout] = useState(false);
    const { productName, price, size, imageURL } = data;
    const d = new Date();
    useEffect(() => {
        fetch(`https://agile-taiga-37624.herokuapp.com/checkout/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data[0]);
                console.log(data);
            })
    }, [id])

    const onCheckout = (data, productId) => {
        setCheckout(true);
        const eventData = {
            productId: productId,
            email: email,
            photoURL: photoURL,
            productName: productName,
            size: size,
            price: price,
            imageURL: imageURL,
            date: d.toDateString(),
            displayName: displayName
        }
        const url = `https://agile-taiga-37624.herokuapp.com/checkout/${id}`;
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log("added item(client)", res));
    };
    return (
        <div className='container'>
            { checkout && <div class="alert alert-success" role="alert">
                    Checkout has been uccessfully done!
                </div>
            }
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{productName}</td>
                        <td>1</td>
                        <td>{price}</td>
                    </tr>
                </tbody>
            </table>
            <div className="row">
                <div className='col-10'></div>
                <div className='col-2'>
                    <button onClick={() => onCheckout(data, id)} className='btn btn-success'>Checkout</button>
                </div>
            </div>
        </div>

    );
};

export default Checkout;