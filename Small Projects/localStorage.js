let val = document.querySelector('#val');
let btn = document.querySelector('#btn');
let section = document.querySelector('.section');
let del = document.querySelector('.del');
var id = (new Date().getTime()).toString(36);
let Arr = []









btn.addEventListener("click" , function(btn){
let setValue = window.localStorage.setItem(val.value,id);
let getValue = window.localStorage.getItem(val.value); 
for(let i= 0;i < window.localStorage.length;i++){

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
  console.log(displayMenu)
  section.innerHTML = displayMenu;
}

window.addEventListener("DOMContentLoaded", function () {
console.log(random());
});

del.addEventListener("click",function(){
  window.localStorage.removeItem(val.value)

})







  


