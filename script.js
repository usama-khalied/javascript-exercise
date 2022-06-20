// let y = document.querySelector('#demo');
// let para = document.querySelector('.para');
// function myfun() {
//     y.innerHTML = Math.floor((Math.random() * 24) + 1);
//     let text = "My name is khalied Mehmood"
//     para.textContent = text;
// }

// let getList = () => {
//     return ['Muhammad Usama', ' Khalid', 'usamakhalied@gmail.com', 'cricket', 'Tari Road', 'karachi', 'Pakistan']
// }
// const detaild1 = getList();
// const Myname = detaild1[0];
// const MyLastname = detaild1[1];
// /const myEmail = detaild1[1];
// const myAddress = `${detaild1[3]} , ${detaild1[4]} , ${detaild1[5]}`;
// const firstname = Myname.split(' ')[0];
// const lastName = MyLastname.split(' ')[1]
// console.log(Myname, MyLastname, myAddress, myEmail, firstname, lastName);

// const [Myname, myEmail, ...MyaddressArr] = getList();
// function myfun() {
//   let Value = document.querySelector('#user').value;
//   for(let i=1;i<=10;i++){
//   let total = Value * i;
//   console.log(Value +' x ' + i + ' = ' + total)
//   }
// }
// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();
// const date = new Date(tempMonth);
// console.log(tempDay)
// let day = date.getDate();


// let startDate = new Date()







// const [uName, uEmail, ...uAddressArr] = getDetails();
// console.log(uAddressArr)
// const uAddress = uAddressArr.join(', ');
// const [uFirstName, uLastName] = uName.split('');
// console.log({
//     uFirstName,
//     uLastName,
//     uEmail,
//     uAddress
// });
// function myfun() {
//     let abouses = ["fu", "bi", "wtf"];
//     let user = document.querySelector('#user').value;

//     for (let i = 0; i < abouses.length; i++) {
//         if (user === abouses[i]) {

//             alert("blocked");
//             return false;
//         }
//         else {

//         }
//     }
//     alert("posted")
// }
// function back() {
//     let userValue = document.querySelector('.user').value;
//     let str = userValue.slice(0, -1);

// }

// let count = 0;
// function plus() {
//     document.getElementById('count').innerHTML = count;
//     count++;

// }
// function minus() {
//     count--;
//     document.getElementById('count').innerHTML = count;

// }

// Trick One

const randomString = Math.random().toString(36).slice(2);
console.log(randomString); //output- r0zf1xfqcr (the string will be random )

// Trick Two

let email = 'xyz@gmail.com';
let getDomain = email.substring(email.indexOf('g') - 1);
console.log(getDomain); // output - gmail.com

// Trick Three

// const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').match;
let mql = window.matchMedia('(max-width: 600px)');
// automaticallly using responsive media querythen your
// functionality will be worki
// document.querySelector(".mq-value").innerText = mql.matches;


// Trick four
// const elem = document.querySelector('.text-input');
// const isFocused = elem == document.activeElement;
// console.log(isFocused);


// for (var i = 1; i <= 10; i++) {
//     let table = 2;
//     let total = table * i;
//     console.log(table + "x" + i + " = " + total)
// }

// var user = document.querySelector('#user');
// var user2 = document.querySelector('#user1');
// let demo = document.querySelector('#demo');
// function myfun() {
//     let x = parseInt(user.value);
//     let y = parseInt(user2.value);
//     if (x === y) {
//         let z = (x + y) * 3;
//         document.getElementById("demo").innerHTML = z;
//     }
//     else {
//         z = x + y
//         document.getElementById("demo").innerHTML = z;
//     }
// }

//  text  = W3resources
// var text = document.querySelector('#demo');
// var NEW;
// var LAST;
// function myfun() {
//     text.style.transform = "rotate(7deg)";
//     NEW = text.textContent.substring(text.textContent.lastIndexOf('s') - 0);
//     LAST = text.textContent.slice(0, -1);
//     text.innerHTML = NEW + LAST
// }

// new
// var text = document.querySelector('#input');
// let str = "###";
// var cut;
// var newTex;
// function myfun() {
//     if (text.value.length > str.length) {
//         newTex = text.value.slice(str.length, text[-3]);
//         text.style.textTransform = "uppercase";
//         cut = newTex.toLowerCase() + text.value;
//         text.value = cut;
//     }
//     else {
//         alert("Nh huwa")
//     }
// }
// newTex = text.value.split(text[2]).join(cut.toUpperCase())
// text.value.innerHTML = newTex

