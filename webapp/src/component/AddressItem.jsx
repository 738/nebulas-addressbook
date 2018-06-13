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
                width: "50px"
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
                        <RaisedButton style={styles.button} label="송금" primary={true}/>
                        <RaisedButton label="QR" primary={true}/>
                        <RaisedButton label="편집" secondary={true}/>
                        <RaisedButton label="삭제" secondary={true}/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default AddressItem;