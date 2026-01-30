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
let age =16
let loc = "KA"

console.log(age>=18 && loc==="TN");


// || or Operator
console.log(age>18 || loc==="TN");
// ! Not Operator
console.log(10!=10);


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

// nested conditions
let age =20
let natinality ="Indian"
let State="KE"

if(age>=18){
    if(natinality==="Indian"){
        if(State==="TN"){
            console.log("Eligible to Vote in TamilNadu");            
        }
        else{
            console.log("Not eligible because of State");
            
        }
    }
    else{
        console.log("Not eligible because of Nationality");
        
    }

}
else{
        console.log("Not eligible because of Age");
        
}