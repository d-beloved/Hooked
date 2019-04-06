import React from 'react';


const Header = (props) => {

  let {
    text
  } = props;

  return (
    <header className="App-header">
      <h2>{text}</h2>
    </header>
  );
};

export default Header;
