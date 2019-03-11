import React from 'react';
import {Link} from 'react-router-dom'

const link = name => {
    let arr = name.split(" ")
    let link = arr.join('')
    return link
}

const StoreCard = props => {
    return(
    <div className={`storecard_${props.id}`}>
        <Link
        to={`/store/${props.id}`}
        >
        <img src={props.img} className="img-stores-carousel"/>
        </Link>
    </div>
    )
}

export default StoreCard