 
// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
// import Badge from './components/Badge';
// import Navbar from './components/Navbar';
import BadgeNew from './pages/BadgeNew';


const container = document.getElementById('app');

// ReactDOM.render(__qué quiero mostrar__, __dónde_quiero mostrar_);
ReactDOM.render(<BadgeNew />, container);