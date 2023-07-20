let obj={
    nam:'pc',
    
    
}

function sayHello(arg1,arg2){
    console.log(this,arg1,arg2);
}
// sayHello('test1','test2');

// //to be bind with obj object;
// sayHello.call(obj,'poijhgv','jhgfdsdfgh');

// sayHello('test1','test2');

// console.log(sayHello);

// obj.sayHello();

sayHello.call(obj,'sonu','raj')
//sayHello();
//console.log(obj);