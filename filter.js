// let arr = [0,3,4,6,8];
// // let arr1 = [0,3,6,5,3];
// let arr1 = [
//     {
//         count : 3
//     }
// ]
// let func = arr.filter(function(e){
//   return  e!=arr1.count;
// });
// console.log(func);


// agar hum kisi array ka
// digit filter krwa kr 
// kisi number k not equal 
// kr dey to wo us ko chorh
// kr baaqi sab ko ley aayen
//  ga
//  let arr = [
//     {
//         name : "Usama",
//         fathername : "Khalid",

//     },
//  ];
//  let arr1 = [
//    {
//     name1 :"Usama",
//     fathername : "Khalid",
//    }, 
//  ]
// let newArr = arr.filter(function(e){
//     return e.name == "Usama"; 
// })

// console.log(newArr.name)  

// const users = ["Usaam","Ahmed","Laraib",
// "Jamal"];

// studen =  [
//     {
//         name : "Jamal"
//     }
// ]

// let oneTwo = users.filter((value,index) => 
// value != studen.name,
// );
// console.log(oneTwo);

let competation = ["Usama","Anus",
"Khalid","Bilal"];
// let ff = competation.filter()
// function myfun(name,index,array) {
//     if(index > 2 && name.includes('a')){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let oneThree = competation.filter((name,index,array) => myfun(name,index,array)); 
// console.log(oneThree);

// const halfArr = function (element , index , array) {
//  let half = index.length / 2
//  return half  < index.length;
// }
// halfArr("Myname", 3 , String);
// console.log(halfArr)

// let obj = [{
//     name :"Usama",
//     graduation:2022,
// },
// {
// name : "natasha",
// graduation:2022,
// },
// {
// name :"Usama",
// graduation:2021,
// },
// ]
// let curentYear = new Date().getFullYear();
// let mesure = obj.filter(val => 
//     val.graduation !== curentYear
//     );
//     console.log(mesure);
// const menu = [
//     {
//       name: "buttermilk pancakes",
//       category: "breakfast",
//       price: 15.99,
//       status: "available"
//     },
//     {
//       name: "diner double",
//       category: "lunch",
//       price: 13.99,
//       status: "available"
//     },
//     {
//       name: "godzilla milkshake",
//       category: "shakes",
//       price: 6.99,
//       status: "available"
//     },
//     {
//       name: "country delight",
//       category: "breakfast",
//       price: 20.99,
//       status: "86"
//     },
//     {
//         name: "country delight",
//         category: "breakfast",
//         price: 20.99,
//         status: "83"
//       },
//     {
//       name: "egg attack",
//       category: "lunch",
//       price: 22.99,
//       status: "available"
//     }
//   ];
//   let newArr = menu.filter((e) => e.category === "breakfast");
//   console.log(newArr);

//   const deligth = newArr.find((para) => para.name ==="country delight");
//   console.log(deligth);

//   if(deligth.status !== "86") {
//     console.log("Available");
//   }
//   else {
//     console.log("Not Available");
//   }