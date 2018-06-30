import React from 'react';
import capture from '../asset/capture.png';

// material-ui
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class AboutDialog extends React.Component {
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
            img: {
                width: '200px',
            }
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
                    title={`About`}
                    actions={actions}
                    modal={false}
                    open={this.props.isOpenModal}
                    onRequestClose={this.props.closeListener}
                    contentStyle={styles.customContentStyle}
                    bodyStyle={styles.customBodyStyle}>
                    <img src={capture} style={styles.img}/>
                    <p>Nebulas Address Book (nasd.app) is the collection of Nebulas Accounts which each users save. That makes Nebulas users to transfer NAS easily like Venmo, Toss, or Kakaopay.
</p>
                </Dialog>
            </div>
        );
    }
}

export default AboutDialog;