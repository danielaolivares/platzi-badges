import React from 'react';

import Navbar from './Navbar';

function Layout (props) {
// const children = props.children;
  return (
    // react.fragmen es un componente especial que react entiende que va a hacer que podamos regresar mas de un elemento y asi no utilizar tantos div y en la inspeccion no aparece, es un elemtenti "imaginario" para no utilizar div innecesarios
    <React.Fragment>
      <Navbar/>
      {props.children}
    </React.Fragment>
    
  )
}

export default Layout;