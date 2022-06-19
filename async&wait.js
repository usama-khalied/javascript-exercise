// console.log("Async and await");

// async function harry() {

//  console.log("Inside harry function")
//  let response = await fetch('https://api.github.com/users');
//  console.log("Before response");
//  const users = await response.json();
// console.log("Users are here");
// return users
// console.log("After response")

// }
// console.log("before calling harry")
// let a =  harry();
// console.log(a);
// a.then(res => console.log(res))
// console.log("Last line harry ")


 async  function user(){
    let name  = "USama";
    if(name==="Usama"){
      return  await name;
    }
 }
user().then(res =>  {
    console.log(res)
}).catch(err => {
console.log("error")
})
user();