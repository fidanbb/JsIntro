
"use strict"
// console.log("salam");

// alert("something");

// var, let, constant

// const PHONE_NUMBER="23145644";


// var age=22;
// var age=33;

// if(true){
//     let age=33;
//     var age=33;

// }

// console.log(age);

// let surname ="Bashirova";

// const address="Hazi";

// let phoneNumber = "dfjs";

// let name ="Fidan";

// let isMarried=true;

// let age=22;

// let address;

// let phone =null;

// console.log(typeof name);
// console.log(typeof isMarried);
// console.log(typeof age);
// console.log(typeof address);
// console.log(typeof phone);


// let num1=20;
// let num2 =30;

// let result =mum1+num2;

// let result =num1*num2;

// let result =num1%num2;

// console.log(result);

// let count =5;

// count++;

// console.log(count);

// let age=100;

// let surname=null;

// console.log(age+surname);

// alert('2'>1);

// alert(''==false);

// alert(''===false);

// alert(null==undefined);

// alert(null===undefined);

// let num1="100";

// let num2=55;

// if(num1==num2){
//     console.log("equal");
// }


// if(num1!==num2){
//     console.log("true");
// }

// else{
//     console.log("false");
// }

// let age=20;

// let result = age>30? "boyuk":"kicik";
// console.log(result);

// let surname="";

// let result =surname ?? "XXX";

// console.log(result);

// let dayOfWeek="Sunday";

// switch(dayOfWeek){
//     case "Sunday":
//         console.log("Sunday");
//         break;
//     case "Mondy":
//         console.log("Monday");
//          break;
//     case "Tuesday":
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("not found");
//         break;

// }

// let user ={
//    name:"Surac",
//     surname:"Ismayilov",
//     age:23
// };

// console.log(user.name+" "+user.surname);

// console.log(`${user.name} - ${user.surname}`);

// let name ="test";
// console.log(typeof(name)=="string");

// let datas = ["surac", "ismayil","66", 55, 100, true];

// console.log(datas);
// console.log(datas[0]);

// for (let i = 0; i < datas.length; i++) {
//             if(datas[i]==55){
//                 console.log(i);
//             }

// }

// datas.forEach((element,i) => {
//     console.log(element + "/" + i);
// });

// for (let i = 0; i < datas.length; i++) {
//     if (!isNaN(datas[i]) && typeof (datas[i]) != "boolean"&& typeof(datas[i])!="string") {
//         let result = datas[i] + 30;
//         console.log(result);
//     }
// }

// let name ="Surac";
// name+="Ismayilov";

// console.log(name);


let stu1={
    name:"Surac",
    surname:"Ismayilov"
}

let stu2={
    name:"Pervin",
    surname:"Mirzeyev"
}
let stu3={
    name:"Fidan",
    surname:"Bashirova"
}

let stu4={
    name:"Kubra",
    surname:"Memmedova"
}

let students=[stu1,stu2,stu3,stu4];



// document.querySelector(".test").innerHTML="salamlar";

document.querySelector(".btn").addEventListener("click",function(){
    students.forEach(student => {
        let h1=document.createElement("h1");
        let result=`${student.name},${student.surname}`;
        h1.innerText=result;
        document.querySelector(".test").append(h1);
    
        // console.log(result);
    });

    this.style.display="none";
})