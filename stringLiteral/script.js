const firstName = "body"
const lastName = "akbar"
const age = 17
const nalai1 = 20
const nilai2 = "22"
console.log(nalai1 + nilai2);

const paragraf = "perkenalkan nama saya " + firstName + " " + lastName + " dan panggilan saya " + firstName+"\n"
  + "umur saya " + age + " pada tahun 2021"
const paragraf2 = `perkenalkan nama saya ${firstName} ${lastName} dan 
panggilan saya ${firstName === 'risano' ? 'risa': 'broo'}
umur saya ${age + 2} pada tahun 2023`
console.log(paragraf);
console.log(paragraf2);