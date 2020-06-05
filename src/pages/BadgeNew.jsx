import React from 'react';

import header from '../images/platziconf-logo.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BagdeForm';
import api from '../api';

// inicializamos un estado aqui, para que cambie la informacion de badgeform, y no solo este en bagdeform si no que podamos cambiarla a nivel de pa pagina.
class BadgeNew extends React.Component {
  state = { form: {
    // para que no nos salga el warning se inicializan los valores del formulario con string vacios.
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    twitter: '',
  } };

//  creamos un metodo que se llama handleChange donde recibe el evento y cuando lo reciba va a hacer un setState, pero va a decir setstate le pasamos un objeto y queremos que el form tenga la informacion del evento con nombre y valor
handleChange = e => {
  this.setState ({
    form: {
      // para que no se sobrescriba la informacion, de firstname, lastname, si no que salgan todos los datos debemos realizar ...this.state.form, con eso dejamos caer todos los valores que hay en this.state.form y agregamos el siguiente.
      ...this.state.form,
      [e.target.name]: e.target.value
    },
  });
};

handleSubmit = async e => {
  e.preventDefault()
  this.setState({ loading: true, error: null })

  try {
    await api.badges.create (this.state.form)
    this.setState({ loading: false })
  } catch (error) {
    this.setState ({ loading: false, error: error })
  }
}

// el metodo handlechange ya no queremos que este en badgeform, si no que pertenezca a badgenew y para eso lo pasamos como uns props a a la etiqueta de badgeform

  render (){
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              {/* aqui ahora para que vaya actualizandose los datos en badge, pasamos la informacion del form al badge */}
              <Badge 
              firstName={this.state.form.firstName || 'First name'}
              lastName= {this.state.form.lastName || 'Last Name'}
              twitter={this.state.form.twitter || 'Twitter'}
              jobTitle ={this.state.form.jobTitle || 'Job Title'}
              email={this.state.form.email || 'email'}
              avatarUrl=" https://s.gravatar.com/avatar/222aed108f0bf7f7d3e7eae06ff693f6?s=80"/>
            </div>
            <div className="col-6">
              {/* aqui se pasa como proprs el handlechange y pasamos los valores del formulario desde badgenew a badgeform a traves de un proprs que es formValues  */}
              <BadgeForm 
              onChange={this.handleChange} 
              onSubmit={this.handleSubmit}
              formValues ={this.state.form} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew;