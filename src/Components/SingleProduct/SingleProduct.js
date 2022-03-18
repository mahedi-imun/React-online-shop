
import React from 'react';
import { Card } from 'react-bootstrap';

const SingleProduct = (props) => {
    const {setCartCount}=props;
    console.log(props.product)
    const { title, price, image } = props.product
    return (
        <div className="col-md-4 col-6 mt-5 ">
         <Card style={{ height: '25rem' }} className='shadow '>
             <Card.Img className='w-50 h-50 mx-auto' variant="top" src={image} />
             <Card.Body>
             <h5 className='text-danger' >{title.slice(0,15)}</h5>
             <h4>${price}</h4>
             </Card.Body>
            <div className='d-flex justify-content-around mb-5'>
            <button onClick={setCartCount} className='btn btn-primary'>add to cart</button>
             <button className='btn btn-danger'> order</button>
             <button className='btn btn-info'> details</button>
            </div>
         </Card>

        </div>
    );
};

export default SingleProduct;