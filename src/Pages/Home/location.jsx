import React from 'react';
import { Link } from 'react-router-dom';

import './location.scss';

function Location() {

    function onSubmit(ev) {

        ev.preventDefault();
    }

    return (

        <div className="location" id="location">
            <div className="mapa">
                <img src="./img/maps.png" className="imagenMapa" />
            </div>
            <div className="contacto">
                <div className="infoContacto">
                    <p>Email: c.agueromiranda@gmail.com</p>
                    <p>Telf: 0264 123 4567</p>
                    <p>Give us a call drop by anytime, we endevour to answer all enquiries within 24 hours on business days.</p>
                    <p>We are open from 8:30 AM - 4:00 PM week days </p>
                </div>
                <div className="infoForm">
                    <form className="formulario" onSubmit={onSubmit} >
                        <input type="text" placeholder="*Name" />
                        <input type="email" placeholder="*Email" />
                        <input type="number" placeholder="*Phone" />
                        <input type="text" placeholder="*Country" />
                        <textarea placeholder="*Message" rows="7" />
                        <p className="requisito">*PLEASE COMPLETE ALL FIELDS CORRECTLY </p>
                        <Link className="btn-contact"><input type="submit" value="Enviar Mensaje" /></Link>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Location;