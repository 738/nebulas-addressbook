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
        this.isFavorite = obj.isFavorite || false;
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
        // address가 원래 있다면 중복 에러
        for (let item of user.addressItems) {
            if (item.address === address) throw new Error("Address is already existed");
        }
        user.addressItems.push({address, name, isFavorite: false});
        this.user.set(userAddress, user);
        return user;
    }

    get() {
        var userAddress = Blockchain.transaction.from;
        var user = this.user.get(userAddress);
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
        if (address === '') throw new Error("Argument Invalid: empty address");
        var userAddress = Blockchain.transaction.from;
        var user = this.user.get(userAddress);
        if (user === undefined) throw new Error("Error: There is no content");
        for (var i = 0; i < user.addressItems.length; i++) {
            if (user.addressItems[i].address === address) {
                user.addressItems.splice(i, 1);
                this.user.set(userAddress, user);
                return user;
            }
        }
        throw new Error("ERROR: There is no address");
    }

    addOrRemoveFavorite(address) {
        if (address === '') throw new Error("Argument Invalid: empty address");
        var userAddress = Blockchain.transaction.from;
        var user = this.user.get(userAddress);
        if (user === undefined) throw new Error("Error: There is no content");
        for (var item of user.addressItems) {
            if (item.address === address) {
                item.isFavorite = !item.isFavorite;
                this.user.set(userAddress, user);
                return user;
            }
        }
        throw new Error("ERROR: There is no address");
    }

}

module.exports = AddressBookManager;