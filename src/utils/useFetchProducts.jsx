    import { useState, useEffect } from 'react';

    const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
    };

    export default useFetchProducts;