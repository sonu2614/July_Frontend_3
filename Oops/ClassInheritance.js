class BankAccount{
    customerName;
    accountNumber;
    balance=0;
    constructor(customerName,balance){
        this.customerName=customerName;
        this.accountNumber=Math.floor(Math.random()*10000000000);
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
    }
}

class CurrentAccount extends BankAccount{
    transLimit;
    constructor(customerName,balance){
        super(customerName,balance);
        this.transLimit=50000;
    }
    buisnessLoan(amount){
        console.log(`you have been given ${amount} as loan`);
    }
}
class SavingAccount extends BankAccount{
    transLimit;
    constructor(customerName,balance){
        super(customerName,balance);
        this.transLimit=10000;
    }
    educationLoan(amount){
        console.log(`you have been given ${amount} as loan`);
    }
}

const sonuCurrentAccount=new CurrentAccount('sonu',60000);
console.log(sonuCurrentAccount);

const smritiSavingAccount=new SavingAccount('smriti',5000);
console.log(smritiSavingAccount);