
let btn = document.querySelector('#btn');
let section = document.querySelector('.section');
let del = document.querySelector('.del');


// var id = (new Date().getTime()).toString(36);
let getArr = []

btn.addEventListener("click" , function(btn){
  let val = document.querySelector('#val');
  var id = (new Date().getTime()).toString(36);
  window.localStorage.setItem(val.value,id);
  // window.localStorage.getItem(val.value);
  getArr.push(val.value);
random();
myFun();
val.value = " ";

});
//Mapping  method
function random() {
  let displayMenu = getArr.map(function (item , index) {
    return `<p class="item-text">${item}<button onclick="myFun(this.textContent)">Delete</button></p>`;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;

}

// onclick="myFun(this.textContent)









// onLoad Fetch Method
window.addEventListener("DOMContentLoaded", function () {
for(let j =0 ; j < window.localStorage.length; j++){
  getArr.push(localStorage.key(j))
}

random();

  });

  // Delete method
del.addEventListener("click",function(e){
  window.location.reload(true);
  localStorage.clear();
});

// One list delete
// deleteOne.addEventListener("click",function(){
// alert("Geee");
// })
function myFun(val) {
  alert("This .value")
  for(let t =0 ; t < window.localStorage.length; t++){
       if(val == localStorage.key(t)) {
        let cut = val
        if(window.confirm("Are you sure you want to delete this list ?")) {
            localStorage.removeItem(cut);
            window.location.reload();
        }
       }
  }


}
