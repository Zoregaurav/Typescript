// export{};

// //callback function

// const add:(a:number,b:number)=>number=(a,b)=>a+b;
// const mul:(a:number,b:number)=>number=(a,b)=>a*b;
// const sub:(a:number,b:number)=>number=(a,b)=>a-b;
// const div:(a:number,b:number)=>number=(a,b)=>a*b;

function calculate(a: number, b: number, callback: cal): number {
  return callback(a, b);
}

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

const student = {
  name: "Rohit",
  age: 10,
  rollNumber: 20,
};

const teacher = {
  name: "Mohit",
  age: 20,
  salary: 500,
};


function processData(val:{name:string,age:number}){

     if("rollNumber" in val){
      console.log(val.rollNumber);
     }
     else if("salary" in val){
      console.log(val.salary);
     }
}

processData(student);
processData(teacher);