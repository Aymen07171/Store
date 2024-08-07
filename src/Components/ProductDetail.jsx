import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem } from '../utils/cartSlice';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching product:', error);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!product) return <div>Product not found</div>;

    const handleAddItem = () => {
        // Dispatch Action
        dispatch(addItem(product));
    }

    return (
        <div className="container mx-auto px-2 py-[4rem]">
            <div className="flex flex-col pl-20 md:flex-row">
                <div className="md:w-1/2">
                    <img src={product.image} alt={product.title} className="w-[20rem] h-auto " />
                </div>
                <div className="md:w-1/2 md:mt-0 mr-40">
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <p className="text-xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                    <p className="mb-4">{product.description}</p>
                    <p className="mb-4">Category: {product.category}</p>
                    <p className="mb-4">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                    <button onClick={handleAddItem} className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;