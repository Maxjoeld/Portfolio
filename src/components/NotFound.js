import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return ( 
    <div className="notfound-layout">
      <div >
        <h1 className="notfound-404"> 404 </h1>
        <p> We're sorry, the page you requested could not be found. <br />
          Please go to to the <NavLink style={{ color: '#74F9D9'}}to="/home">homepage</NavLink> or contact me at Maximo.jdelarosa@gmail.com
        </p>
      </div>
    </div>
   );
}
 
export default NotFound;