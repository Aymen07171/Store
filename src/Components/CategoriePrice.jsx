    import React, { useMemo } from 'react'
    import useFetchProducts from "../utils/useFetchProducts";

    const CategoriePrice = ({ onCategorySelect, selectedCategory }) => {
    const { products, loading, error } = useFetchProducts();

    const categories = useMemo(() => {
        return ['All', ...new Set(products.map(product => product.category))];
    }, [products]);



    return (
        <div className='flex flex-row space-x-4 ml-[23rem]  mb-[5rem] list-none'>
        {categories.map(category => (
            <li 
            key={category}
            className={`bg-yellow-900 p-2 rounded-3xl text-white 
                        hover:bg-yellow-600 focus:outline-none focus:ring-2 
                        focus:ring-blue-500 focus:ring-offset-2 cursor-pointer
                        ${selectedCategory === category ? 'bg-yellow-600' : ''}`}
            onClick={() => onCategorySelect(category)}
            >
            {category}
            </li>
        ))}

        </div>

        
    )
    }

    export default CategoriePrice;