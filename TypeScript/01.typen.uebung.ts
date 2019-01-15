enum ShippintMethod {
    Airborne,
    DHL,
    FedEx,
    UPS
}

const address = {
    city: 'Jesteburg',
    street: 'Itzenbütteler Str. 35',
    postalcode: '21266',
    shippingmethod: ShippintMethod.DHL
};

const contact = {
    constactid: '00b229b4-3d2c-439e-a643-e5118a912ef6',
    accountid: '07a8ab3b-4d0e-42e4-91f1-0e8040e22ebe',
    getAccount: function(accounts) {
        const accountid = this.accountid;
        return accounts.filter(function(x) {
            return x.accountid === accountid;
        });
    }
};

const account = {
    accountid: '07a8ab3b-4d0e-42e4-91f1-0e8040e22ebe',
    address: address,
    contact: contact
};

console.log({ account });
console.log('get account from empty array', contact.getAccount([]));
console.log('get account from exisiting accounts', contact.getAccount([account]));
