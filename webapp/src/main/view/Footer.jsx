import React from 'react';

const footerStyle = {
    width: "100%",
    height: "80px",
    backgroundColor: "#4b7bec",
    fontFamily: 'Catamaran, sans-serif',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    // padding: '10px',
    // alignItems: 'center',
}

const Footer = () => (
    <div style={footerStyle}>
        © 2018 nasd.app
    </div>
);

export default Footer;
