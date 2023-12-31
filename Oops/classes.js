class BankAccount{
    customerName;
    accountNumber;
    balance=0;
    constructor(customerName,balance){
        this.customerName=customerName;
        this.accountNumber=Math.floor(Math.random()*100000000)
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
    }
    withdrawal(amount){
        this.balance-=amount;
    }
}
console.log(BankAccount.prototype);
//prototype for parent class

const pcAccount=new BankAccount('pc',500)
console.log(pcAccount.__proto__);
//.__proto__ for child instance

//__proto__ of child instance will point towards 
//      prototype of parent class.

// const pcAccount=new BankAccount('pc',500);
// pcAccount.deposit(90000);
// pcAccount.withdrawal(1);
// console.log(pcAccount);


// const sonuAccount=new BankAccount('sonu',10000)
// sonuAccount.deposit(3575);
// console.log(sonuAccount);