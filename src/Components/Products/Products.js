import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = (props) => {
    const {setCartCount} = props
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    return (

        <div  className="container row mx-auto">
            <h1> All products</h1>
            {
                products.map(product => <SingleProduct 
                product={product}
                key={product.id}
                setCartCount={setCartCount}
                ></SingleProduct>)
            }

        </div>
    );
};

export default Products;