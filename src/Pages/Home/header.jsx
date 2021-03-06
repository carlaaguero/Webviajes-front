import React from 'react';

import './header.scss';
function Header(props) {

       return (

              <header className="cabecera"  id="cabecera" ref={ props.selector }>
                     <div className="titulos">
                            <h1>VIAJA!</h1>
                            <h3>Descubre lugares maravillosos!</h3>
                     </div>
                     <div className="btn-principal">
                            <button type="button"> Ver Destinos </button>
                     </div>

              </header>
       )
};


export default Header;