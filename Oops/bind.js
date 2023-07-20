let obj1={
    nam:'pc',
}

// let obj2={
//     nam:'sonu',
// }

function sayHello(arg1,arg2){
    console.log(this.nam,arg1,arg2);
}

// const updatedHello=sayHello.bind(obj1);
// console.log(updatedHello);
// //func.bind=>will return the function which is 
// //having context of obj.

// updatedHello('test1','test2');
// // console.log(obj);

//sayHello('test1');

sayHello();

sayHello(obj1,'fgh','asdfg');

sayHello.call(obj1,'call-1','call-2');

sayHello.apply(obj1,['apply-1','apply-2']);
