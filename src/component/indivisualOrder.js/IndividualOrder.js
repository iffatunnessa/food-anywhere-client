import React from 'react';

const IndividualOrder = (props) => {
    const { productName, price } = props.item;
    return (

        <tr>
            <td>{productName}</td>
            <td>1</td>
            <td>{price}</td>
        </tr>

    );
};

export default IndividualOrder;