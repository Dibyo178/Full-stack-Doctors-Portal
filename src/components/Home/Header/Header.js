import React from 'react';
import HeaderMain from '../../HeaderMain/HeaderMain';
import Navbar from '../../NavBar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

import './Header.css';

const Header = () => {
    return (
        <div class='header-container'>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
            
        </div>
    );
};

export default Header;