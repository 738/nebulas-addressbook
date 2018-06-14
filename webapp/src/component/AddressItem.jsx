import React from 'react';
import QRious from 'qrious';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Identicon from 'identicon.js';
import QRCodeDialog from './QRCodeDialog';

class AddressItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenQRCodeModal: false,
            qrcode: '',
        }
    }

    onQRCodeModalOpen() {
        this.setState({
            ...this.state,
            isOpenQRCodeModal: true,
        }, this.onQRCodeGenerated.bind(this));
    }

    onQRCodeModalClosed() {
        this.setState({
            ...this.state,
            isOpenQRCodeModal: false,
        });
    }

    onQRCodeGenerated() {
        var qr = new QRious({
            value: this.props.item.address,
        });
        this.setState({
            ...this.state,
            qrcode: qr.toDataURL(),
        });
    }

    render() {
        const styles = {
            card: {
                margin: "15px"
            },
            button: {
                minWidth: "60px",
            }
        }
        const identiconOptions = {
            foreground: [56, 103, 214, 255],
            background: [255, 255, 255, 255],
            margin: 0.2,
            size: 420,
        };
        return (
            <div>
                <Card style={styles.card}>
                    <CardHeader
                        avatar={`data:image/png;base64,${new Identicon(this.props.item.address, identiconOptions).toString()}`}
                        title={this.props.item.name}
                        subtitle={this.props.item.address}
                        titleStyle={{fontSize: '20px'}}
                        subtitleStyle={{fontSize: '10px'}}
                        showExpandableButton={false}
                    />
                    <CardActions>
                        <RaisedButton style={styles.button} label="송금" backgroundColor="#00cec9" />
                        <RaisedButton style={styles.button} label="QR코드" backgroundColor="#74b9ff" onClick={this.onQRCodeModalOpen.bind(this)} />
                        <RaisedButton style={styles.button} label="편집" backgroundColor="#a29bfe" />
                        <RaisedButton style={styles.button} label="삭제" backgroundColor="#fab1a0" />
                    </CardActions>
                </Card>
                <QRCodeDialog isOpenModal={this.state.isOpenQRCodeModal} closeListener={this.onQRCodeModalClosed.bind(this)} qrcode={this.state.qrcode} item={this.props.item} />
            </div>
        );
    }
}

export default AddressItem;