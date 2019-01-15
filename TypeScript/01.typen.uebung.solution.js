// enum ShippingMethod {
//     Airborne,
//     DHL,
//     FedEx,
//     UPS
// }
// const address: address = {
//     city: 'Jesteburg',
//     street: 'Itzenbütteler Str. 35',
//     postalcode: '21266',
//     shippingmethod: ShippingMethod.DHL
// };
// const contact: contact = {
//     contactid: '00b229b4-3d2c-439e-a643-e5118a912ef6',
//     accountid: '07a8ab3b-4d0e-42e4-91f1-0e8040e22ebe',
//     getAccount: function(accounts) {
//         return accounts.filter((x: { accountid: any }) => x.accountid === this.accountid)[0];
//     }
// };
// const account: account = {
//     accountid: '07a8ab3b-4d0e-42e4-91f1-0e8040e22ebe',
//     address: address,
//     contact: contact
// };
// console.log({ account });
// console.log('get account from empty array', contact.getAccount([]));
// console.log('get account from exisiting accounts', contact.getAccount([account]));
// interface address {
//     city: string;
//     street: string;
//     postalcode: string;
//     shippingmethod: ShippingMethod;
// }
// interface contact {
//     contactid: string;
//     accountid: string;
//     getAccount: (accounts: account[]) => account;
// }
// interface account {
//     accountid: string;
//     address: address;
//     contact: contact;
// }
