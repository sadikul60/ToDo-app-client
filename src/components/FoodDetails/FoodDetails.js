import React from 'react';

const FoodDetails = ({item, refetch}) => {
    const {_id, name, quantity, price} = item;
    refetch()
    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td><button>Update</button></td>
            <td><button>Delete</button></td>
        </tr>
    );
};

export default FoodDetails;

