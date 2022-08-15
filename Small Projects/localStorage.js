
let btn = document.querySelector('#btn');
let section = document.querySelector('.section');
let del = document.querySelector('.del');
let getArr = []


// Post on LocalStorage 
btn.addEventListener("click" , function(btn){
  let val = document.querySelector('#val');
  var id = (new Date().getTime()).toString(36);
  window.localStorage.setItem(val.value,id);
  getArr.push(val.value);
random();
val.value = " ";
});
// Post on LocalStorage  End



// localStorage Data  Push on Array[]
function random() {
  let displayMenu = getArr.map(function (item , index) {
    return `<p class="item-text">${item}<i id="check" onclick="myFun()" class="fa fa-trash-o" aria-hidden="true"></i></p>`;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
}
// localStorage Data  Push on Array[] End



// Data Delete by ID
function myFun() {
  let child = document.querySelector('#check').parentElement.textContent;
  for(let t =0 ; t < window.localStorage.length; t++){
       if(child == localStorage.key(t)) {
        let cut = child
        if(window.confirm("Are you sure you want to delete this list ?")) {
            localStorage.removeItem(cut);
            window.location.reload();
        }
       }}}
// Data Delete by ID End




// Fetch Method After Every CLick 
window.addEventListener("DOMContentLoaded", function () {
for(let j =0 ; j < window.localStorage.length; j++){
  getArr.push(localStorage.key(j))}
random();
  });
// Fetch Method After Every CLick End





  // Delete All list method
del.addEventListener("click",function(e){
  window.location.reload(true);
  localStorage.clear();
});
  // Delete All list method End


