import React from 'react';
import './productCard.css';


const ProductCard = props => {
    return(
        <div className={`product_${props.id}`} onClick={() => props.mod(props.id)} id={props.id}>
        <div className="card-body">
            <h3 className="card-body-h3">{props.name}</h3>
            <p className="card-body-span">{props.description}</p>
            <span className="product-price">{`$${props.price}.00`}</span>
        </div>
        <div className="card-img" id={props.id}>
            <img src={props.img}/>
        </div>
        </div>
    )
}

export default ProductCard