import React from 'react';
import {Avatar } from '@material-ui/core'
import AccessTime from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import  './Header.css'

;

function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <Avatar
            className="header__avatar"
            alt="Igor Matias"
            src=""
            />
            <AccessTime
            />

        </div>
        <div className="header__search">
            <SearchIcon/>

            <input placeholder="Search anything" />

        </div>
        <div className="header__right">
        <HelpOutlineIcon/>

        </div>

    </div>
    )
}

export default Header;