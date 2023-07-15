// Today's topic is THIS keyword

// console.log(this);
// function test(){
//     console.log(this)
// }

// window.test();
// test();

// implicit binding is applied when you invoke a functin in an object using (.) notation .THIS keyword in such case will point towards the object.

// THIS keyword is used to refer something like an object . what is value of THIS keyword will depend on the context we are in.

// let obj ={
//     a:10,
//     test(){
//         console.log(this)
//     },
// };

// obj.test();

// //test();

// let obj ={
//     a:10,
//     test(){
//         let a=5;
//         let b=10;
//         console.log(a+b)
//         console.log(this)
//     },
// };

// obj.test();


// this.a=5;
// console.log(a)

// this.a=5;
// function getParam(){
//     console.log(this.a)
// }
// getParam();

// this.a=5;
// const getParam=() => {
//     console.log(this.a);
// }
// getParam();


// this.name='pc';
// let user={
//     name:'Prikshit',
//     age:23,
//     getDetails(){
//         console.log(this.name);
//     }
// }
// user.getDetails();

// let user={
//     name:'Prikshit',
//     age:23,
//     childObj:{
//         newName:'pc',
//         getDetails(){
//             console.log(this.newName, 'and', this.name);
//         }
//     }
// }
// user.childObj.getDetails();

// let user={
//     name:'Prikshit',
//     age:23,
//     getDetails:() => {
//         console.log(this );
//     }
// }
// user.getDetails();

//  


// let user={
//     name:'Prikshit',
//     age:23,
//     getDetails() {
//         console.log(this);
//         const nestedArrow = () => console.log(this);
//         nestedArrow();
//     }
// }
// user.getDetails();

// const user = {
//     firstName:'prakshit',
//     getName(){
//         const firstName='pc';
//         return this.firstName;
//     }
// }
// console.log(user.getName());

// const user={
//     nam:'pc',
//     logMessage(){
//         console.log(this.nam);
//     }
// }
// setTimeout(user.logMessage,1000)

// const user={
//     nam:'pc',
//     logMessage(){
//         console.log('test');
//         console.log(this.nam);
//     }
// }
// setTimeout(() => {
//     user.logMessage();
// },1000)
