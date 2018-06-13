import React from 'react';
import AddressItem from '../../component/AddressItem';
import AutoComplete from 'material-ui/AutoComplete';

class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addressItems: [{
                name: "지준우",
                address: "n1YDQxpxSf7mDiFCimh2cCSg1B3sbAShAeA",
                isFavorite: false,
            },
            {
                name: "신중협",
                address: "n1YDQxpxSf7mDiFCimh2cCSg1B3sbAShAeA",
                isFavorite: false,
            },
            {
                name: "박보선",
                address: "n1YDQxpxSf7mDiFCimh2cCSg1B3sbAShAeA",
                isFavorite: false,
            },
            {
                name: "황규진",
                address: "n1YDQxpxSf7mDiFCimh2cCSg1B3sbAShAeA",
                isFavorite: false,
            }],
            autoComplete: [],
        }
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
                />
                {this.state.addressItems.map((addressItem, index) => <AddressItem item={addressItem} key={index}></AddressItem>)}
            </div>
        );
    }
}

export default MainView;