let val = document.querySelector('#val');
let btn = document.querySelector('#btn');

let result = window.localStorage.setItem('name' , "Anus","Hellow")
let result1 = window.localStorage.getItem('name');



btn.addEventListener("click" , function(btn){
var colors = [];
colors.push(val.value)
for(let i = 0; i < colors.length; i++) {
 return    localStorage.setItem("my_colors", JSON.stringify(colors[i])); //store colors
    let storedColors = localStorage.getItem("my_colors"); //get them back
    console.log(storedColors);
}
});


