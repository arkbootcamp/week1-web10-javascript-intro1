// console.log('hello world')
// 1. var
  // berarti memiliki sifat hoisting
  // var myName



  console.log(myName);
  var myName = "muhammad risano akbar"
// dapat di declarasi kembali
  var kelas = "web10"
  var kelas = "web12"
  console.log(kelas);

// var -> function scope bukan block scope
// function print(){
//   if (10 > 2) {
//     console.log('10 besar dari 2');
//     var yourName = "andi"
//   } else {
//     console.log('10 kecil dari 2');
//   }
// }
// print()
(function print() {
  if (10 > 2) {
    console.log('10 besar dari 2');
    let yourName = "andi"
  } else {
    console.log('10 kecil dari 2');
  }
}())
// console.log(yourName);

// 2. let
  // tidak hoisting
  // block scope
  let product = "sepeda"
  product = "motor"
  console.log(product);
// 3. const

  const product2 = "baju"
  product2 = "celana"
  console.log(product2);