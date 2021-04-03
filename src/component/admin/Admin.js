import React, { useState } from 'react';
import AddItems from '../AddItems/AddItems';
import ManageProducts from '../ManageProducts/ManageProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare , faTasks} from '@fortawesome/free-solid-svg-icons'

const Admin = () => {
    const [isAddProduct, setIsAddProduct] = useState(true);
    return (
        <div className='container-fluid'>
            <div className='row' style={{marginTop:"10px",}}>
                <div className="col-3" style={{ height: "auto",  background:"rgb(35, 59, 34)"}}>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <button class="nav-link   btn btn-outline-light" style={{marginTop:"30px", width:"200px"}} onClick={() => setIsAddProduct(true)}>  <FontAwesomeIcon icon={faPlusSquare} style={{ fontSize: 18, color: "white" }} />  Add Products</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link btn btn-outline-light"  style={{marginTop:"30px", width:"200px"}} onClick={() => setIsAddProduct(false)}>  <FontAwesomeIcon icon={faTasks} style={{ fontSize: 18, color: "white" }}/>  Manage Products</button>
                        </li>
                    </ul>
                </div>
                <div className="col-9" style={{ padding:"20px", background:"rgb(223, 241, 228)", width:"75%"}}>
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