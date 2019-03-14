import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import shopping from '../navbar/img/shopping-basket.png'
import './sidebar.css'
import SidebarCard from './SidebarCard';

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: props.isOpen,
            products:"5c7607db8721dd36f4e60aac"
        }
    }

    componentDidUpdate = () => {
        if (this.props.isOpen !== this.state.menuOpen) {
            this.setState({
               menuOpen: this.props.isOpen,
               products: "5c7607db8721dd36f4e60aac"
            });
        }
        if(this.props.product !== this.state.products) {
            this.setState({
                menuOpen: this.props.isOpen,
                products: this.props.product
            });
        }
    }

    overlayClose = e => {
        if (e.target.matches('.overlay')) {
            this.props.close()
        }
    }

    closeMenu = () => {
        this.props.close()
    }

    renderProducts = () => {
        console.log(this.state)
        if(this.state.products === '5c7607db8721dd36f4e60aac' || this.state.products === undefined){
            return(
                <React.Fragment>
                    <div className="basket-null">
                    <p>Tu canasta está vacía</p>
                    <img className="animated" src="https://qotoqot.com/sad-animations/img/400/silent_tears/silent_tears.gif"></img>
                    </div>
                </React.Fragment>
            )
        }else{
            return(
                // this.state.products.map(el => (
                //     <SidebarCard
                //         id={el}
                //     />))
                <p>Llevas algo</p>
                )   
        }
    }

    render() {
        return (
            <div onClick={this.overlayClose}>
                <Menu
                    overlayClassName={"overlay"}
                    isOpen={this.state.menuOpen}
                    burgerButtonClassName={"my-class"}
                    crossButtonClassName={"my-class"}
                    menuClassName={"menu"}
                    right
                >
                    <div className="sidebar-basket">
                        <div className="info-basket-sidebar">
                            <p>Tu orden en</p>
                            <h3>Rappi</h3>
                            <p>Dirección de envío Guanajuato 65</p>
                            <button type="button" class="btn btn-outline-danger boton-exit-sidebar" onClick={this.closeMenu}>Cerrar</button>
                            <div className="info-type-store">
                                <h3 className="type-store">Restaurantes</h3>
                            </div>
                            <div>
                                {this.renderProducts()}
                            </div>
                        </div>
                        <div className="info-subtotal">
                            <div className="detail-subtotal">
                                <p>Subtotal:</p>
                                <p>$165.00</p>
                            </div>
                            <button className="boton-sidebar-continuar" type="submit">Continuar</button>
                        </div>
                    </div>
                </Menu>
            </div>
        )
    }
}

export default SideBar;