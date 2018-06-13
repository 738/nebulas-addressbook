import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Identicon from 'identicon.js';

class AddressItem extends React.Component {
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
            background: [255, 255, 255, 255],         // rgba white
            margin: 0.2,                              // 20% margin
            size: 420,                                // 420px square
        };
        return (
            <div>
                <Card style={styles.card}>
                    <CardHeader
                        avatar={`data:image/png;base64,${new Identicon(this.props.item.address, identiconOptions).toString()}`}
                        title={this.props.item.name}
                        subtitle={this.props.item.address}
                        showExpandableButton={false}
                    />
                    <CardActions>
                        <RaisedButton style={styles.button} label="송금" backgroundColor="#00cec9" />
                        <RaisedButton style={styles.button} label="QR코드" backgroundColor="#74b9ff" />
                        <RaisedButton style={styles.button} label="편집" backgroundColor="#a29bfe" />
                        <RaisedButton style={styles.button} label="삭제" backgroundColor="#fab1a0" />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default AddressItem;