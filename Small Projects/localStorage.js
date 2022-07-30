let val = document.querySelector('#val');
let btn = document.querySelector('#btn');
let section = document.querySelector('.section');
let del = document.querySelector('.del');
var id = (new Date().getTime()).toString(36);
let getArr = []

btn.addEventListener("click" , function(btn){
  window.localStorage.setItem(val.value,id);
  window.localStorage.getItem(val.value); 
for(let i= 0;i < window.localStorage.length;i++){
  getArr.push(localStorage.key(i))
}
random()
});
//Mapping  method 
function random() {
  let displayMenu = getArr.map(function (item , index) {
    return `<p class="item-text"> ${index}   ${item}</p>`;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
}
// onLoad Fetch Method 
window.addEventListener("DOMContentLoaded", function () {
for(let j =0 ; j < window.localStorage.length; j++){
  getArr.push(localStorage.key(j))
}
random();
  });

  // Delete method 
  let item = document.querySelector('.p');
del.addEventListener("click",function(e){
  random();
  localStorage.clear();

});




  


