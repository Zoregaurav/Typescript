// export {};

// ts->js

 

// let a :number=10;

// console.log(a);

// let a=10;
// let b=30;

// console.log(a,b);


//js:
// function add(num1,num2){
//     return num1+num2;
// }

// add(2,3);
//add("2","3");


//Ts: 
//ts ke code ko js ke code mein transpile karta hain.....

//Ts:
// function add(num1:number,num2:number){
//     return num1+num2;
// }

// add(2,3);
//add("2","3");


// let a:number=10;
// console.log(a);
//    |
//    |  Transpile:
//    |
// let a=10;
// let b=30;
// console.log(a);


// let response=await fetch("");

// let data=await response.json();

// a=data;

// user ka input le raha hu a ke andar : a>>10
//Ts run time ke error ko nahi pakad sakta....
//static error ko pakdta hain
//type error ko pakdta hain.....



// console.log(a);

// let b=30;

// let a:any="Rohit";

// a=20;
// a="mohan";


//Array:

// let arr:number[]=[10,20,30,40,50];

// arr.push(90);

// console.log(arr);

// let arr:any[]=[10,20,30,40,50];

// arr.push(11);
// arr.push("Rohit");



// let arr: (string | number)[] = [10, 20, 30, "Rohit", 9];

// console.log(arr);



//object:


// let user: {
//   name: string;
//   age: number;
//   isAdmin: boolean;
// } = {
//   name: "Rohit",
//   age: 20,
//   isAdmin: true,
// };


// user.city = "kotdwar"; error but this alllowed in js...



// function

// function add(num1:number,num2:number){
//     return num1+num2;
// }

// add(2,3);
// add(7,3);

// add("10","11");


// user.city="kotdwar";



// function add(num1:number,num2:number):number{
//      return num1+num2;
// }


// add(2,3);
// add(7,3);
// add("10",11); error ayega..
// console.log(add(2,3));



// function add(num1:number,num2:number=0,num3:number=0):number{

//       return num1+num2+num3;
// }

// console.log(add(2,3));
// console.log(add(2,3,4));



// function add(...nums:number[]){
//     return nums.reduce((num,sum)=>num+sum,0);
// }


// console.log(add(2,3));
// console.log(add(2,3,4));


// let a;

// a=10;
// a="Rohit";
// console.log(a);

// let a:any="Rohit";

// console.log(a.toFixed())

// console.log(a.push(10));


//unknown:

// let a:unknown="Rohit";


// a=10;
// a=true;


// console.log(a.push(10)); error


// if(typeof a==="string")
//     console.log(a.toUpperCase());
//  if(typeof a==="number")
//     console.log(a.toFixed(2));



//optional:

//  let person:{name:string;age:number;city?:string}={
//         name:"Rohit",
//         age:20,
//         city:"kotdwar"
//  }

//  console.log(person);



// type person={name:string,age:number,city:string};
// type address={city:string,picode:number,state:string};

//combine above two type:
//type newPerson=person & address;


// let p1:person={
//     name:"Rohit",
//     age:10,
//     city:"mumbai"
// }


// let p2:person={
//     name:"gaurav",
//     age:23,
//     city:"pune"
// }


// let p3:newPerson={
//     name:"Mohan",
//     age:19,
//     city:"Kashmir",
//     pincode:1233456,
//     state:"Haryana"
// }

// console.log(p1,p2);



//  union:

// let id:(number | string)=101;

// id:"201";

// console.log(id);




//h.w:

//Typescript ke andar error:uske related js file generate na ho...

//export ka meaning....