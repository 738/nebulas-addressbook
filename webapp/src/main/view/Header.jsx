import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Menu = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton iconStyle={{color: 'white'}}><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <MenuItem primaryText="About" />
        <MenuItem primaryText="Contact" />
    </IconMenu>
);

const Header = () => (
    <AppBar
        title="Nebulas Address Book"
        titleStyle={{ textAlign: "center", fontFamily: 'Permanent Marker, cursive' }}
        style={{backgroundColor: "#4b7bec"}}
        iconElementLeft={<div />}
        iconElementRight={<Menu />}
    />
);

export default Header;