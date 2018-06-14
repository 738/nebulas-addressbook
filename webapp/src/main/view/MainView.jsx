import React from 'react';
import AddressItem from '../../component/AddressItem';
import AutoComplete from 'material-ui/AutoComplete';

class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            addressItems: [{
                name: "지준우",
                address: "n1YDQxpxSf7mDiFCimh2cCSg1B3sbAShAeB",
                isFavorite: false,
            },
            {
                name: "신중협",
                address: "n1aaPt9QzH9uTZ6FPfg2SENLapFdwmutmtC",
                isFavorite: false,
            },
            {
                name: "박보선",
                address: "n1Ry1HRT39EtXtk6XHSzUUhNe5k8Q9zmix1",
                isFavorite: false,
            },
            {
                name: "안철수",
                address: "n1XXXxpxSf7mDiFCimh2cCSg1B3sbAShAeA",
                isFavorite: false,
            },
            {
                name: "지윤우",
                address: "n1XXYxpx123mDiFCimh2cCSg1B3sbAShAeA",
                isFavorite: false,
            }],
            autoComplete: [],
        }
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