// console.log(cut.toUpperCase())

// new Projects 08

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const text = document.querySelector('#input');
// let para = document.querySelector('#para');
// function myfun() {
//     randomNum = getRandomNumber()
//     para.innerHTML = randomNum
//     if (randomNum == text.value) {
//         alert("Hellow")
//     }
//     else {
//         alert("Not Hellow");
//     }
// }
// function getRandomNumber() {
//     return Math.floor(Math.random() * num.length)
// }

// end project 08

// new Project 09

// const value1 = document.querySelector('#multiply');
// const value2 = document.querySelector('#division');
// const btns = document.querySelectorAll('#btns');
// let result = document.querySelector('#para');

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         if (e.currentTarget.innerHTML == "Multiply") {
//             result.innerHTML = value1.value * value2.value;
//         }
//         else if (e.currentTarget.innerHTML == "Division") {
//             result.innerHTML = value1.value / value2.value;
//         }
//     })
// });

// end project 09

// New Project 10

// document.getElementById('submit').onclick = function () {
//     alert(document.URL)
// }

// end project 10

// new Project 11

// var str = "Hi I Am Usama"
// window.addEventListener('DOMContentLoaded', function () {
//     console.log(window.print)
// })

// -------------------------------- //
// Filter Project **
// ------------------------------- //

// function canVote(age) {
//     return age >= 18;
// }
// function func() {
//     var filtered = [24, 33, 16, 40].filter(canVote);
//     console.log(filtered)
// }

// let team = [
//     {
//         id: 101,
//         name: "Usama",
//         class: "one"
//     },
//     {
//         id: 102,
//         name: "Bilal",
//         class: "Sixth"
//     },
//     {
//         id: 103,
//         name: "Bilal",
//         class: "Two"
//     },
//     {
//         id: 104,
//         name: "Areeb",
//         class: "one"
//     },
//     {
//         id: 105,
//         name: "Uzaier",
//         class: "Eight"
//     }
// ];
// let developer = team.filter(function (e) {
//     return e.class == "one";
// });
// console.log(developer)
// let para = document.querySelector('#para');
// let newDev = team.filter(function (e) {
//     return e.name !== "Bilal"
// })
// let newMp = newDev.map(function (e) {
//     return `<p> ${e.name} </p> <br/>
//              <p>  ${e.class} </p> <br/> <p> ${e.id} </p>`
// });
// console.log(newMp)
// para.innerHTML = newMp.join("");

/// =============================== /////
///   Local Storage Practice Exercise //
////============================== //////


// window.localStorage.setItem('name' , "Anus")
// window.localStorage.setItem('name2' , "Uzaier")
// localStorage.removeItem('name')
// let result =  localStorage.getItem('name2');
// console.log(result.textContent = "My name is " + result)
// console.log(resultv )

// let impArr = ['aaloo', 'gaajar', 'mooli']
// localStorage.setItem('name' , 'harry');
// localStorage.setItem('name2' , 'Usama');
// localStorage.setItem('Sabzi',JSON.stringify(impArr)) ;

let con = JSON.parse(localStorage.getItem('Sabzi'));
// console.log(con)

// let newArr = ['Usama','khalid','Uzaier'];
// console.log(newArr);

// let convert = JSON.stringify(newArr)
// console.log(convert)

// let convert2 = JSON.parse(convert);
// console.log(convert2);

// var jsonPerson = '{"first_name":"billy", "age":23}';
// var personObject = JSON.parse(jsonPerson); //p
// console.log(personObject)
// var jjperson = JSON.stringify(personObject);
// console.log(jjperson)
//  let impArr = ['aaloo', 'gaajar', 'mooli']
//  sessionStorage.setItem('sessionName' , 'harry');
//  sessionStorage.setItem('sessionName2' , 'Usama');
//  sessionStorage.setItem('sessionSabzi',JSON.stringify(impArr));



// ------------------------//
//  New Projects           //
// ----------------------- //

// let Value = document.querySelector('#user');
// let num4 = [1,2,3,4,5,6,7,13,14]
// function func() {
//   randomnuu = getRandom();
//   console.log(randomnuu);
//   if(randomnuu == "8") {
//     alert("Greater than 13")
//   }
// }
// function getRandom(){
//     return Math.floor(Math.random() * num4.length).toString()
// }

// ------------------------//
//  New Projects           //
// ----------------------- //

const name  = ["james" , "bond"];
const othername = ["Micheal" , "Jackson"];

const allnames = [...name , ...othername];
console.log(allnames)