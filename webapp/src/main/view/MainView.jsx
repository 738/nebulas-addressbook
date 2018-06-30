import React from 'react';
import AddressItem from '../../component/AddressItem';
import ContractDataController from '../../main/datacontroller/ContractDataController';
import AddAddressDialog from '../../component/AddAddressDialog';

// material-ui
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AutoComplete from 'material-ui/AutoComplete';

class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            addressItems: [],
            autoComplete: [],
            isOpenAddModal: false,
        }
    }

    componentDidMount() {
        this.fetchAddressItems();
    }

    onSearchInputChanged(e) {
        this.setState({
            ...this.state,
            searchInput: e.target.value,
        })
    }

    handleUpdateInput(value) {
        this.setState({
            ...this.state,
            autoComplete: [
                ...this.state.addressItems.map(item => item.name).filter(name => name.indexOf(value) >= 0)
            ],
        });
    };

    fetchAddressItems() {
        ContractDataController.callSmartContract("get", "", this.updateAddressItems.bind(this));
    }

    updateAddressItems(tx) {
        this.setState({
            ...this.state,
            addressItems: JSON.parse(tx.result).addressItems,
            // isLoading: false,
        });
    }

    onAddModalOpen() {
        this.setState({
            ...this.state,
            isOpenAddModal: true,
        });
    }

    onAddModalClosed() {
        this.setState({
            ...this.state,
            isOpenAddModal: false
        });
    }

    render() {
        const styles = {
            autoComplete: {
                marginLeft: "20px"
            },
            floatingActionButton: {
                position: 'fixed',
                left: '20px',
                bottom: '20px',
            },
        }
        return (
            <div style={{minHeight: "600px"}}>
                <AutoComplete
                    style={styles.autoComplete}
                    hintText="Search Name"
                    dataSource={this.state.autoComplete}
                    onUpdateInput={this.handleUpdateInput.bind(this)}
                    value={this.state.searchInput}
                    onChange={this.onSearchInputChanged.bind(this)}
                />
                {this.state.addressItems &&
                    this.state.addressItems
                        .filter(addressItem => addressItem.name.indexOf(this.state.searchInput) >= 0)
                        .map((addressItem, index) => <AddressItem item={addressItem} key={index}></AddressItem>)
                }
                <FloatingActionButton style={styles.floatingActionButton} onClick={this.onAddModalOpen.bind(this)}>
                    <ContentAdd />
                </FloatingActionButton>
                <AddAddressDialog isOpenModal={this.state.isOpenAddModal} closeListener={this.onAddModalClosed.bind(this)} />
            </div>
        );
    }
}

export default MainView;