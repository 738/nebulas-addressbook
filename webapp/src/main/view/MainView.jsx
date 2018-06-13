import React from 'react';
import AddressItem from '../../component/AddressItem';

class MainView extends React.Component {

    render() {
        var addressItem = {
            name: "지준우",
            address: "n1YDQxpxSf7mDiFCimh2cCSg1B3sbAShAeA",
            isFavorite: false,
        }
        return (
            <AddressItem item={addressItem}></AddressItem>
        );
    }
}

export default MainView;