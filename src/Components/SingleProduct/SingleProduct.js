
import React from 'react';
import { Card } from 'react-bootstrap';
import ReactModal from '../DetailsModal/DetailsModal';
const SingleProduct = (props) => {
    const {setCartCount}=props
    // console.log(props.setCartCount)
    const { title, price, image } = props.product
    return (
        
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
         className="col-md-4 col-6 mt-5  ">
         <div style={{ height: '25rem' }} className='shadow '>
             <Card.Img  className='w-50 h-50 mx-auto' variant="top" src={image} />
             <Card.Body>
             <h5 className='text-danger' >{title.slice(0,15)}</h5>
             <h4>${price}</h4>
             </Card.Body>
            <div className='d-flex justify-content-around mb-5'>
            <button onClick={setCartCount} className='btn btn-primary'>add to cart</button>
             <button className='btn btn-danger'> order</button>
             <ReactModal product={props.product}></ReactModal>
            </div>
            
            
         </div>
         
        </div>
    );
};

export default SingleProduct;