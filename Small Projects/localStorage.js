let val = document.querySelector('#val');
let btn = document.querySelector('#btn');
let para = document.querySelector('.para');
let del = document.querySelector('.del');
var id = (new Date().getTime()).toString(36);
// var obj = {
//   Text:val.value,
//   ID:id
// }

btn.addEventListener("click" , function(btn){
  var obj = {
    ID:id,
    Text:val.value
  }

let get = window.localStorage.setItem(obj.Text,obj.ID);
let set = window.localStorage.getItem(obj); 
});



// fetch method 
window.onload = function() {
  // let x = (localStorage.key(i));
  let y  =   new Array(localStorage.length)
  .fill()
  .map(i => localStorage.key(i));
  para.innerHTML = y;


};

del.addEventListener('click', function() {

  localStorage.removeItem('"my name is khalied"');
})