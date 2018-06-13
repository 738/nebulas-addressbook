import React from 'react';

// material-ui
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class QRCodeDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const actions = [
            <FlatButton
                label="닫기"
                secondary={true}
                onClick={this.props.closeListener}
            />,
        ];
        return (
            <Dialog
                title="QR코드"
                actions={actions}
                modal={false}
                open={this.props.isOpenModal}
                onRequestClose={this.props.closeListener}
                bodyStyle={{ textAlign: 'center' }}
                style={{ maxWidth: '300px' }}>
                <img src={this.props.qrcode} />
            </Dialog>
        );
    }
}

export default QRCodeDialog;
