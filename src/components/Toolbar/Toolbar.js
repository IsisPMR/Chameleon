import React from 'react';
import './Toolbar.css';
import NavChameleon from '../../img/bar/chameleon.jpg';
import { Link } from "react-router-dom";

const Toolbar = props => (
    <header className='toolbar' style={{backgroundImage: NavChameleon}}>
        <nav className='toolbar__navigation'>
            <div></div>
            <div className='toolbar__logo'><Link to='/'>Chameleon</Link></div>
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
