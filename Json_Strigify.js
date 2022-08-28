var obj = {
    name : "Usama",
    email : "usamakhaleid@gmail.com"
};
// console.log(JSON.stringify(obj));


// The result is "{"name":"Usama","email":"usamakhaleid@gmail.com"}"


// var Student = [
//     {
//         name:"Usama",
//         email:"Usamakhalied@gmail.com"
//     },
//     {
//         name :"Bial",
//         date  : new Date(),
//     }
// ]
// console.log(JSON.stringify(Student));



                            // Object   {   Null - undefined -  NaN -  Infinity } 

var obj1 = {
    name:"tt",
    age: Infinity
}
// Object convert "Null, NaN, Infinity" to "Null" & "Undefined" convert to "Nothing Empty"
// console.log(JSON.stringify(obj1));


                        //    Array { Null -  Undefined - NaN - Infinity  }

//    var Array1 = [
//     "Hellow", NaN, Infinity,undefined,null
//    ]

//    console.log(JSON.stringify(Array1)); 




                        //   Object in function 

var Cat = {
    name : 'foo',
    age :7,
    color : 'white'
}                        

let CAT = JSON.stringify(Cat,(key,value) => {
    if(key =='age'){
        return null
    }
    return value;
}, 10);


console.log(CAT)