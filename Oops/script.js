function BankAccount(customerName,balance){
    this.customerName=customerName;
    this.accountNumber=Math.floor(Math.random()*10000000)
    this.balance=balance;

    // this.deposit=function(amount){
    //     this.balance+=amount;
    // }

    // this.withdrawal=function(amount){
    //     this.balance-=amount;
    // }
}

//console.log(BankAccount.prototype);
//BankAccount.prototype.test='test';

BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;
}

BankAccount.prototype.withdrawal=function(amount){
    this.balance-=amount;
}

const pcAccount=new BankAccount('pc',500)
//console.log(pcAccount);
pcAccount.deposit(1000);
console.log(pcAccount);


const surajAccount=new BankAccount('suraj',5000);
surajAccount.deposit(3216);
console.log(surajAccount);


// const pcAccounttemp={

// }


const sonuAccount=new BankAccount('sonu',9000);
sonuAccount.withdrawal(1000);
console.log(sonuAccount);


