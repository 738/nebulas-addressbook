import React from 'react';
import AddressItem from '../../component/AddressItem';

class MainView extends React.Component {

    render() {
        var addressItems = [{
            name: "지준우",
            address: "n1YDQxpxSf7mDiFCimh2cCSg1B3sbAShAeA",
            isFavorite: false,
        },
        {
            name: "메이슨",
            address: "n1YDQxpxSf7mDiFCimh2cCSg1B3sbAShAeA",
            isFavorite: false,
        },
        {
            name: "김말숙",
            address: "n1YDQxpxSf7mDiFCimh2cCSg1B3sbAShAeA",
            isFavorite: false,
        },
        {
            name: "이말년",
            address: "n1YDQxpxSf7mDiFCimh2cCSg1B3sbAShAeA",
            isFavorite: false,
        }];
        return (
            <div>
                {addressItems.map(addressItem => <AddressItem item={addressItem}></AddressItem>)}
            </div>
        );
    }
}

export default MainView;