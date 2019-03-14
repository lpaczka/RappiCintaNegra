import React, { Component } from 'react';
import { ProductCard } from '../../common/productCard'
import './stores.css'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import loader from '../home/img/lg.dual-ring-loader.gif'
import StorePresetation from './StorePresentation'
import {Footer} from '../../common/footer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductDetail from './ProductDetail'
  
const STORE = gql`
    query getStoreById($id:ID!){
  getStoreById(id:$id){
    _id
    name
    img_store
    pricing_domicile
    products{
      _id
      name_product
      price
      img_product
      category
      description_product
    }
  }
}
`

class Stores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:props.match.params.id,
            url:props.match.url,
            modal:false,
            id_product:null
        }
    }
    
    handleModal = id => {       
           this.setState({
                modal:true,
                id_product:id
           })
    }

    handleModalClose = () => {
        this.setState({
            modal:false,
            id_product:"5c85ab7d85776e27d4c77410"
        })
    }

    render() {
        return (
            <div className="Store">
                <Query query={STORE} variables={{id:this.state.id}}>
                    {
                        ({ data, error, loading }) => {
                            if (error) alert(error)
                            if (loading) return <img src={loader}></img>
                            let category = data.getStoreById.products.map(el => {
                                return el.category
                            })
                            let uniqueCategory = [];
                            category.forEach(elem => {
                                if (!uniqueCategory.some(valor => valor[0] === elem[0] && valor[1] === elem[1]))
                                    uniqueCategory.push(elem);
                                else {
                                    uniqueCategory.forEach((valor, index) => {
                                        if (valor[0] === elem[0] && valor[1] === elem[1]) uniqueCategory.splice(index, 1);
                                    });
                                }
                            })
                            return (
                                <React.Fragment>
                                    <StorePresetation
                                        name={data.getStoreById.name}
                                        img={data.getStoreById.img_store}
                                        domicile={data.getStoreById.pricing_domicile}
                                    />
                                    <div className="products-store">
                                        <div className="naProductsByCategoryDivme">
                                            <p>Plato Fuerte</p>
                                            <Query query={STORE} variables={{id:this.state.id}}>
                                                {
                                                    ({ data, error, loading }) => {
                                                        if (error) alert(error)
                                                        if (loading) return <img src={loader}></img>
                                                        let category = data.getStoreById.products.map(el => {
                                                            return el.category
                                                        })
                                                        
                                                        let uniqueCategory = [];
                                                        
                                                        category.forEach(elem => {
                                                            if (!uniqueCategory.some(valor => valor[0] === elem[0] && valor[1] === elem[1]))
                                                                uniqueCategory.push(elem);
                                                            else {
                                                                uniqueCategory.forEach((valor, index) => {
                                                                    if (valor[0] === elem[0] && valor[1] === elem[1]) uniqueCategory.splice(index, 1);
                                                                });
                                                            }
                                                        })
                                                        let ProductsByCategory = uniqueCategory.map((ele, i) => {
                                                            return category[i] = data.getStoreById.products.filter(el => {
                                                                return el.category === ele
                                                            })
                                                        })
                                                        let StoreCardsByCategory = ProductsByCategory[2].map(el => {
                                                          
                                                           return(
                                                               <React.Fragment>
                                                                    <ProductCard
                                                                    mod={this.handleModal}
                                                                    id={el._id}
                                                                    name={el.name_product}
                                                                    description={el.description_product}
                                                                    price={el.price}
                                                                    img={el.img_product}
                                                                /> 
                                                               </React.Fragment> 
                                                           )
                                                        }
                                                        )
                                                        return (
                                                            <div className="cards-products">
                                                                {StoreCardsByCategory}
                                                                {this.handleModal}
                                                            </div>
                                                        )
                                                    }
                                                }
                                            </Query>
                                            <p>Bebidas</p>
                                            <Query query={STORE} variables={{id:this.state.id}}>
                                                {
                                                    ({ data, error, loading }) => {
                                                        if (error) alert(error)
                                                        if (loading) return <img src={loader}></img>
                                                        let category = data.getStoreById.products.map(el => {
                                                            return el.category
                                                        })
                                                        let uniqueCategory = [];
                                                        category.forEach(elem => {
                                                            if (!uniqueCategory.some(valor => valor[0] === elem[0] && valor[1] === elem[1]))
                                                                uniqueCategory.push(elem);
                                                            else {
                                                                uniqueCategory.forEach((valor, index) => {
                                                                    if (valor[0] === elem[0] && valor[1] === elem[1]) uniqueCategory.splice(index, 1);
                                                                });
                                                            }
                                                        })
                                                        let ProductsByCategory = uniqueCategory.map((ele, i) => {
                                                            return category[i] = data.getStoreById.products.filter(el => {
                                                                return el.category === ele
                                                            })
                                                        })
                                                        let StoreCardsByCategory = ProductsByCategory[0].map(el => (
                                                            
                                                            <ProductCard
                                                                mod={this.handleModal}
                                                                id={el._id}
                                                                name={el.name_product}
                                                                description={el.description_product}
                                                                price={el.price}
                                                                img={el.img_product}
                                                            />
                                                          
                                                        )
                                                        )
                                                        return (
                                                            <div className="cards-products">
                                                                {StoreCardsByCategory}
                                                            </div>
                                                        )
                                                    }
                                                }
                                            </Query>
                                            <p>Postres</p>
                                            <Query query={STORE} variables={{id:this.state.id}}>
                                                {
                                                    ({ data, error, loading }) => {
                                                        if (error) alert(error)
                                                        if (loading) return <img src={loader}></img>
                                                        let category = data.getStoreById.products.map(el => {
                                                            return el.category
                                                        })
                                                        let uniqueCategory = [];
                                                        category.forEach(elem => {
                                                            if (!uniqueCategory.some(valor => valor[0] === elem[0] && valor[1] === elem[1]))
                                                                uniqueCategory.push(elem);
                                                            else {
                                                                uniqueCategory.forEach((valor, index) => {
                                                                    if (valor[0] === elem[0] && valor[1] === elem[1]) uniqueCategory.splice(index, 1);
                                                                });
                                                            }
                                                        })
                                                        let ProductsByCategory = uniqueCategory.map((ele, i) => {
                                                            return category[i] = data.getStoreById.products.filter(el => {
                                                                return el.category === ele
                                                            })
                                                        })
                                                        let StoreCardsByCategory = ProductsByCategory[1].map(el => (
                                                    
                                                            <ProductCard
                                                                mod={this.handleModal}
                                                                id={el._id}
                                                                name={el.name_product}
                                                                description={el.description_product}
                                                                price={el.price}
                                                                img={el.img_product}
                                                            />
                                                          
                                                        )
                                                        )
                                                        return (
                                                            <div className="cards-products">
                                                                {StoreCardsByCategory}
                                                            </div>
                                                        )
                                                    }
                                                }
                                            </Query>
                                        </div>
                                        <ProductDetail
                                            detail={this.state.modal}
                                            close={this.handleModalClose}
                                            id={this.state.id_product}
                                        />
                                    </div>
                                    <Footer/>
                                </React.Fragment>
                            )
                        }
                    }
                </Query>
            </div>
        );
    }
}

export default Stores;