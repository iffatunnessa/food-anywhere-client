import React from 'react';

const IndividualOrder = (props) => {
    const { productName, price, date, email, displayName } = props.item;
    return (
        <tr>
            {/* <td><img style ={{borderRadius:"50%", width:30}} src={photoURL} alt=""/></td> */}
            <td>{displayName}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>1</td>
            <td>{price}</td>
            <td>{date}</td>
        </tr>

    );
};

export default IndividualOrder;