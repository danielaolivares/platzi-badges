import React from 'react'
import {Link} from 'react-router-dom'

import './styles/BadgesList.css';
import twitter from '../images/social-media.svg'


class BadgesList extends React.Component{
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badge were found</h3>
          <Link className="btn btn-primary" to="/badges/new"> Create new badge</Link>
        </div>
      )
    }
    return(
      <ul className="list-unstyled BadgeList">
        {/* ya no viene de state , {this.state.dat.map((badge) => {,  si no que de props. badges */}
        {this.props.badges.map((badge) => {
          return (
            
            <li className="BadgesListItem" key={badge.id}>
              <img src={badge.avatarUrl} alt="logo"className="BadgesListItem__avatar" /> 
              <div >
                <div> <strong>{badge.firstName} {badge.lastName} </strong></div>
              <div>{badge.jobTitle}</div>      
              <div className="Twitter__name">
                <img src={twitter} alt="img logo" className="Twitter__logo"/>@{badge.twitter}</div>           
              </div>
            </li>
          
          );
        })}
      </ul>      
    
    );
  }
}

export default BadgesList;