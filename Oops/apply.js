let obj={
    nam:'pc',
    
    
}

function sayHello(arg1,arg2,arg3){
    console.log(this,arg1,arg2,arg3);
}

// //to be bind with obj object;
// sayHello.apply(obj,[]);

//sayHello.call(obj,'test1','test2');

let dbArray=['test1','test2','test3'];

sayHello.apply(obj,dbArray);

sayHello.call(obj,dbArray[0],dbArray[1],dbArray[2]);

