import React from 'react';
import ContractDataController from '../main/datacontroller/ContractDataController';

// material-ui
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class SendDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
        }
    }

    onSendButtonClicked() {
        if (this.state.amount === '') {
            alert(this.props.t('Fill The Amount'));
            return;
        }
        ContractDataController.transfer(this.props.address, this.state.amount);
        this.setState({
            ...this.state,
            amount: '',
        }, () => {
            this.props.closeListener();
        });
    }

    onAmountChanged(e) {
        this.setState({
            ...this.state,
            amount: e.target.value,
        });
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
            />,
            <FlatButton
                label={'Send'}
                primary={true}
                onClick={this.onSendButtonClicked.bind(this)}
            />,
        ];
        return (
            <div>
                <Dialog
                    title={`Send NAS to ${this.props.name}`}
                    actions={actions}
                    modal={false}
                    open={this.props.isOpenModal}
                    onRequestClose={this.props.closeListener}
                    contentStyle={styles.customContentStyle}
                    bodyStyle={styles.customBodyStyle}>
                    <TextField
                        hintText={'Amount'}
                        floatingLabelText={'Amount'}
                        value={this.state.amount}
                        maxLength='35'
                        onChange={this.onAmountChanged.bind(this)}
                    />
                </Dialog>
            </div>
        );
    }
}

export default SendDialog;