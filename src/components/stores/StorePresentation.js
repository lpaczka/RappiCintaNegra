import React from 'react';
import './stores.css'

const StorePresetation = props => {
    return(
        <div className="StorePresetation">
            <div className="img-store">
                <img src={props.img}></img>
            </div>
            <div className="body-store">
            <div className="info-store">
                <h2>{props.name}</h2>
                <span>10:30 am - 10:20 pm</span>
            </div>
                <div className="info-first-delivery">
                <div className="info-delivery">
                <span>Domicilio:</span>
                <strong>{`$${props.domicile}.00`}</strong>
                </div>
                <div className="info-delivery">
                <span>Entrega:</span>
                <strong>40 min</strong>
                </div>
                </div>
            </div>
        </div>
    )
}

export default StorePresetation