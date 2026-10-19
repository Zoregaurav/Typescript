
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


// function order():[string,number][]{
//     return ["101abc",3287];
// };


// const orderStatus=order(); 

// console.log(`My order Id is : ${orderStatus[0]}`);

// console.log(`my order price is :${orderStatus[1]}`);



 
// Type aliases:

// type Student={name:string,age:number,isPresent:boolean};

// let s1:Student={name:"Rohit",age:10,isPresent:true};

// const s2=s1;

// console.log(s2);

// type User={name:string,age:number};


// let u1:User=s1;

// console.log(u1);


//this is not allowed in ts:
// let u2:User={name:"Rohit",age:10,isPresent:true};

// type Student={name:string,rollNumber:number,age:number,className:number};
// type Teacher={name:string,age:number,salary:number,subject:string};
// type Staff={name:string,age:number,salary:number,designation:string};


// type Person={name:string,age:number};


// // function showProfile(p:Student | Teacher | Staff){ 
          
// //      console.log(`Name: ${p.name} & ${p.age}`);

// // }

// function showProfile(p:Student | Teacher | Staff){ 

//     if("salary" in p) 
          
//      console.log(`Name: ${p.name} & ${p.age} & salary:${p.salary}`); //error
//      else
//      console.log(`name :${p.name} & age:{p.age}`);

// }



// let s1: Student = {name:"Rohit",age:10,rollNumber:12,className:7};
// let t1: Teacher ={name:"Rohit",age:57,salary:50000,subject:"Maths"};
// let st: Staff = {name:"Rohit",age:45,salary:20000,designation:"peon"};



// showProfile(s1);
// showProfile(t1);
// showProfile(s1);


 //Student
 //Teacher
 //Employee



 //interfaces:



// interface Student{
//     name:string,
//     age:number
// }

// interface Student{
//     fees:number;

// }


//type Person={name:string,age:number}
//type Student=Person & {className:string,fees:number}


// interface Person{
//     name:string,
//     age:number
// }


// //interface Person(isSalary;number);



// interface Student extends Person{
//     className:string,
//     fees:number
// }

// const p1:Person={name:"Rohit",age:18};

// const s1:Student={name:"Rohit",age:18,fees:10,className:"Fifth"};

// console.log(s1);




//union Type:

// type PaymenId=number | String;


// let p1:PaymenId=10;

// p1:"24";

// EX:

// type Person={name:string,age:number};
// type address={city:string,pincode:number};

//union
// let p1:Person | address ={name:"Rohit",age:10,city:"kotdwar",pincode:23422};

// And:
// let p1:Person & address ={name:"Rohit",age:10,city:"kotdwar",pincode:23422};


//Litrals:

// let OrderStatus="pending";

// orderStatus="shipped";

// type OrderStatus='pending'|'shipped'|'delivered';



// let status:OrderStatus='pending';


//"pending","shipped","delivered"


// type Dice=1|2|3|4|5|6;

// let d1:Dice=1;

// d1=15 //error




//readonly,as constant:


// type Student={name:string,rollNumber:number,age:number};


// const s1:Student={
//     name:"Rohit",
//     age:10,
//     rollNumber:18
// } as const;  //sari property read only kara  di....

// s1.name="mohan";

// console.log(s1);





//Enums:

enum OrderStatus{
    Pending='Pending',
    shipped='shipped',
    Delivered='delivered',
}


// type OrderStatus='pending'|'shipeed'|'delivered';

let status:OrderStatus=OrderStatus.Pending;


status=OrderStatus.Delivered;



