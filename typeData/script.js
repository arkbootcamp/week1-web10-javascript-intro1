// number
let nilai = 100
console.log(typeof(nilai));
// string
let name = 'muhammad risano akbar'

// boolean -> true atau false
let isLulus = false
let isTypeData = typeof (isLulus)
console.log(isTypeData);

// null
let data = null
console.log(typeof(data));

// undefined
let product = undefined
console.log(typeof(product));
// console.log(product);

// function
const callMe = function(){
  console.log('hello me');
}
console.log(typeof(callMe));
// const isValue = callMe

// object {}
const biodata = {
  name: " muhammad risano",
  email: "muhamamdrisano@gamil.com"
} 
biodata.name = "dody"
biodata.email ="dody@gmail.com"
console.log(biodata);

console.log(typeof(biodata));
// object (array)
const skill = ["javascript", "php", "golang"]
skill[1] ="java"
skill.push("typescript")
console.log(skill);
console.log(typeof(skill));