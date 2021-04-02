
import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    return (
        <div className="col">
            <div className="card">
                <img src={item.imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.productName}</h5>
                    <div className="card-footer">
                        <Link className="price" aria-disabled>${item.price}</Link>
                        <Link to={"/checkout/"+item._id} className="btn btn-success">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;