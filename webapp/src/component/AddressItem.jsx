import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class AddressItem extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        title={this.props.item.name}
                        subtitle={this.props.item.address}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardActions>
                        <FlatButton label="송금" />
                        <FlatButton label="QR코드" />
                        <FlatButton label="편집" />
                        <FlatButton label="삭제" />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default AddressItem;