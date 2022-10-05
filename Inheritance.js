// Inheritance 
class A {
    constructor(name,age,email) {
         this.name =  name;
         this.email = email;
         this.age = age
    }
      biodata() {
        return `my  name${this.name} and my age ${this.age} and my email ${this.email}`
    }
}



class B extends A {
constructor( name,email,age,game) {
    super(name,age,email)
     this.game = game;
}
playBioData() {
       return `${super.biodata()} and i play ${this.game}`
    // console.log(`my name is ${this.name} , and my age ${this.age} and my email ${this.email} and i play ${this.game}`)
}   
}
let newcreateObje = new B('Tayyaba',10,'tayyabakhalied@gmail.com',"hockey");
console.log(newcreateObje.playBioData())