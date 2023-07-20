function BankAccount(customerName,balance){
    this.customerName=customerName;
    this.accountNumber=Math.floor(Math.random()*10000000)
    this.balance=balance;

}
//console.log(BankAccount.prototype);

BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;
}

BankAccount.prototype.withdrawal=function(amount){
    this.balance-=amount;
}


function SavingAccount(customerName,balance){
    this.customerName=customerName;
    this.accountNumber=Math.floor(Math.random()*10000000)
    this.balance=balance;
}
SavingAccount.prototype.deposit=function(amount){
    this.balance+=amount;
}





