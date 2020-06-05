import React  from 'react';

class BadgeForm extends React.Component {
  
  // para que pueda leer el value de los input debemos inicializar el estado, puede ser en cualquier lugar. y se inicializa con state ={}, puede estar vacio
  // state ={};
  handleClick= e =>{
    console.log("hizo click");
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('Form was submitted');
  //   // console.log(this.state);
  // };


  render () {
    return(
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.props.onSubmit}>
          {/* para que el input sea controlado, que no guarde doblemente los datos se le pone value ={this.state.name} para que lo lea del estado  */}
          <div className="form-group">
            <label >First Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="firstName"
            // aqui es en donde pasamos el valor de badgenew a badgeform a traves de un formulario
            value={this.props.formValues.firstName} />
          </div>

          <div className="form-group">
            <label >Last Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="lastName"
            value={this.props.formValues.lastName} />
          </div>

          <div className="form-group">
            <label >Email</label>
            <input onChange={this.props.onChange} className="form-control" type="email" name="email"
            value={this.props.formValues.email} />
          </div>

          <div className="form-group">
            <label >Job Title</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle"
            value={this.props.formValues.jobTitle} />
          </div>

          <div className="form-group">
            <label >Twitter</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="twitter"
            value={this.props.formValues.title} />
          </div>

          
          <button onClick= {this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
      
    )
  }
}

export default BadgeForm;
