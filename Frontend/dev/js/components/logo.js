import React from 'react';
import '../../styles/logo.sass';
import LogoImage from '../../img/logo.png';

const Logo = () => (
  <div>
    <img id="logo" src={LogoImage} className="logo" />
  </div>
);

export default Logo;
