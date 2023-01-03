import React from 'react';
import './ItemForm.css'

const ItemForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;

        console.log(name, quantity, price);
        form.reset('')
    }
    return (
        <div className='ItemForm'>
            <form onSubmit={handleSubmit}>
                <div className='lebel'>
                    <h4>Food Name</h4>
                    <input type="text" name="name" id="" placeholder='Enter food name' />
                </div>
                <div className='lebel'>
                    <h4>Food Quantity</h4>
                    <input type="number" name="quantity" id="" placeholder='Enter food quantity' />
                </div>
                <div className='lebel'>
                <h4>Food Price</h4>
                    <input type="text" name="price" id="" placeholder='Enter food price' />
                </div>
                <input className='add-btn' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default ItemForm;