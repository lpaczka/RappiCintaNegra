import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import payload from '../../payload';
import isAuthenticated from '../../isAuthenticated';
import logo from '../../img/rappi.png'
import './navbar.css'
import basket from './img/shopping-basket.png'
import { SideBar } from '../sideBar';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            authenticated: localStorage.getItem('appToken') !== null,
            sideBar: false
         }
    }

    sideBarOpen = () => {
        this.setState({
            sideBar: true
        })
    }

    sideBarClose = () => {
        this.setState({
            sideBar: false
        })
    }

    getIdProduct = (e) => {
        console.log(e.target.value)
    }

    authenticatedRender = () => {
        if(isAuthenticated()){
            return(
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/me">
                    Bienvenid@ {payload().first_name}
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/logout">
                     Cerrar Sesión
                    </a>
                </li>
                <li className="nav-item">
                     <img className="basket" src={basket} onClick={this.sideBarOpen} alt='basket'/>
                </li>
                </ul>
            ) 
        }else{
            return(
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/login">
                    Iniciar Sesión
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/signup">
                        Registrate
                    </a>
                </li>
                </ul>
            )
        }
    }

    render() { 
        return ( 
            <React.Fragment>
            <nav className="navbar navbar-expand-ls">
                <div className="branding">
                <Link 
                className="navbar-brand"
                to="/">
                    <img className="logo" src={logo} alt='logo'/>
                </Link>
                </div>
                <div className="auth" id="navbarNav">
                    {
                        this.authenticatedRender()
                    }
                </div>
            </nav>
            <SideBar 
            isOpen={this.state.sideBar}
            close={this.sideBarClose}
            data={this.props.data}
            delete={this.props.delete}
            ></SideBar>
            </React.Fragment>
         );
    }
}
 
export default Navbar;


// const renderCardByCategory = () => {
//     console.log()
//     if(id === "id_Bebida"){
//         let StoreCardsByCategory = ProductsByCategory[0].map(el => (
//             <ProductCard
//                 id={el._id}
//                 name={el.name_product}
//                 description={el.description_product}
//                 price={el.price}
//                 img={el.img_product}
//             />
//             )
//         )         
//     }
//     if(props.nameCategory === "Postre"){
//         let StoreCardsByCategory = ProductsByCategory[1].map(el => (
//             <ProductCard
//                 id={el._id}
//                 name={el.name_product}
//                 description={el.description_product}
//                 price={el.price}
//                 img={el.img_product}
//             />
//             )
//         )         
//     }
//     if(props.nameCategory === "PlatoFuerte"){
//         let StoreCardsByCategory = ProductsByCategory[2].map(el => (
//             <ProductCard
//                 id={el._id}
//                 name={el.name_product}
//                 description={el.description_product}
//                 price={el.price}
//                 img={el.img_product}
//             />
//             )
//         )         
//     }
// }
