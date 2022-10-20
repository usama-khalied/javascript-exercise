//    Call back fnction  or Fat Arrow function 
const mult = (a,b) => {
    return a * b;
}
mult(2,5)

const plus = (c,d) => {
    return c + d
}
plus(4,5)

const minus = (e , f) => {
    return e -f
}
minus(29,34)

const Master = (num1,num2,operator) => {
return operator(num1,num2)
}
 console.log(Master(2,4,plus))