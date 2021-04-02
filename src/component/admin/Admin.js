import React, { useState } from 'react';
import AddItems from '../AddItems/AddItems';
import ManageProducts from '../ManageProducts/ManageProducts';

const Admin = () => {
    const [isAddProduct, setIsAddProduct] = useState(true);
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-3" style={{ background: "green", height: "500px" }}>
                    <button onClick={() => setIsAddProduct(true)}>Add Products</button>
                    <button onClick={() => setIsAddProduct(false)}>Manage Products</button>
                </div>
                <div className="col-9">
                    {
                        isAddProduct ? <AddItems />
                            : <ManageProducts />
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;