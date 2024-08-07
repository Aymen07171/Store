import React from 'react';

const Price = ({ onPriceSort }) => {
    return (
        <div className='ml-[100px]'>
            <h3>Sort by Price</h3>
            <select onChange={(e) => onPriceSort(e.target.value)}>
                <option value="normal">Normal</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
            </select>
        </div>
    );
};

export default Price;