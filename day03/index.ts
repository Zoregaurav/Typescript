// export{};

// //callback function

// const add:(a:number,b:number)=>number=(a,b)=>a+b;
// const mul:(a:number,b:number)=>number=(a,b)=>a*b;
// const sub:(a:number,b:number)=>number=(a,b)=>a-b;
// const div:(a:number,b:number)=>number=(a,b)=>a*b;

// function calculate(a: number, b: number, callback: cal): number {
//   return callback(a, b);
// }

// const square:(a:number)=>number=(a)=>a*a;

// console.log(calculate(4,6,add));
// console.log(calculate(4,6,sub));
// console.log(calculate(4,6,div));
// console.log(calculate(4,6,square));

// //or better version mein aise likhta tha....

// type cal=(a:number,b:number)=>number;

//function overloading:

// function process(val:string):string;
// function process(val:number):number;

// function process(val:string |number):string |number{

//    if(typeof val==="string")
//       return val.toUpperCase();
//    else
//       return val*val;
// }

// const answer=process("rohit");
// const secondanswer=process(20);

// secondanswer*secondanswer;
// console.log(answer);

// const student = {
//   name: "Rohit",
//   age: 10,
//   rollNumber: 20,
// };

// const teacher = {
//   name: "Mohit",
//   age: 20,
//   salary: 500,
// };

// function processData(val:{name:string,age:number}){

//      if("rollNumber" in val){
//       console.log(val.rollNumber);
//      }
//      else if("salary" in val){
//       console.log(val.salary);
//      }
// }

// processData(student);
// processData(teacher);

// // instance of

// class Dog{
//    bark(){
//       console.log("Bhau bahu bahu");
//    }
// };

// class Cat{
//     meow(){
//       console.log("meow,meow,meow");
//     }
// }

// function animalSound(animal:Dog|Cat){
//    //if animal type:animal.bark();
//    //if animal type:animal.bark();

//     if(animal instanceof Dog){
//       animal.bark();
//     }else if(animal instanceof Cat){
//       animal.meow();
//     }
// }

// const doggy=new Dog();
// const  billi=new Cat();

// animalSound(doggy);
// animalSound(billi);

//never:

// function assertNever():never{
//    //

//    throw new Error(`Unhandled case`);
// }

//state.status :loading,success.error

//Assertion:

//Generics:
//function overloading..

// function getFirst(arr:string[] | number[]):string|number{
//     return arr[0];
// }

// function getFirst<T>(arr:T[]):T{
//        return arr[0];
// }

// const answer1=getFirst([10,20,30]);
// const answer2=getFirst(["Amir","Kartik","Vijay"]);

// function processData<T>(val: T): T {
//   //    if(typeof val==="string")
//   //       return val.toUpperCase();
//   //    else
//   //       return val*val;

//   if (typeof val === "string") {
//     return val.toUpperCase();
//   } else if (typeof val === "number") {
//     return val * val;
//   }
// }

// let answer1=processData("kartik");
// let answer2=processData(14);

// let a=10;
// let b=20;


//extends:

// how to handle extends:


// type Person={name:string};
// type Student={name:String,age:number};


// function getName<T extends{name:string}>(value:T):T{
//    console.log(value.name);
//    return value;
// }

// const item=getName({name:"Rohit",age:23});
// console.log(item);


//key of properties:


// const user={
//    name:"Rohit",
//    age:20,
//    salary:200
// }

// function getProperty(obj,key){
//    return obj [key];
// }


// console.log(getProperty(user,"isAdmin"));




// type Student={name:string,age:number,city:string};
// type StudentKey=keyof Student;


// const student={name:"Rohit",age:25,city:"Delhi"};


// function getProperty<T ,K extends keyof T>(obj:T,key:K):T[K]{

//       return obj[key]
//    }

 
//    const age=getProperty(student,"age");
//    const name=getProperty(student,"name");
   
 
  
class Student {
  name: string;
  age: number; 
   
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `I am${this.name}`;
  }
}

const obj1 = new Student("Rohit",10);




