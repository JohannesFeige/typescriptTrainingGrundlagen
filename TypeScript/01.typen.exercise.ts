(function() {
    let bankAccount = {
        money: 2000,
        deposit(value) {
            this.money += value;
        }
    };
    let myself = {
        name: 'Johannes',
        bankAccount: bankAccount,
        hobbies: ['Diving', 'Cooking']
    };
    myself.bankAccount.deposit(3000);
    console.log(myself);
})();
