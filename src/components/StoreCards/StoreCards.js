import React from 'react';
import {Link} from 'react-router-dom'

const StoreCard = props => {
    return(
    <div className={`storecard_${props.id}`}>
        <Link
        to={`/store/${props.id}`}
        >
        <img src={props.img} className="img-stores-carousel" alt={props.id}/>
        </Link>
    </div>
    )
}

export default StoreCard