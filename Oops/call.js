/*
let obj1={
    nam:'pc',
    
    
}

function sayHello(arg1,arg2){
    console.log(this,arg1,arg2);
}
let obj2 = {
    nam:'prikshit',
}
// sayHello('test1','test2');

// //to be bind with obj object;
// sayHello.call(obj,'poijhgv','jhgfdsdfgh');

// sayHello('test1','test2');

// console.log(sayHello);

// obj.sayHello();

sayHello.call(obj1,'sonu','raj')
//sayHello();
//console.log(obj);
*/
// Function.prototype.myCall=function(obj,...args){//rest operator
//     obj.fn
// }

// function test(a,...args){
//     console.log(a);
//     console.log(args);
// }

// test(70,'test1','test2')
/*
Function.prototype.test=function(){
    console.log(this);
}

function abc(){
    //do some stuff
}
*/

/*
let obj1={
    nam:'pc',
    fn:this, //this keyword is following line #61 &  #62
    
}

let obj2 = {
    nam:'prikshit',
}

sayHello.call(obj1,'testing1','test2');

function sayHello(arg1,arg2){
    console.log(this,arg1,arg2);
}

Function.prototype.myCall=function(obj1,...args){//rest operator
    //any this keyword will be storing definition of
    //function with which myCall is called
    obj1.fn=this;
    return obj1.fn(...args);
}
*/

/*

let obj1 = {
    nam:'pc',
}

function sayHello(arg1,arg2){
    console.log(this,arg1,arg2);
}
let obj2 = {
    nam:'prikshit',
}

//sayHello(); //window, undefined, undefined

//sayHello('test1','test2') // window 'test1''test2'

//sayHello.call(obj1,'testing-1','testing-2') //{nam: 'pc'} 'testing-1' 'testing-2'

//sayHello.call(obj2,'testing-1','testing-2')// {nam: 'prikshit'} 'testing-1' 'testing-2

//sayHello.call('test1','test2') //String {'test1'} 'test2' undefined

Function.prototype.myCall=function(obj1,...args){

}

function test(...args){
    console.log(args);
}

//test(); //[]
//test(1); //[1]
//test('testing-1','testing-2','test') //(3) ['testing-1', 'testing-2', 'test']

function test1(a,...args){
    console.log(a);
    console.log(args);
}



//test1(70,'test1','test2')   //70
                            //(2) ['test1', 'test2']

Function.prototype.test=function(){
    console.log(this);
}

function abc(){
    //do some dtuff
}
*/

/*

let obj1 = {
    nam:'pc',
}
// let obj1 = {
//     nam:'pc',
//     fn:this , 
// }

function sayHello(arg1,arg2){
    console.log(this,arg1,arg2);
}
let obj2 = {
    nam:'prikshit',
}

Function.prototype.myCall=function(obj,...args){//rest operator
    //any this keyword will be storing definition of
    //function with which myCall is called
    obj.fn=this;
    return obj.fn(...args); //spread operstor
    
}

sayHello.myCall(obj1); //{nam: 'pc', fn: ƒ} undefined undefined

sayHello.myCall(obj1,'test1','test2'); //{nam: 'pc', fn: ƒ} 'test1' 'test2'
*/
let obj1 = {
    nam:'pc',
}

function sayHello(arg1,arg2){
    console.log(this,arg1,arg2);
}

Function.prototype.myCall=function(obj,...args){
    obj.fn=this;
    const res= obj.fn(...args); //spread operstor
    delete obj.fn;
    return res;
    
}
sayHello.myCall(obj1,'test1','test2'); //{nam: 'pc', fn: ƒ} 'test1' 'test2