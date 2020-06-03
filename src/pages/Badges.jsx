import React from 'react'
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';

import api from '../api'

class Bagdes extends React.Component {

  

  //comenzamos a agregar los metodos de montaje, el orden en los que ocurren estan escritos en consolelog

  //en el constructor recibe props estos mismos props nosotros lo usamos para inicializarla super clase con estos mismos props
  constructor(props) {
    super(props);
    console.log('1.constructor()');
    // aqui inicializamos el estado, pero ya no solo es state, ahora sera this.state

   this.state={
      data: [],
    };
  }

  //simulare una peticion a una api, inicializare el estado donde data esta vacio, y aqui al simular la peticion en componentDidMount obtendre resultado en algun momento, en este caso en 3 seg llamara la funcion que mostrara la data
  componentDidMount() {
    console.log('3.componentDidMount()');

    this.fetchData();
    
    // this.timeoutId = setTimeout(()=>{
      
    //   this.setState({
    //     loading: true,
    //     error: null,
    //     data: undefined
    //   })
    // },3000);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState ({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  // componentDidUpdate recibe dos argumento los props que teniamos antes y el state que teniamos antes
  componentDidUpdate(prevProps,prevState) {
    console.log('5. componentDidUpdate()');

    // impromire los valores que tenia antres
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    // y los compararemos con los props y state que tenemos ahora , para comparar
    console.log({
      props: this.props,
      state: this.state,
    });
  }

// ultimo metodo es el momento antes de que salga del Dom

componentWillUnmount(){
  console.log('6. componentWillUnmount');

  clearTimeout(this.timeoutId);
}
  render() {
    console.log('2/4.render()');

    if (this.state.loading === true) {
      return 'Loading ...';
    }

    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }

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