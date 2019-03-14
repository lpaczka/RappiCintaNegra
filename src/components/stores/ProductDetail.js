import React, { Component } from 'react';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import './stores.css'
import Modal from 'react-modal';
import close from '../../img/close.png'

const GETPRODUCT = gql`
query getStoreById($id:ID!){
  getProductById(id:$id){
    _id
    img_product
    name_product
    description_product
    price
  }
}
`

const customStyles = {
    content: {
        top: '54%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        padding:'0',
        width: '880px',
        height:'500px'
    }
};

Modal.setAppElement('#root')

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "5c85ab7d85776e27d4c77410",
            modalIsOpen: props.detail,
            product:[]
        }
    }

    componentDidUpdate = () => {
        if(this.props.detail !== this.state.modalIsOpen){
            this.setState({ 
                modalIsOpen: this.props.detail,
                id: this.props.id
            });
        }
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        if(this.state.modalIsOpen === true){
            this.setState({ 
                modalIsOpen: false,
                id: "5c85ab7d85776e27d4c77410"
            })
        }
    }

   
    render() {
        return (
            <React.Fragment>
            <Query query={GETPRODUCT} variables={{id:this.state.id}}>
                {
                    ({ data, loading, error }) => {
                        if (error) return <p>{error}</p>
                        if (loading) return <div></div>
                        return (
                            <div className="div-modal">
                                <Modal
                                    isOpen={this.state.modalIsOpen}
                                    onAfterOpen={this.afterOpenModal}
                                    onRequestClose={this.props.close}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <div className="bg-image">
                                        <img src={data.getProductById.img_product} alt="modal"></img>
                                    </div>
                                    <div className="info-product-modal">
                                        <img className="close" src={close} onClick={this.props.close} alt="exit"></img>
                                        <div className="info-product-modal-descriptions">
                                            <h3 className="name-product">{data.getProductById.name_product}</h3>
                                            <p className="description-product">{data.getProductById.description_product}</p>
                                        </div>
                                        <div>
                                            <h5 className="details-product">Instrucciones adicionales</h5>
                                            <textarea className="input-details-product" type="text" placeholder="Personaliza tu pedido"></textarea>
                                        </div>
                                        <div>
                                            <button id="btn-addSideBar" className="boton-modal" type="submit" value={data.getProductById._id} onClick={this.props.basket}>Agregar {`$${data.getProductById.price}.00`}</button>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        )
                    }
                }
            </Query>
            </React.Fragment>
        );
    }
}

export default ProductDetail;