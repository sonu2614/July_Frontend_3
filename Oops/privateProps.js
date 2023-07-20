class BankAccount{
    customerName;
    accountNumber;
    #balance=0;
    constructor(customerName,balance){
        this.customerName=customerName;
        this.accountNumber=Math.floor(Math.random()*10000000000);
        this.#balance=balance;
    }
    // deposit(amount,pin){
    //     //he counts money
    //     //he checks currency authen
    //     if(pin==='1234'){
    //         this.#balance+=amount;
    //     }
    //     else{
    //         console.log('wrong pin');
    //     }
    // }

    deposit(amount){
        this.#balance+=amount;
    }
    withDraw(amount,atmPin){
        if(atmPin==='7477' && amount<this.#balance){
            this.#balance-=amount;
        }
    }
    setBalance(amount){     //setter function
        this.#balance=amount;
    }

    // set balance(amount){
    //     this.#balance=amount;
    // }

    getBalance(atmPin){     //getter function
        if(atmPin==='7477'){
            return this.#balance;
    }
        }

     get balance(){ //better way of writting getter
        return this.#balance;
    }
    get name(){
        return this.#customerName;
    }
}
const pcAccount=new BankAccount('pc',500);


// pcAccount.deposit(900000,'1234');
// pcAccount.setBalance(10);
// pcAccount.withDraw(100,'7477')

console.log(pcAccount.balance);
console.log(pcAccount.getBalance('7477'));



// console.log(pcAccount.getBalance());

pcAccount.balance=1000;
console.log(pcAccount.balance);
console.log(pcAccount);