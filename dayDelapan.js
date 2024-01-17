// for (let i = 1; i <= 10; i++) {
//   console.log("hi binarian", i, "x");
// }

//challange buat looping 1-10 dan outputnya :
// 1 ganjil
// // 2 genap
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i, "genap");
//   } else {
//     console.log(i, "ganjil");
//   }
// }

// challange
// let array = [2,5,6,10] lalu dijumlahkan
// let result nya berapa ?

// let data = [2, 5, 6, 10];
// let result = 0;

// for (let indexData = 0; indexData < data.length; indexData++) {
//   console.log(indexData);
//   result += data[indexData];
//   // console.log(indexData[i]);
// }
// console.log(`hasilnya adalah ${result}`);

// faris hasan

let data = [2, 5, 6, 10];
console.log(data);
let result = 0;

for (let i = 0; i <= 3; i++) {
  result += data[i];
  console.log(data[i]);
}

console.log(` hasil dari si hasan ${result}`);

// // challange
// // let array = [] lalu multiplys numbernya
// // let result nya berapa ?

// let multNumbs = [2, 2, 5];
// let resultMult = 0;

// for (let i = 0; i < multNumbs.length; i++) {
//   resultMult = multNumbs[i] * multNumbs[i];
// }
// console.log(resultMult);
// console.log(multNumbs.length);

// let numberItem = [10, 2];
// let resultDivide = 0;

// for (let i = 0; i < numberItem.length; i++) {
//   resultDivide = numberItem[i] / numberItem[i];
//   // console.log(numberItem[i]);
// }
// console.log(resultDivide);

// while loop
for (let i = 0; i < 5; i++) {
  console.log(`hai siswa binarian`);
}

let index = 0;
while (index < 5) {
  console.log("hai binarian, `ini while loop`");
  index++;
}
