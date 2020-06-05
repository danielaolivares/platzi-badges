import React from 'react'; 
import md5 from 'md5';

function Gravatar (props) {
  const email = props.email;
  const hash = md5(email);

  return (
    <img 
          className={props.ClassName}
           src={`https://s.gravatar.com/avatar/${hash}?s=80`}
           />
  );
};

export default Gravatar;