import React from 'react';
import AddressItem from '../../component/AddressItem';
import AutoComplete from 'material-ui/AutoComplete';
import ContractDataController from '../../main/datacontroller/ContractDataController';

class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            addressItems: [],
            autoComplete: [],
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


    render() {
        const styles = {
            autoComplete: {
                marginLeft: "20px"
            }
        }
        return (
            <div>
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
            </div>
        );
    }
}

export default MainView;