import axios from 'axios';
import React, { useState } from 'react';

const AddItems = () => {
    const [imageURL, setImageUrl] = useState(null);
    const [productName, setProductName] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [added, setAdded] = useState(false);
    const handleSubmit = e => {
        setAdded(true);
        const eventData = {
            productName: productName,
            size: size,
            price: price,
            imageURL: imageURL
        }
        const url = `https://agile-taiga-37624.herokuapp.com/admin/addItems`;
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log("added item(client)", res));
        e.preventDefault();
    };

    const handleImageUpload = e => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '049bb34ea207b6b7f5706ac5e3e40bfb');
        imageData.append('image', e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="col-9" style={{ height: "auto", paddingBottom: "238px" }}>
            { added && <div class="alert alert-success" role="alert">
                An Item has been added!
                </div>
            }
            <form className="row g-4" onSubmit={handleSubmit} style={{ marginLeft: "10px" }}>
                <div className="col-md-6 form-group" >
                    <label className="form-label">Food Item's Name</label>
                    <input name="productName" type="text" className="form-control" id="productName" placeholder="Enter Name" required onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div className="col-md-6 form-group">
                    <label className="form-label">Size</label>
                    <input type="text" name="size" className="form-control" id="size" placeholder="00" onChange={(e) => setSize(e.target.value)} required />
                    <small id="sizeHelp" className="form-text text-muted">example: 1 , means for-one </small>
                </div>

                <div className="col-md-6 form-group">
                    <label className="form-label">Price</label>
                    <input type="text" name="price" className="form-control" id="price" placeholder="Price in USD" onChange={(e) => setPrice(e.target.value)} required />
                    <small id="priceHelp" className="form-text text-muted">example: 00, means $00 </small>
                </div>
                <div className="col-md-6 form-group">
                    <label className="form-label">City</label>
                    <input type="file" name="imageURL" className="form-control" id="validationDefault03" required onChange={handleImageUpload} />
                </div>
                <div className="col-md-10"></div>
                <div className="col-md-2">
                    <button className="btn btn-success" type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;