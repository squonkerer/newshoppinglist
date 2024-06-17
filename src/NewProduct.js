import React, { useState } from 'react';

function NewProduct({ addProduct }) {
    const [description, setDescription] = useState('');
    const [unit, setUnit] = useState('');
    const [amount, setAmount] = useState('');

    const submitValues = () => {
        console.log('submit');
        if (amount === '' || isNaN(amount) || Number(amount) <= 0) {
            alert('Please enter a valid amount');
            return;
        }
        addProduct({ description, unit, amount });
        setDescription('');
        setUnit('');
        setAmount('');
    };

    return (
        <>
            <div className="row">
                <input 
                    className="col-8 col-sm-4" 
                    placeholder="new product" 
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <select 
                    className="col-2" 
                    value={unit}
                    onChange={(event) => setUnit(event.target.value)}
                >
                    <option value="">Select unit</option>
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="l">l</option>
                    <option value="ml">ml</option>
                    <option value="pcs">pcs</option>
                </select>
                <input 
                    className="col-2" 
                    placeholder="amount" 
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    type="number"
                    min="0"
                />
                <button 
                    className="col-2"
                    onClick={submitValues}
                >
                    Add
                </button>
            </div>
        </>
    );
}

export default NewProduct;