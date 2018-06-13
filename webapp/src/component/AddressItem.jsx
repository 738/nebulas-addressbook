import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

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
        return (
            <div>
                <Card style={styles.card}>
                    <CardHeader
                        title={this.props.item.name}
                        subtitle={this.props.item.address}
                        showExpandableButton={false}
                    />
                    <CardActions>
                        <RaisedButton style={styles.button} label="송금" backgroundColor="#00cec9"/>
                        <RaisedButton style={styles.button} label="QR코드" backgroundColor="#74b9ff"/>
                        <RaisedButton style={styles.button} label="편집" backgroundColor="#a29bfe"/>
                        <RaisedButton style={styles.button} label="삭제" backgroundColor="#fab1a0"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default AddressItem;