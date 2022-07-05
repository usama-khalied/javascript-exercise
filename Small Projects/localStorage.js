let val = document.querySelector('#val');
let btn = document.querySelector('#btn');
let para = document.querySelector('.para');
let del = document.querySelector('.del');
var id = (new Date().getTime()).toString(36);
var obj = {
  Text:val.value,
  ID:id
}

btn.addEventListener("click" , function(btn){
var obj = () => {
  ID:id
  Text:val.value
}

let get = window.localStorage.setItem(obj.ID,obj.Text);
let set = window.localStorage.getItem(obj);
console.log(set)  
});
window.onload = function() {
for(var i = 0; i < localStorage.length; i++) {
  para.innerHTML = localStorage.key(i);
  let x = (localStorage.key(i));
  let =   new Array(localStorage.length)
  .fill()
  .map(i => localStorage.key(i));
  
  // localStorage.obj = JSON.stringify(Array.from(map.entries(i)));
}

};

del.addEventListener('click', function() {
  localStorage.removeItem('l58j4sah');
})