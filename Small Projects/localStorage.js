
let btn = document.querySelector('#btn');
let section = document.querySelector('.section');
let del = document.querySelector('.del');
// var id = (new Date().getTime()).toString(36);
let getArr = []

btn.addEventListener("click" , function(btn){
  debugger;
  let val = document.querySelector('#val');
  var id = (new Date().getTime()).toString(36);
  window.localStorage.setItem(val.value,id);
  // window.localStorage.getItem(val.value); 
  getArr.push(val.value);
random();
val.value = " ";

});
//Mapping  method 
function random() {
//   const boxes = document.querySelectorAll('.item-text');

// boxes.forEach(box => {
//   box.remove();
// });
  let displayMenu = getArr.map(function (item , index) {
    return `<p class="item-text"> ${index}  ) ${item}</p>`;
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
  window.location.reload(true);
  localStorage.clear();

});




  


