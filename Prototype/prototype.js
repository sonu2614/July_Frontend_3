// // Inheritance is like one object trying to access
// //      properties & methods of another object.

// let arr=['1','2'];

// let obj ={
//     nam:'pc',
//     city:'blr',
//     getIntro:function(){
//         console.log(this.nam + ' from '+ this.city);
//     }
// }

// //whenever we create an object, js engine automatically 
// //  attaches your object with hidden properties & methods.
// //  These are the methods you can access by just doing obj.

// function test(){
//     console.log('test');
// }

// //arr.__proto__ -> Array.prototype
// //arr.__proto__.__proto__ -> Object.prototype
// //Array was formed via Object

// //child instance ->__prototype__
// //parent class -> prototype obj(hidden properties)

// let str='test';

let obj1={
    nam:'pc',
    city:'delhi',
    age:23,
    country:'india',
    getIntro(){
        console.log(this.nam, ' is from ',this.city );
        return true;
    }
}

let obj2={
    nam:'prikshit',
    city:'Blr',
}

obj2.__proto__=obj1;

//pc is from Delhi
//prikshit is from delhi