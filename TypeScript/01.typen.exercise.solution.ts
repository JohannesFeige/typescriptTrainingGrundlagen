(function() {
    let bankAccount: BankAccount = {
        money: 2000,
        deposit(value) {
            this.money += value;
        }
    };

    let myself: MySelf = {
        name: 'Johannes',
        bankAccount: bankAccount,
        hobbies: ['Diving', 'Cooking']
    };

    myself.bankAccount.deposit(3000);

    console.log(myself);

    interface BankAccount {
        money: number;
        deposit: (v: number) => void;
    }

    interface MySelf {
        name: string;
        bankAccount: BankAccount;
        hobbies: string[];
    }
})();
