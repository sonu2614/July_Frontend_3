let obj={
    nam:'pc',
    
    
}

function sayHello(arg1,arg2){
    console.log(this,arg1,arg2);
}

const updatedHello=sayHello.bind(obj);
//func.bind=>will return the function which is having context of obj.

updatedHello('test1','test2');
// console.log(obj);

sayHello('test1');