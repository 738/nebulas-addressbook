var Stubs = require("./contractStubs");
let LocalContractStorage = Stubs.LocalContractStorage;
let Blockchain = Stubs.Blockchain;
let TestMap = Stubs.TestMap;

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
        LocalContractStorage.defineMapProperty(this, "user", {
            parse: function (str) {
                return new User(str);
            },
            stringify: function (obj) {
                return obj.toString();
            }
        });
    }

    init() {

    }

    save(address, name) {
        if (address === '') throw new Error("Argument Invalid: empty address");
        if (name === '') throw new Error("Argument Invalid: empty name");
        var userAddress = Blockchain.transaction.from;
        var user = this.user.get(userAddress) || new User();
        user.userAddress = userAddress;
        user.addressItems.push({address, name});
        this.user.set(userAddress, user);
        return user;
    }

    edit(address, newName) {
        if (address === '') throw new Error("Argument Invalid: empty address");
        if (newName === '') throw new Error("Argument Invalid: empty newName");
        var userAddress = Blockchain.transaction.from;
        var user = this.user.get(userAddress);
        if (user === undefined) throw new Error("Error: There is no content");
        for (var item of user.addressItems) {
            if (item.address === address) {
                item.name = newName;
                this.user.set(userAddress, user);
                return user;
            }
        }
        throw new Error("ERROR: There is no address");
    }

    delete(address) {

    }

    addFavorite(address) {

    }

}

module.exports = AddressBookManager;