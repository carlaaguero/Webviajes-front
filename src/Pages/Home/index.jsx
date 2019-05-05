import React, { Component } from 'react';

import './index.scss';
import Header from './header.jsx';
import QuienSomos from './quienSomos.jsx'
// import DondeEstamos from './dondeEstamos.jsx';
import Viajes from './viajes.jsx';


function Home(props) {



    return (
        <div>
            <Header />
            <div className="zoneViajes">
                <div className="row1">
                    <Viajes text="save €60 pay only"
                        price="€850"
                        nameViaje="Buenos Aires"
                        imagesName="buenosaires.jpg"
                    />
                    <Viajes text="save €40 pay only"
                        price="€730"
                        nameViaje="Ciudad de México"
                        imagesName="mexicoDF.jpg"
                    />
                    <Viajes text="save €15 pay only"
                        price="€450"
                        nameViaje="Madrid"
                        imagesName="madrid.jpg"
                    />
                </div>
                <div className="row2">
                    <Viajes text="save €30 pay only"
                        price="€600"
                        nameViaje="Beijing"
                        imagesName="beijing.jpg"
                    />
                    <Viajes text="save €100 pay only"
                        price="€870"
                        nameViaje="New York"
                        imagesName="newyork.jpg"
                    />
                    <Viajes text="save €50 pay only"
                        price="€750"
                        nameViaje="Tokyo"
                        imagesName="tokyo.jpg"
                    />
                </div>
            </div>
            <QuienSomos />
            {/* <DondeEstamos /> */}
        </div>
    )
};

export default Home;