import React from 'react'

const Header = (props) => {
  console.log(props);
  
  return (
    <nav class="navbar navbar-light bg-light justify-content-center">
      <a class="navbar-brand" href="#">{props.appName}</a>
    </nav>
  );
}
export default Header