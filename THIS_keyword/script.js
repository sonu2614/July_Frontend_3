// Today's topic is THIS keyword

/*
console.log(this);
function test(){
    console.log('test');
}

window.test();
test();
*/

//IMPLICIT BINDING:-->
// implicit binding is applied when you invoke a functin
// in an object using (.) notation .THIS keyword 
//in such case will point towards the object.

// THIS keyword is used to refer something like an object.
// what is value of THIS keyword will depend on the 
//context we are in.


/*
console.log(this);
function test(){
    console.log(this)
}

window.test();
test();
*/ 


/*
let obj ={
    a:10,
    test(){
        console.log(this)
        //we are printing THIS keyword
    },
};

obj.test();
*/

/*
let obj ={
    a:10,
    test(){
        let a=5;
        let b=10;
        console.log(a+b);
        console.log(this)
    },
};

obj.test();
*/

// //test();


/*
this.a=5;
console.log(a)          //>> 5
*/

/*
this.a=5;
function getParam(){
    console.log(this.a)
}
getParam();         //>> 5
*/

/*
this.a=5;
const getParam=() => {
    console.log(this.a);
}
getParam();         //>>5
*/

/*
this.name='pc';
let user={
    name:'Prikshit',
    age:23,
    getDetails(){
        console.log(this.name);
    }
}
user.getDetails();          //>>Prikshit
*/

/*
this.name='pc';
let user={
    // nam:'Prikshit',
    age:22,
    getDetails(){
        console.log(this.name);
    }
}
user.getDetails();          //>>undefined
*/

/*
let user={
    nam:'Prikshit',
    age:22,
    childObj:{
        newName:'pc',
        getDetails(){
            console.log(this.newName, 'and', this.nam);
        }
    }
}
user.childObj.getDetails();         //>>pc and undefined
*/

/*
let user={
    nam:'Prikshit',
    age:22,
    getDetails:() => {
        console.log(this);
    }
}
user.getDetails();          //Window {window: Window, self: Window, document: document, name: 'pc', location: Location, …}
*/

/*
let user={
    name:'Prikshit',
    age:23,
    getDetails() {
        //the this inside my arrow fn
        //will point towards this inside
        //outer normal fn
        console.log(this);
        const nestedArrow = () => console.log(this);
        nestedArrow();
    }
}
user.getDetails();      //>{name: 'Prikshit', age: 23, getDetails: ƒ}
                        //{name: 'Prikshit', age: 23, getDetails: ƒ}
*/

/*
const user = {
    firstName:'prakshit',
    getName(){
        const firstName='pc';
        return this.firstName;
    }
}
console.log(user.getName());            //>>prakshit
*/

/*
const user={
    nam:'pc',
    logMessage(){
        console.log(this.nam);
    }
}
setTimeout(user.logMessage,1000)            //>>undefined
*/

/*
const user={
    nam:'pc',
    logMessage(){
        console.log('test');
        console.log(this.nam);
    }
}
user.logMessage();                 //>>test
                                  //>>pc
*/

/*
const user={
    nam:'pc',
    logMessage(){
        console.log('test');
        console.log(this.nam);
    }
}
setTimeout(user.logMessage,1000)        //>>test
                                        //>>undefined
*/

/*
const user={
    nam:'pc',
    logMessage(){
        console.log('test');
        console.log(this.nam);
    }
}
setTimeout(() => {
    user.logMessage();
},1000)                     //>>test
                            //>>pc
*/

