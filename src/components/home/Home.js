import React, { Component } from 'react';
import imageHome from '../../img/rappi_mercado2.jpg';
import './home.css';
import time from './img/relojRappi.PNG';
import love from './img/love.JPG';
import quality  from './img/calidad.JPG';
import dona from './img/dona.JPG';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {StoreCard} from '../StoreCards';
import loader from './img/lg.dual-ring-loader.gif'
import message from './img/mensajeria.JPG'
import {Footer} from '../../common/footer'

const ALLSTORES = gql`
   query{
  Stores{
    _id
    img_store
    name
  }
}
`;

class Home extends Component {
    render() { 
        return (
            <div className="Home">
            <img src={imageHome} className="home-image" alt='home'/>
            <div className="upgrades-rappi">
                <div className="upgrade-single">
                    <img className="img-upgrade" src={time} alt='time'/>
                    <div>
                        <h3 className="title-upgrade">Ahorra tiempo</h3>
                        <p className="text-upgrade">Recibe tu súper en casa en menos de 1 hora</p>
                    </div>
                </div>
                <div className="upgrade-single">
                    <img className="img-upgrade" src={love} alt='love'/>
                    <div>
                        <h3 className="title-upgrade">En manos expertas</h3>
                        <p className="text-upgrade">Un shopper selecciona tus productos con amor</p>
                    </div>
                </div>
                <div className="upgrade-single">
                    <img className="img-upgrade" src={quality} alt='quality'/>
                    <div>
                        <h3 className="title-upgrade">Calidad 100%</h3>
                        <p className="text-upgrade">Si no te gusta el estado de un producto, ¡no lo pagas!</p>
                    </div>
                </div>
            </div>
            <div className="stores-on">
                <h3 className="title-stores">Compra en tu tienda favorita</h3>
                <p className="text-upgrade">Cerca de ti hay <span className="important-stores">+20 tiendas</span></p>
                <div className="stores-carousel">
                    <Query query={ALLSTORES}>
                        {
                            ({data, error, loading}) => {
                                if(error) return <h4>{error}</h4>
                                if(loading) return <img className="loader-stores" src={loader} alt='loader'/>
                                const store = data.Stores.map(stores => (
                                        <StoreCard
                                            id={stores._id}
                                            img={stores.img_store}
                                            name={stores.name}
                                            key={stores._id}
                                        />     
                                ))
                                return(
                                    <React.Fragment>
                                        {store}
                                    </React.Fragment>
                                )
                            }
                        }
                    </Query>
                </div>
            </div>
            <section className="stores-special">
                <div className="Antojos">
                <div className="text-stores-special">
                    <h4>Lo que quieras</h4>
                    <p>Tu restaurante secreto o cualquier tienda que conozcas</p>
                </div>
                    <img className="img-stores-special" src={dona} alt="dona"/>
                </div>
                <div className="rappifavor">
                <div className="text-stores-special info-rappifavor">
                    <h4>Rappi Favor</h4>
                    <p>Lo que necesites que requiera tiempo</p>
                </div>
                    <img className="img-stores-special" src={message} alt="message"/>
                </div>
            </section>
            <Footer/>
            </div>
         );
    }
}
 
export default Home;