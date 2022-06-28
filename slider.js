const section = document.querySelector('.col-slider');

function next() {
let sectionIndex = 0;    
// section.style.transform="translateX(-200px)"
for(let i=0;i<3 ; i++)  {
    if(i < 5) {

        let fonseSize = parseInt(section.style.width);
        fonseSize = fonseSize / i;
        console.log(fonseSize);
        // section.style.transform="translateX(-${fonseSize} + "PX")";
        section.style.transform="translateX(-200px)"
    }

} 

}



// const element = document.querySelector('.element')

// const fontSize = element.style.fontSize
// console.log(fontSize)

// const color = element.style.color
// console.log(color)