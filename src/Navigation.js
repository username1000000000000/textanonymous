
import './App.css';
import React from 'react';
import Logo from './breast.png';
import {BeakerIcon, ZapIcon, KeyIcon, ArchiveIcon} from '@primer/octicons-react'


function Navigation() {
  return (
    <nav>
        <div>
            <a><img src={Logo} style={{height: "30px", width: "30px"}}/> </a>
            <input type="text" placeholder="Search tittymilk.org" />
        </div>
        <div>
            <a><KeyIcon size={16} /> Sign in</a>
            <a><ArchiveIcon size={16} /> Sign out</a>
        </div>
    </nav>
  );
}

export default Navigation;