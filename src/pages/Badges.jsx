import React from 'react'
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';

class Bagdes extends React.Component {

  state={
    data: [
      {
        id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
        firstName: 'Freda',
        lastName: 'Grady',
        email: 'Leann_Berge@gmail.com',
        jobTitle: 'Legacy Brand Director',
        twitter: 'FredaGrady22221-7573',
        avatarUrl:
          'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
      },
      {
        id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
        firstName: 'Major',
        lastName: 'Rodriguez',
        email: 'Ilene66@hotmail.com',
        jobTitle: 'Human Research Architect',
        twitter: 'MajorRodriguez61545',
        avatarUrl:
          'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
      },
      {
        id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
        firstName: 'Daphney',
        lastName: 'Torphy',
        email: 'Ron61@hotmail.com',
        jobTitle: 'National Markets Officer',
        twitter: 'DaphneyTorphy96105',
        avatarUrl:
          'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
      }
    ]
  }
  render() {
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="confLogo"/>
            </div>
          </div>
        </div>

<div className="Badge__container">
  

{/* aqui utilizamos la data que tenemos inicializada en el estado, es una lista de componentes sin estilos */}
<div className="Badges__list">
  <div className="Badges__container">
  <div className="Badges__buttons">
    <Link to="/badges/new" className="btn btn-primary">
      New Badge
    </Link>
  </div>
    <BadgesList badges={this.state.data} />
    {/* <ul className="list-unstyled">
     
     por cada uno de los elementos que tenga data quiero convertirlos de un objeto a un elemento, con una funcion sobre los arreglos , que es map, esta recibe una funcion como argumento y tiene que regresar otro valor en estes caso de un objeto a un elemento, por cada uno de los datos, nos va a dar un badge y este badge lo queremos regresar como un elemento lista y ahi anotamos lo que queremos que nos devuelva en estes caso nombre, apellido etc
      {this.state.data.map((badge) =>{
        return (
          // para que no salga el warning cada hijo de una lista debe tener un prop unico llamado key, es un props que ayuda a react para determinar cuando el elemnto se vuelve a redenrizar para ver si se mantuvo en la lista o si cambio, es un identificador unico por eso es badge.id por que debe ser unico, el nosmbre puede existir que hayan dos personas con el mismo nombre por eso se utiliza id
          // <li key={badge.id}>
          //   <p>
          //   {badge.firstName} {badge.lastName}
          //   </p>
          // </li>
          //  esta comentado y transformado en eqitueta por que lo creamos como un nuevo componente
        )
      })}
    </ul>*/}
  </div>
</div>
</div>
      </React.Fragment>
    )
  }
}
export default Bagdes;