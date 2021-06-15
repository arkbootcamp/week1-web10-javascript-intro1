const biodata = {
  firstName: 'risano',
  lastName : 'akbar',
  age: 17,
  email: 'risano@gmail.com',
  addrees: {
    negara: 'indonesia',
    kodePos: '19234'
  }
}
// const firstName = biodata.firstName
// const age = biodata.age
// const negara = biodata.addrees.negara
// const kodePos = biodata.addrees.kodePos

// menggukana descraturing
const { negara : myNegara, kodePos} = biodata.addrees
const { email } = biodata
console.log(myNegara);
console.log(kodePos);
console.log(email);

// array
const rgb = [255, 10, 90]
const [green, red, nilai] = rgb
const blue = rgb[0]
console.log('blue adalah', blue);