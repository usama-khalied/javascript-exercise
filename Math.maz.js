
let arrr = [{
        id:003 },
     {
        id:088 },
    {
        id:099},
    {
        id:093,},];

let ee = arrr.reduce((h1,h2) =>  {
    // console.log(h1,h2)
    return h1.id < h2.id ? h2 : h1;
})
console.log(ee.id)
// });
// console.log(ee)
// console.log(ee.id);
// para.innerHTML = ee.id




// Escape Character
// document.write("I m a \"good\" boy");
// console.log("I am a \"good\" body");
