import React, { Component } from 'react';
import gql from 'graphql-tag'
import  {Query} from 'react-apollo'

const PRODUCT = gql`
query getProductById($id:ID!){
  getProductById(id:$id){
    img_product
    name_product
    price
  }
}
`

class SidebarCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: "5c761e36ad48f0348005beb3"
         }
    }

    render() { 
        return ( 
            <Query query={PRODUCT} variables={{id:this.props.id}}>
    {
        ({data,loading,error}) => {
            if(loading) return <p>Cargando</p>
            if(error) return console.log(error)
            return(
                <div className="info-basket-products">
                    <div className="info-products-basket">
                        <img className="img-basket" src={data.getProductById.img_product} alt={data.getProductById.name_product}></img>
                        <div className="description-product">
                            <p>{data.getProductById.name_product}</p>
                            <p onClick={this.props.delete}>Eliminar</p>
                        </div>
                    </div>
                    <div className="price-product-basket">
                        <p className="price-product">$<span id="price-p">{data.getProductById.price}</span>.00</p>
                        <input className="value-product-hidden" id="prodId" name="value" type="hidden" value={data.getProductById.price}/>
                    </div>
                </div>
            )
        }
    }
    </Query>
         );
    }
}
 
export default SidebarCard;