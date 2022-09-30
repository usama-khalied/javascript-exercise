

// function Assign(myname,myemail) {
// this.myname = myname
// this.myemail = myemail;
// }
// let newAssign = new Assign("Usama","usamakhalied@gmail.com");    


// function Person() {
//    newAssign.call(this);
// }

// Person.prototype =  Object.create(newAssign)

// let newPerson =  new Person();
// console.log(newPerson)





// Customize global function apply on fucntion 

// let Person = {
//     name : "Usama"}
// let Person2 = {
//   name : "Anus"}
// Function.prototype.mybind = function() {
//     console.log("Hellow")}
// function fun() {   }





// Bind , Apply , call 

let Person  = {
    name:"Usama",
    email:"usamakhalied@gmail.com",

}
let printFullName =  function (hometow) {
    console.log(this.name + this.email + "from " + hometow)
}
let  Person2 = {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    name : "Anus",
    email :'Anuskhaleid@gmail.com'
}

printFullName.call(Person2,"Karachi")
printFullName.call(Person,"Lahore")
