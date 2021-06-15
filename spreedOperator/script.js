const biodata = {
  name: 'risano akbar',
  email: 'risano@gmial.com'
}
const mySkill = {
  skill: 'programming',
  hoby: 'ngoding'
}
// copy / clone object
const newBiodata = {
  ...biodata, 
  meried: true
}
newBiodata.name = "budi susanto"

// ngabungkan 2 object
  const detailBio = {
    ...biodata,
    ...mySkill
  }
console.log(detailBio);
// console.log(biodata);
// console.log(newBiodata);

// array
const color = ['blue', 'red']
const color2 = ['green', "white"]
const newColor = ['yellow', ...color]

const bigColor =[...color, ...color2]
console.log(bigColor);