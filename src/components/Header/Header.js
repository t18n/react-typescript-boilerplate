import React from 'react'
import icon from 'Assets/images/react-icon.png'

const Header = (props) => {
  console.log(props);
  
  return (
    <nav className="navbar navbar-light bg-light justify-content-center">
      <a className="navbar-brand" href="#">
      <img alt='React' src={icon} width="50"/> 
      {props.appName}</a>
    </nav>
  );
}
export default Header