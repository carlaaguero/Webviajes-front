import React from 'react';
import { Link } from 'react-router-dom';
import './quienSomos.scss';

function QuienSomos() {

       return (
              <div className="fondoContenedor" id="quienSomos" >
                     <div className="contenedor" >
                            <div className= "quienSomos" >
                                   <h2>QUIEN SOMOS</h2>
                                   <p>  Somos una agencia de viaje online creada en 2009 por un equivo de viajeros
                                          entusiastas que deciden hacer su pasion por conocer el mundo un modo de vida.
                                          Desde nuestros inicios hemos diseñado mas de 500 viajes organizados a diferentes
                                          destinos en Europa, NorteAmerica y Asia. Nuestro objetivo es ahora es ir ampliando
                                          horizonstes poco a poco.
                                   </p>
                                   <Link className="btn-somos"><input type="submit" value="DESCRUBRIR" /></Link>
                            </div>
                     </div>
              </div>
       )

};

export default QuienSomos;