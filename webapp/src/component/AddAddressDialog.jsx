import React from 'react';
import ContractDataController from '../main/datacontroller/ContractDataController';
// import MainDataController from '../../common/dc/MainDataController';

// material-ui
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class AddAddressDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            // isOpenPendingModal: false,
        }
    }

    onAddButtonClicked() {
        if (this.state.name === '' || this.state.address === '') {
            alert(this.props.t('Fill The Field'));
            return;
        }
        var args = `[\"${this.state.address}\", \"${this.state.name}\"]`;
        ContractDataController.sendTransaction('0', 'save', args, undefined, this.props.succeedListener, undefined);
        this.setState({
            ...this.state,
            name: '',
            address: '',
        }, () => {
            this.props.closeListener();
        });
    }

    onNameChanged(e) {
        this.setState({
            ...this.state,
            name: e.target.value,
        });
    }

    onAddressChanged(e) {
        this.setState({
            ...this.state,
            address: e.target.value,
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
                label={'Add'}
                primary={true}
                onClick={this.onAddButtonClicked.bind(this)}
            />,
        ];
        return (
            <div>
                <Dialog
                    title={'Add Address'}
                    actions={actions}
                    modal={false}
                    open={this.props.isOpenModal}
                    onRequestClose={this.props.closeListener}
                    contentStyle={styles.customContentStyle}
                    bodyStyle={styles.customBodyStyle}>
                    <TextField
                        hintText={'Name'}
                        floatingLabelText={'Name'}
                        value={this.state.name}
                        maxLength='35'
                        onChange={this.onNameChanged.bind(this)}
                    />
                    <br />
                    <TextField
                        hintText={'Address'}
                        floatingLabelText={'Address'}
                        value={this.state.address}
                        maxLength='35'
                        onChange={this.onAddressChanged.bind(this)}
                    />
                </Dialog>
            </div>
        );
    }
}

export default AddAddressDialog;