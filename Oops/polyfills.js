// const nums=[1,2,3,4];

// const nums2=[10,80,46,19,25,1];

// //map --> returns a new array

// // const multiByThree=nums.map((currentElement,index,thirdThing)=>{
// //     console.log('currentElement ->',currentElement);
// //     console.log('index ->',index);
// //     console.log('thirdThing ->',thirdThing);
// //     return currentElement*3;
// // })


// //taking one element and returning a new element
// const callBackF=(currentElement)=>{
//     // console.log('currentElement ->',currentElement);
//     // console.log('index ->',index);
//     return currentElement*3;
// };

// // Array.prototype.test=function(){ //it is the function that print This keyword
// //     console.log(this);
// // }


// const multiByThree=nums.map(callBackF);

// // console.log(nums);
// // console.log(multiByThree);



// Array.prototype.myMap=function(callBackFn){
//     let newArr=[];
//     for(let i=0;i<this.length ;i++){
//         newArr.push(callBackFn(this[i], i));// I have to push
//         //the eventual result of my call back inside
//         //my new array
//     }
//     return newArr;
// };

// // //Array.prototype is coming from js engine
// // //JS engine is part of browser
// // //if your browser is outdated

// const multiByThree2=nums.myMap((currentElement,index)=>{
//     console.log('currentElement ->',currentElement);
//     console.log('index ->',index);
//     return currentElement*3;
// });

// console.log(multiByThree2);

// // Array.prototype.sonuFn=function(){
// //     console.log(this);
// //     return 'sonu';// will throw undefined if not written any thing here.
// // }

// // console.log(nums.sonuFn());
// // console.log(nums2.sonuFn());

// // console.log(Array.prototype);

/*
const num=[7,14,28,35];

const callBack=(currentElement,index)=>{
    return currentElement*3;
}

Array.prototype.smritiFn=function(callBack){
    let newArray=[];
    for(let i=0;i<this.length;i++){
        let element=callBack(this[i],i);
        newArray.push(element)
    }
    return newArray;
}

const multiByFour=num.smritiFn((currentElement,index)=>{
    // console.log('currentElement ->',currentElement);
    // console.log('index ->',index);
    console.log(currentElement,index);
    return currentElement*4;
});

console.log(multiByFour);
console.log(num);

*/

/*
//                      FILTER FUNCTION
const nums=[1,2,3,4];

const moreThanTwo=nums.filter((currentElement)=>{
    return currentElement>1;
})

console.log(moreThanTwo);
*/

/*

const nums=[1,2,3,4];


Array.prototype.myfilter=function(callBack){
    let newArr=[];
    for(let i=0;i<this.length;i++){
        if(callBack(this[i],i)){
            newArr.push(this[i]);
        }
    }
    return newArr;
}


const moreThanTwo=nums.myfilter((currentElement,index)=>{
    return currentElement>1;
})


console.log(moreThanTwo);


*/

/*

//                      REDUCE FUNCTION
const nums=[10,11,12,13]; //into single number

// [{},{},{},{}] //into single object

//array of number -> a single number
// let sum=0;  //initial value
// for(let i=0;i<nums.length;i++){
//     sum+=nums[i]; //this is my logic // callback
// }

//reduce is a method.
const initialValue=0;
const sum=nums.reduce((accumulator,currentElement,index)=>{
    console.log('iteration ---->> ',index+1);
    console.log('accumulator -> ',accumulator);
    console.log('currentElement -> ',currentElement);
    return accumulator+currentElement;//accumulator is sum so far
},initialValue);

console.log('final sum ->',sum);

//accumulator at any point is sum so far +initialValue

*/

/*
const num=[1,2,3,4];
const initialVal=0;
const Sum=num.reduce((accumulator,currEle,i)=>{
    console.log('iteration ---->> ',i+1);
    console.log('accumulator -> ',accumulator);
    console.log('currentElement -> ',currEle);
    return accumulator+currEle;//accumulator is sum so far
});

console.log('final sum ->',Sum);
*/

/*
const nums=[11,12,13,14];
initialValue=5;

Array.prototype.myReduce=function (callback,initialValue){
    //initialValue->value given by user || undefined
    var accumulator=initialValue;  //undefined || value given by user
    for(let i=0;i<this.length;i++){
        // if(accumulator===undefined){
        //     accumulator=this[i];
        // }
        accumulator = accumulator!==undefined ? callback(accumulator,this[i],i):this[i];
    }
    return accumulator;
}

const callback=(accumulator,currentElement,index)=>{
    console.log('iteration ---->> ',index+1);
    console.log('accumulator -> ',accumulator);
    console.log('currentElement -> ',currentElement);
    return accumulator+currentElement;//accumulator is sum so far
}

const sum=nums.myReduce(callback,0);
console.log(sum);

*/

//                  FLAT FUNCTION   

// let arr=[1,2,3,4];

// let arr1=[1,[99,3],[4,5],6];

// let arr3=[1,[99,[1,2]],[4,5],6]

// console.log(arr3.flat(2));

const arr1=[[],[1,2],[3,4],[5,6,[7,8],9],[10,11,12]];
// console.log(arr1.flat(2));
function customFlat(arr,depth=1){
    let result=[];

    arr.forEach(element => {
        if(Array.isArray(element) && depth>0){
            const miniArray=customFlat(element,depth-1);
            result.push(...miniArray);
        }
        else{
            result.push(element)
        }
    });
    return result;
}

const flattenedArr=customFlat(arr1,10)
console.log(flattenedArr);

