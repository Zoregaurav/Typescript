
// TypeScript:


// Tuples-->

// export{};

// Array:

// let arr:(number|string)[]=[10,"Rohit"];

// console.log(arr);

 
// 0:string,1:number,2:boolean


//Tuples:

// let arr:[string,number,boolean,...string[]]=["Rohit",10,false];
// let arr:[string,number,boolean,...string[]]=[10,"rohit",true]; error
// console.log(arr);


//0.string ,1:number ,2:boolean no rule for  others 3,4,....


// arr.push("mohit");
// arr.push("sohan");
// arr[3]="soham";
// arr[4]


// Real-life example:


// function order():(string,number)[]{
//     return ["101abc",3287];
// };


// const orderStatus=order(); 

// console.log(`My order Id is : ${orderStatus[0]}`);

// console.log(`my order price is :${orderStatus[1]}`);



 
// Type Aliases:

// type Student={name:string,age:number,isPresent:boolean};


// let s1:Student={name:"Rohit",age:10,isPresent:true};

// const s2=s1;
// console.log(s2);



// type User={name:string,age:number};

// let u1:User=s1;

// console.log(u1);


// this is not allowed in ts:

// let u2:User={name:"Rohit",age:10,isPresent:true};



//  type Student={name:string,rollNumber:number,age:number,className:number};
//  type Teacher={name:string,age:number,salary:number,subject:string};
//  type Staff={name:string,age:number,salary:number,designation:string};

// type person={name:string,age:number};


//  function showProfile(p:person){
//        console.log(`Name: ${p.name} & age:${p.age}`);
//  }


// function showProfile(p:Student |Teacher |Staff){
//     if("salary" in p)
//     console.log(`Name:${p.name} & age:${p.age} &salary:${p.salary}`);
//    else
//     console.log(`Name:${p.name} & age: ${p.age}`);
// }


//  let s1:Student={name:"Rohit",age:10,rollNumber:12,className:7};
//  let t1:Teacher={name:"Mohit",age:10,salary:12,subject:"maths"};
//  let st:Staff={name:"Sunil",age:30,salary:2000,designation:"peon"};


//  showProfile(s1);
//  showProfile(t1);
//  showProfile(st);


 //Student
 //Teacher
 //Employee



 //Interface:

//  type Student={name:string,age:number};

//  interface Student{
//     name:string,
//     age:number
//  }

//  interface Student{
//        fees:number
//  }


// interface Person{
//     name:string,
//     age:number
// }

// interface Student extends Person{
//     className:string,
//     fees:number
// }

// interface Teacher extends Person{
//     salary:number,
//     subject:string
// }

// const s1:Student={name:"Rohit",age:18,fees:10};
// const p1:Person={name:"Rohit",age:18};

// const s1:Student={name:"Mohan",age:19,className:"Fifth",fees:40}
// console.log(p1);
// console.log(s1);

//  console.log(s1); 


//union type:


// type PaymentId=number|string;

// let p1:PaymentId=10;

// p1="24"


// type Person={name:string,age:number};

// type address={city:string,pincode:number};

// let p1:Person | address ={name:"Rohit",age:10,city:"Kotdwar",pincode:23142};

//    Person & address 


//literal type:


// let orderStatus="pending";


// orderStatus="shpppedd";

//pending,shipped,delivered


// type orderStatus='pending'|'shipped'|'deliverd'

// let status:orderStatus='pending';

// status='shppppped'; error



//readonly,as constant


// type Student={name:string,readonly rollNumber:number,age:number}

// type Student={name:string,rollNumber:number,age:number}


// const s1={
//     name:"Rohit",
//     age:10,
//     rollNumber:18
    
// } as const;   //readonly :read only property

// s1.name="mohan";

// console.log(s1);

// s1.rollNumber=19; error



//enum:

// enum OrderStatus{
//     Pending='pending',
//     Shipped='shpped',
//     Delivered='delivered'
// }


// let status:OrderStatus=OrderStatus.Pending;

// status=OrderStatus.Delivered;

// type OrderStatus='pending'|'shipped'|'delivered';

// let status:OrderStatus='pending';

//status="delivered";


// enum Direction{up=9,Down,left,right};

// console.log(Direction.up);


// function(a:number,b:number):number{
//     return a+b;
// }

// add(3,4);

// let add:(a:number,b:number)=>number=(a,b)=>a+b;


// console.log(add(9,4));