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


//  async  function user(){
//     let name  = "Usama";
//     if(name==="Uaama"){
//       return  await name;
//     }
//     else {
// console.log("Nh chala bey")
//     }
//  }
// user().then(res =>  {
//     console.log("res")
// }).catch(err => {
//     console.log(err)
// })
// user();


// async function harry(){
//     console.log("A");
//   await  console.log("B");
//     console.log("C");
// }
// harry();
// console.log("D");
// console.log("E");

async function func(){
    console.log("2 : Messege");
  await  console.log("3 : Messege");
    console.log("4 : Messege");
}
console.log("1 : Messege");
func();
console.log("5 : Messege");