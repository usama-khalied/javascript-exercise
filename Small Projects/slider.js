const section = document.querySelector('.col-slider');  
let sectionIndex = 0;    
let num = 1;
function next() {

        // let fonseSize = parseInt(section.style.width);
    
        if(sectionIndex < 3) {
        sectionIndex =  sectionIndex+1;
        console.log(sectionIndex)
        section.style.transform="translateX(" + (sectionIndex) * -200 + "px)";
        }
        else {
            sectionIndex = 3;
        }
}
function prev(){
    if(sectionIndex > 0) {
        sectionIndex =  sectionIndex-1;
        console.log(sectionIndex)
        section.style.transform="translateX(" + (sectionIndex) * -200 + "px)";
        }
        else {
            sectionIndex = 3;
        }
}


