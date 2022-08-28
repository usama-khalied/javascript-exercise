                        // In this course we wil learn 
                        // Object.Assign(); 
                        
const Student1 = {
    naem : "Usama",
}
const Student2 = {
    email:"anuskhalied@gmail.com"
}
const Student3 = {
    score : 92
}

let AssignObject = Object.assign(Student1,Student2,Student3);

// console.log(AssignObject);

// Output is { naem: 'Usama', email: 'anuskhalied@gmail.com', score: 92 }


                        // What will happened when Object1  Property 
                        // have same Object2  ?

const Player1 = {
    score:4,
}                        

const Player2 = {
    score : 8,
    name : "Ronaldo",

}

let AssignPlayers = Object.assign(Player1,Player2,{score:10})

// console.log(AssignPlayers)

// The output is { score: 10, name: 'Ronaldo' }




                    //  Object Assign Some 
                    // Understanding Examples 


function PrintData(Optinal) {
const Default = {
    name1: "Anus",
    name2:"Imran"
};
Optinal = Object.assign(Default, Optinal);
console.log(`Your Full name ${Optinal.name1} And ${Optinal.name2}`);

}                    

PrintData({
    name1: "Usama",
    name2 : "Khalid"
})

                        //    URDU 

// Object.assign hamara ibject ki propertyy maerge krney k kaam aata  hai 
// jab gamarey paas  pehla object ho "name" ka aur doosrey object mai 
// bhi hamarey paas "name" ho. aur pher hum object ko assign karen new object
// to wo hamesha second waley object ki property ko uthayen ga 
// etc object.assign(FirstObject,SecondObject) and then wo uthayen ga 
// secondObject ki name ko print kr dey ga merge 