
let arrr = [{
        id:3 },
     {
        id:88,},
    {
        id:99},
    {
        id:93,},];

let ee = arrr.reduce((h1,h2) =>  { 
    console.log(h1,h2)  
    return h1.id < h2.id ? h2 : h1;
})
// });
// console.log(ee)
// console.log(ee.id);
// para.innerHTML = ee.id