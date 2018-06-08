class User {
    constructor(str) {
        let obj = str ? JSON.parse(str) : {};
        this.userAddress = obj.userAddress || '';
        this.addressItems = obj.addressItems || [];
    }

    toString() {
        return JSON.stringify(this);
    }
}

class AddressItem {
    constructor(str) {
        let obj = str ? JSON.parse(str) : {};
        this.address = obj.address || '';
        this.name = obj.name || '';
    }

    toString() {
        return JSON.stringify(this);
    }
}

class AddressBookManager {
    constructor() {

    }

    init() {

    }

    save(address, name) {

    }

    edit(address, newName) {

    }

    delete(address) {

    }

    addFavorite(address) {

    }

}

module.exports = AddressBookManager;