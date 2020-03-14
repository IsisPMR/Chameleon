import React from 'react';
import './Toolbar.css';
import CIcon from '../../img/icons/cIcon.png';
import { Link } from "react-router-dom";

const Toolbar = props => (
    <header className='toolbar' >
        <nav className='toolbar__navigation'>
            <div></div>
            <div className='toolbar__logo chameleonIcon' ><Link to='/Chameleon'>Chameleon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link><Link to='/Chameleon'><img src={CIcon} alt="Chameleon Icon" /></Link></div>
            <div className='spacer' />
            <div className='toolbar__navigation__items'>
            
                <ul>
                    <li><Link to='/admin'>.</Link></li>
                </ul> 
            
            </div>
        </nav>
    </header>
);

export default Toolbar;
