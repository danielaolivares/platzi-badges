import React from 'react'
import {Link} from 'react-router-dom'

import './styles/BadgesList.css';
import twitter from '../images/social-media.svg'


function useSearchBadges(badges) {
  const [ query, setQuery ] = React.useState ('');

  // este filtro es simple cuando son unos pocos, pero si la lista es de miles este calculo es un poco costoso, hara un cuello de botella, para solucionarlo usaremos un hooks que es, usememo
  // const filteredBadges= badges.filter(badge => {
  //   return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
  // })
const [filteredBadges, setFilteredBadges ] = React.useState(badges);

  React.useMemo(()=> {
    const result = badges.filter(badge => {
    // ponemos tolowercase para normalizar y todo convertirlño en minuscula ypara que busque en nombre y apellido creamos un string badge. first o last
    return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
  });

setFilteredBadges(result)
}, [badges, query]);

return { query, setQuery, filteredBadges}
}

function BadgesList  (props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges)


  if (filteredBadges.length === 0) {
      return (
        <div>
          <div className="form-group">
        <label>Filter Badges</label>
        {/* pasamos valos al input para ser controlado, necesitamos que cada vez que se escriba guardar el valor que hay asi despues lo podemos utilizar, a traves de dos props con el value y el onChage  */}
        <input type="text" className="form-control"
        value={query}
        onChange = {(e) => {
          setQuery(e.target.value);
        }}
        />
      </div>
          <h3>No badge were found</h3>
          <Link className="btn btn-primary" to="/badges/new"> Create new badge</Link>
        </div>
      )
    }
    return(
      <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        {/* pasamos valos al input para ser controlado, necesitamos que cada vez que se escriba guardar el valor que hay asi despues lo podemos utilizar, a traves de dos props con el value y el onChage  */}
        <input type="text" className="form-control"
        value={query}
        onChange = {(e) => {
          setQuery(e.target.value);
        }}
        />
      </div>
      <ul className="list-unstyled BadgeList">
        {/* ya no viene de state , {this.state.dat.map((badge) => {,  si no que de props. badges */}
        {filteredBadges.map((badge) => {
          return (
            
            <li className="BadgesListItem" key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
              <img src={badge.avatarUrl} alt="logo"className="BadgesListItem__avatar" /> 
              <div >
                <div> <strong>{badge.firstName} {badge.lastName} </strong></div>
              <div>{badge.jobTitle}</div>      
              <div className="Twitter__name">
                <img src={twitter} alt="img logo" className="Twitter__logo"/>@{badge.twitter}</div>           
              </div>
              </Link>
            </li>
          
          );
        })}
      </ul>      
      </div>
    );
  }

export default BadgesList;