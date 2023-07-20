function BankAccount(bankName,customerName,balance ,){
    this.bankName=bankName;
    this.customerName=customerName;
    this.accountNumber=Math.floor(Math.random()*100000000000)
    this.balance=balance;

}
//console.log(BankAccount.prototype);

BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;
}

BankAccount.prototype.withdrawal=function(amount){
    this.balance-=amount;
}


function SavingAccount(bankName,customerName,balance,limit){
    // this.customerName=customerName;
    // this.accountNumber=Math.floor(Math.random()*10000000)
    // this.balance=balance;
    BankAccount.call(this,bankName,customerName,balance);
    this.transLimit=limit;
}
// SavingAccount.prototype.__proto__=Object.prototype;
SavingAccount.prototype.__proto__=BankAccount.prototype;
// SavingAccount.prototype.deposit=function(amount){
//     this.balance+=amount;
// }

SavingAccount.prototype.educationLoan=function(amount){
    console.log(`this much ${amount} is granted for educationLoan`);
}
// console.log(SavingAccount.prototype);
// console.log(SavingAccount.prototype.__proto__);
SavingAccount.prototype.__proto__=BankAccount.prototype;

const pcSavAcc=new SavingAccount('SBI','Sonu Kumar',2000,2000)
console.log(pcSavAcc);

pcSavAcc.deposit(10000);
console.log(pcSavAcc);

//SavingAccount prototype was inherting methods from
//  Object, instead of inherting things from Object
//  it should inherit methods from BankAccount

//we want to access all methods of bank a count. All
//  methods of bank account are stored in its prototype.
//  That's why we are now pointing towards 
//      BankAccount.prototype






