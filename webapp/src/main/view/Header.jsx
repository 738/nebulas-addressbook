import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AboutDialog from '../../component/AboutDialog';
import ContactDialog from '../../component/ContactDialog';

const Menu = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton iconStyle={{ color: 'white' }}><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <MenuItem primaryText="About" onClick={props.onAboutModalOpen} />
        <MenuItem primaryText="Contact" onClick={props.onContactModalOpen} />
    </IconMenu>
);

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenAboutModal: false,
            isOpenContactModal: false,
        }
    }

    onAboutModalOpen() {
        this.setState({
            ...this.state,
            isOpenAboutModal: true,
        });
    }

    onAboutModalClosed() {
        this.setState({
            ...this.state,
            isOpenAboutModal: false,
        });
    }

    onContactModalOpen() {
        this.setState({
            ...this.state,
            isOpenContactModal: true,
        });
    }

    onContactModalClosed() {
        this.setState({
            ...this.state,
            isOpenContactModal: false,
        });
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Nebulas Address Book"
                    titleStyle={{ textAlign: "center", fontFamily: 'Permanent Marker, cursive' }}
                    style={{ backgroundColor: "#4b7bec" }}
                    iconElementLeft={<div />}
                    iconElementRight={<Menu onAboutModalOpen={this.onAboutModalOpen.bind(this)} onContactModalOpen={this.onContactModalOpen.bind(this)}/>}
                />
                <AboutDialog isOpenModal={this.state.isOpenAboutModal} closeListener={this.onAboutModalClosed.bind(this)} />
                <ContactDialog isOpenModal={this.state.isOpenContactModal} closeListener={this.onContactModalClosed.bind(this)} />
            </div>
        );
    }
}

export default Header;