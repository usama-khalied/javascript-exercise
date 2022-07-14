let val = document.querySelector('#val');
let btn = document.querySelector('#btn');
let section = document.querySelector('.section');
let del = document.querySelector('.del');
var id = (new Date().getTime()).toString(36);
let Arr = []









btn.addEventListener("click" , function(btn){
  var obj = {
    ID:id,
    Text:val.value
  };

let setValue = window.localStorage.setItem(obj.Text,obj.ID);
let getValue = window.localStorage.getItem(obj.Text); 
for(let i= 0;i < window.localStorage.length;i++){
  // let arrKeys = localStorage.key(i);
  Arr.push(localStorage.key(i))
  // console.log(Arr)
}
random();
});


//fetch method 
function random() {
  let displayMenu = Arr.map(function (item , index) {
    return `<p class="item-text"> ${index}   ${item}</p>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);
  section.innerHTML = displayMenu;
}

window.addEventListener("DOMContentLoaded", function () {console.log(random())});









  


