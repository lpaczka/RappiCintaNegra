import React from 'react';
import map from '../../components/home/img/map.JPG';
import recibo from '../../components/home/img/recibo.JPG';
import corazon from '../../components/home/img/corazon.JPG';
import './footer.css'
import redes from './img/redes.JPG'
import app from './img/app.JPG'

const Footer = () => (
    <React.Fragment>
    <div className="upgrades-rappi footer-updrades">
    <div className="upgrade-single">
        <img className="img-upgrade" src={map}/>
        <div class="text-footer-upgrades">
            <p className="text-upgrade">Entregas inmediatas con seguimiento en vivo</p>
        </div>
    </div>
    <div className="upgrade-single">
        <img className="img-upgrade" src={recibo}/>
        <div class="text-footer-upgrades">
            <p className="text-upgrade">Paga en efectivo o tarjeta sin mínimo de compra</p>
        </div>
    </div>
    <div className="upgrade-single">
        <img className="img-upgrade" src={corazon}/>
        <div class="text-footer-upgrades">
            <p className="text-upgrade">Más de 5 millones de pedidos entregados</p>
        </div>
    </div>
    </div>
    <section className="footer-info">
        <div className="footer-info-single">
        <div className="footer-info-inside">
        <div className="title-footer">
            <h4>Categorías</h4>
        </div>
        <div className="first-info-footer">
            <div className="first-info">
            <p>Super</p>
            <p>Restaurantes</p>
            </div>
            <div className="first-info">
            <p>Lo que quieras</p>
            <p>Rappi favor</p>
            </div>
        </div>
        </div>
        </div>
        <div className="footer-info-single">
        <div className="footer-info-inside">
        <div className="title-footer">
            <h4>Información de interés</h4>
        </div>
        <div className="first-info">
            <p>Términos y condiciones</p>
            <p>Aviso de privacidad</p>
            <p>Quiero ser RappiTendero</p>
            <p>Trabaja con nosotros</p>
            <p>Participa en la Hackathon</p>
            <p>Marketing, Performance & Insights</p>
        </div>
        </div>
        </div>
        <div className="footer-info-single">
        <div className="footer-info-inside">
        <div className="title-footer">
            <h4>Descarga el App</h4>
        </div>
        <div className="div-image-footer">
            <img src={app}></img>
        </div>
        <h4 className="div-image-footer">Síguenos</h4>
        <div className="div-image-footer">
            <img src={redes}></img>
        </div>
        </div>
        </div>
    </section>
    <div className="register-branding">
        <p>© 2019 Rappi</p>
    </div>
    </React.Fragment>
)

export default Footer