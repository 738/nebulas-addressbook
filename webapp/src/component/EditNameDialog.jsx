import React from 'react';
import ContractDataController from '../main/datacontroller/ContractDataController';

// material-ui
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class EditNameDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: '',
        }
    }

    onEditButtonClicked() {
        if (this.state.amount === '') {
            alert('Fill The Name');
            return;
        }
        var args = `[\"${this.props.address}\", \"${this.state.newName}\"]`;
        ContractDataController.sendTransaction('0', 'edit', args, undefined, this.props.succeedListener, undefined);
        this.setState({
            ...this.state,
            newName: '',
        }, () => {
            this.props.closeListener();
        });
    }

    onNewNameChanged(e) {
        this.setState({
            ...this.state,
            newName: e.target.value,
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
                label={'Edit'}
                primary={true}
                onClick={this.onEditButtonClicked.bind(this)}
            />,
        ];
        return (
            <div>
                <Dialog
                    title={`Edit Name`}
                    actions={actions}
                    modal={false}
                    open={this.props.isOpenModal}
                    onRequestClose={this.props.closeListener}
                    contentStyle={styles.customContentStyle}
                    bodyStyle={styles.customBodyStyle}>
                    <TextField
                        hintText={this.props.name}
                        floatingLabelText={'Edit Name'}
                        value={this.state.amount}
                        maxLength='35'
                        onChange={this.onNewNameChanged.bind(this)}
                    />
                </Dialog>
            </div>
        );
    }
}

export default EditNameDialog;