import React from 'react';

// material-ui
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class ContactDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            customContentStyle: {
                width: '90%',
            },
            customBodyStyle: {
                overflowY: 'scroll',
                overflowX: 'scroll'
            },
        }
        const actions = [
            <FlatButton
                label={'Cancel'}
                secondary={true}
                onClick={this.props.closeListener}
            />
        ];
        return (
            <div>
                <Dialog
                    title={`Contact`}
                    actions={actions}
                    modal={false}
                    open={this.props.isOpenModal}
                    onRequestClose={this.props.closeListener}
                    contentStyle={styles.customContentStyle}
                    bodyStyle={styles.customBodyStyle}>
                    <p>Contact me in jydrogen@gmail.com</p>
                    <a href="https://github.com/jonjee" target="_blank" style={{textDecoration: "none", color: "#ff7675"}}>Github Link</a>
                    <br />
                    <a href="https://linkedin.com/in/junwooji" target="_blank" style={{textDecoration: "none", color: "#74b9ff"}}>Linkedin link</a>
                </Dialog>
            </div>
        );
    }
}

export default ContactDialog;