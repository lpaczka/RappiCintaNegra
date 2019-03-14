import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import './sidebar.css'
import SidebarCard from './SidebarCard';

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: props.isOpen,
            products:"5c7607db8721dd36f4e60aac",
            suma:[]
        }
    }

    componentDidUpdate = () => {
        if (this.props.isOpen !== this.state.menuOpen) {
            this.setState({
               menuOpen: this.props.isOpen,
               products: "5c7607db8721dd36f4e60aac"
            });
        }
        if(this.props.data !== this.state.products) {
            this.setState({
                menuOpen: this.props.isOpen,
                products: this.props.data
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
        if(this.state.products.length === 0 || this.state.products === "5c7607db8721dd36f4e60aac"){
            return(
                <React.Fragment>
                    <div className="basket-null">
                    <p>Tu canasta está vacía</p>
                    <img className="animated" src="https://qotoqot.com/sad-animations/img/400/silent_tears/silent_tears.gif" alt='cry'></img>
                    </div>
                </React.Fragment>
            )
        }else{
            return(
                this.state.products.map(el => (
                    <SidebarCard
                        id={el}
                        key={el}
                        delete={this.props.delete}
                    />))
                )   
        }
    }

    sumAllProducts = () => {
            let ids = Array.from(document.querySelectorAll('.value-product-hidden'))
            let sum = ids.map(el => el.defaultValue)
            let len = sum.length
            console.log(len)
            if(len === 0){
                return <p>$0.00</p>
            }
            if(len === 1){
                return <p>$10.00</p>
            }
            if(len >= 2){
                let sum2 = sum.reduce((a,b) => parseInt(a,10) + parseInt(b,10))
                return <p>{sum2}</p>
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
                            <button type="button" className="btn btn-outline-danger boton-exit-sidebar" onClick={this.closeMenu}>Cerrar</button>
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
                                {this.sumAllProducts()}
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