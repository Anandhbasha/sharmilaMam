// Hoisting
// variable declaration
// var

// var a =10
// console.log("Hello");
// alert("Hello")
// a =50
// console.log(a);


// let
// console.log(a);
// let a = 20
// a=60


// const

// const c=66
// c=55
// // console.log(c);


// {
//   let d=60
   
// }
// console.log(d); 

// variable name must start with letter only
// varible name not consider gaps and hyfuns
// dont use js keyword 
// meaning full names


// datatypes
// premitive data types
// number
// var a =10
// console.log(typeof(a));

// // string
// var names ='hello this my basic js code'
// console.log(typeof(names));
// boolean
// todayClass = true
// console.log(typeof(todayClass));

//undefined
// let b;
// console.log(typeof(a));

// null
// let c =null
// console.log(typeof(c));

// NAN
// let a ="klhjh"
// let b="fhg"
// console.log(a+b);

// // // String concordination

// // non premitive
// // Array
// let arr = [10,20,30,40,50]
// // console.log(arr)
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr.length);


// // Object
// person = {
//   name:"Ajay",
//   age:30,
//   city:"CBE",
//   family:{
//     dad:"hjgjh",
//     mom:"kjoj",
//     siblings:{
//       brother:"hghjhkjhk",
//       sister:"Nill"
//     }
//   }
// }
// console.log(person.family.siblings.brother);
// console.log(Object.values(person));



// operator
// Arithmetic Operator
// +,-,*,/,%,++,--
// console.log(10+5);
// console.log(10-5);
// console.log(10*5);
// console.log(10/5);
// console.log(10%5);
// console.log(2**2);
// let b =20
// console.log(b++); 
// // b=21+1 = 22
// console.log(++b); 
// b=b+1

// comparision opeartor
// <,>,<=,>=,==,==
// console.log(10<=10);
// console.log(10=="10");
// console.log(10==="10");

// logical opeartor
// &&  And Operator
// let age =16
// let loc = "KA"

// console.log(age>=18 && loc==="TN");


// // || or Operator
// console.log(age>18 || loc==="TN");
// // ! Not Operator
// console.log(10!=10);


// assignmet operator
// =,+=,-+,*=/=,%=
// let a=5
// let a =10
// a=a+1
// a+=10

// ternary opeator
// console.log(age>=18?"Eligible":"Not Eligible");






// let age =12

// if (age>19){
//     console.log("Adult"); 
// }else{
//     console.log("Teenager");    
// }

// if(age>19){
//     console.log("Adult");
    
// }
// else if(age<13){
//     console.log("Kids");
    
// }
// else{
//     console.log("Teenager");
    
// }

// // nested conditions
// let age =20
// let natinality ="Indian"
// let State="KE"

// if(age>=18){
//     if(natinality==="Indian"){
//         if(State==="TN"){
//             console.log("Eligible to Vote in TamilNadu");            
//         }
//         else{
//             console.log("Not eligible because of State");
            
//         }
//     }
//     else{
//         console.log("Not eligible because of Nationality");
        
//     }

// }
// else{
//         console.log("Not eligible because of Age");
        
// }

// switch
// switch(condition){
//     case 1:
//         console.log("");
        
// }

// let today = new Date()
// const day = today.getDay()

// switch(day){
//     case 0:
//         console.log("Today is Sunday");
//         break
//     case 1:
//         console.log("Today is Monday");
//         break
//     case 2:
//         console.log("Today is Tuesday");
//         break
//     case 3:
//         console.log("Today is Wednesday");
//         break
//     case 4:
//         console.log("Today is Thursday");
//         break
//     case 5:
//         console.log("Today is Friday");
//         break
//     default:
//         console.log("Today is Saturday")        
// }

// looping Statements
// while
// let a=0
// while(a<11){
//     console.log(a++);    
// }

// let array = [20,40,60,80,100]
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// let b=0
// let len = array.length
// while(b<len){
//     console.log(array[b]);
//     b++
// }

// let array = [20,40,60,80,100]
// let count = 0
// while(count<=array.length-1) {
//     ++count //1 2 3 4 5
    
// }

let a =1
let b =2

while(b<11){
    a=a+b  //15
    b++ //6
}
console.log(a);

// console.log(count)//while(0<5){ ++count = 1  while(1<5) ++count =2  while(2<5) 3 4 5


// do while
// do{
// console.log("Do while");

// }while(5>10)
// for
    // for
    let array = [20,40,60,80,100]
    // for(let i=0;i<array.length;i++){
    //     console.log(array[i]);        
    // }
    // // for of
    // for(let i of array){
    //     console.log(i);        
    // }
    // // for in
    // for(let i in array){
    //     console.log(array[i]);        
    // }
    // foreach
    // array.forEach((item)=>console.log(item))
    // map
    let count = 0
    array.map((item)=>{
        ++count
    }
    )
    console.log(count);
    