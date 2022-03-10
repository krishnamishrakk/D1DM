/function
// let a=10;
// let b= 5;
// let addition=a+b;
// console.log(addition);
// function add(){
 //   console.log(a+b);
//
// addTwoNumbers(12,3);
// addTwoNumbers(100, 5);
// function addTwoNumbers(a,b){
//     console.log(a+b);

//return statement
//


//function which exits only in js
// const add =function(){
//     console.log("value")
// }

// var x = 10

// function a() {
//     var y = 20
//     function b() {
//         console.log(x, y)
//     }
//     b()
// }
// a()

// const arr = [];// empty 
// console.log("arr",arr);
// push , pop shipt, unshipt

// let values=  [ "a", "b","krishna", "c", "d" , 4.4,"e"];

//  console.log(values);
//  values.push(5);
//  console.log(values);
//  values.pop;
//  console.log(values);
//  //remove first element
//  values.shift();
//  console.log(values);
//  values.unshift("a");
//  console.log(values);

//  function countString (arr){
//     let count = 0;
//     let tempArr = [ 1,2];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (typeof(element)==="string") count++;
//         // if (typeof(element)==="string") tempArr.push(element)
//     }
//     return tempArr;
// }

// const result = countString(["a", "b", "c", 1, 3, 5]);
// console.log(result);
 let arr = [1,2,3,3,4,4];
 //some and every
 const value1 = arr.some(element => element>2);
 const value2 = arr.every(elemen t=> element>2);
 console.log(value1, value2);//true false
