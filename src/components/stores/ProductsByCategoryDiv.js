// import React from 'react';
// import './stores.css'
// import {ProductCard} from '../../common/productCard'
// import gql from 'graphql-tag'
// import {Query} from 'react-apollo'
// import loader from '../home/img/lg.dual-ring-loader.gif'
// import './stores.css'

// const STORE = gql`
//      query{
//   getStoreById(id:"5c721d5e1482fb237c289130"){
//     _id
//     name
//     img_store
//     pricing_domicile
//     products{
//       name_product
//       price
//       img_product
//       category
//       description_product
//     }
//   }
// }
//  `

// const ProductsByCategoryDiv = props => {
//     return(
//     <div className="naProductsByCategoryDivme">
//         <p>Plato Fuerte</p>
//         <Query query={STORE}>
//                 {
//                     ({data,error,loading}) => {
//                         if(error) alert(error)
//                         if(loading) return <img src={loader}></img>
//                         let category = data.getStoreById.products.map(el => {
//                             return el.category
//                         })
//                         let uniqueCategory = [];
//                         category.forEach(elem=>{
//                             if(!uniqueCategory.some(valor=> valor[0] === elem[0] && valor[1] === elem[1]))  
//                             uniqueCategory.push(elem);
//                             else {
//                                 uniqueCategory.forEach((valor,index)=> {
//                                 if(valor[0]=== elem[0] && valor[1] === elem[1]) uniqueCategory.splice(index,1);
//                                 });
//                             }
//                             })
//                         let ProductsByCategory = uniqueCategory.map((ele, i) => {
//                             return category[i] = data.getStoreById.products.filter(el => {
//                                 return el.category === ele
//                             })
//                         })
//                         let StoreCardsByCategory = ProductsByCategory[2].map(el => (
//                             <ProductCard
//                                 id={el._id}
//                                 name={el.name_product}
//                                 description={el.description_product}
//                                 price={el.price}
//                                 img={el.img_product}
//                             />
//                             )
//                         )
//                         return(
//                             <div className="cards-products">
//                                 {StoreCardsByCategory}
//                             </div>
//                         )
//                     }
//                 }
//                 </Query>
//                 <p>Bebidas</p>
//         <Query query={STORE}>
//                 {
//                     ({data,error,loading}) => {
//                         if(error) alert(error)
//                         if(loading) return <img src={loader}></img>
//                         let category = data.getStoreById.products.map(el => {
//                             return el.category
//                         })
//                         let uniqueCategory = [];
//                         category.forEach(elem=>{
//                             if(!uniqueCategory.some(valor=> valor[0] === elem[0] && valor[1] === elem[1]))  
//                             uniqueCategory.push(elem);
//                             else {
//                                 uniqueCategory.forEach((valor,index)=> {
//                                 if(valor[0]=== elem[0] && valor[1] === elem[1]) uniqueCategory.splice(index,1);
//                                 });
//                             }
//                             })
//                         let ProductsByCategory = uniqueCategory.map((ele, i) => {
//                             return category[i] = data.getStoreById.products.filter(el => {
//                                 return el.category === ele
//                             })
//                         })
//                         let StoreCardsByCategory = ProductsByCategory[0].map(el => (
//                             <ProductCard
//                                 id={el._id}
//                                 name={el.name_product}
//                                 description={el.description_product}
//                                 price={el.price}
//                                 img={el.img_product}
//                             />
//                             )
//                         )
//                         return(
//                             <div className="cards-products">
//                                 {StoreCardsByCategory}
//                             </div>
//                         )
//                     }
//                 }
//                 </Query>
//                 <p>Postres</p>
//         <Query query={STORE}>
//                 {
//                     ({data,error,loading}) => {
//                         if(error) alert(error)
//                         if(loading) return <img src={loader}></img>
//                         let category = data.getStoreById.products.map(el => {
//                             return el.category
//                         })
//                         let uniqueCategory = [];
//                         category.forEach(elem=>{
//                             if(!uniqueCategory.some(valor=> valor[0] === elem[0] && valor[1] === elem[1]))  
//                             uniqueCategory.push(elem);
//                             else {
//                                 uniqueCategory.forEach((valor,index)=> {
//                                 if(valor[0]=== elem[0] && valor[1] === elem[1]) uniqueCategory.splice(index,1);
//                                 });
//                             }
//                             })
//                         let ProductsByCategory = uniqueCategory.map((ele, i) => {
//                             return category[i] = data.getStoreById.products.filter(el => {
//                                 return el.category === ele
//                             })
//                         })
//                         let StoreCardsByCategory = ProductsByCategory[1].map(el => (
//                             <ProductCard
//                                 id={el._id}
//                                 name={el.name_product}
//                                 description={el.description_product}
//                                 price={el.price}
//                                 img={el.img_product}
//                             />
//                             )
//                         )
//                         return(
//                             <div className="cards-products">
//                                 {StoreCardsByCategory}
//                             </div>
//                         )
//                     }
//                 }
//                 </Query>
//     </div>
//     )
// }

// export default ProductsByCategoryDiv