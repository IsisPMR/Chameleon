import React from 'react';
import './Toolbar.css';
import NavChameleon from '../../img/bar/chameleon.jpg';
import CIcon from '../../img/icons/cIcon.png';
import { Link } from "react-router-dom";

const Toolbar = props => (
    <header className='toolbar' style={{backgroundImage: NavChameleon}}>
        <nav className='toolbar__navigation'>
            <div></div>
            <div className='toolbar__logo chameleonIcon' ><Link to='/'>Chameleon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link><Link to='/'><img src={CIcon} alt="Chameleon Icon" /></Link></div>
            <div className='spacer' />
            <div className='toolbar__navigation__items'>
            {/*
                <ul>
                    <li><a href='../AboutMe/Aboutme'>About me</a></li>
                </ul> */
            }
            </div>
        </nav>
    </header>
);

export default Toolbar;
