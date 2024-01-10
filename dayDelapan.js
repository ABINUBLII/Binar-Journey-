// for (let data = 0; data < 10; data++) {
//   console.log("halo");
// }

//buat looping 1 s.d 10 kemudian tulis ganjil sesuai angka
// for (let i = 0; i <= 10; i++) {
//   if (i)
// }

// for (data = 1; data <= 10; data++){
//     if()
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log("Genap=", i);
//     } else {
//       console.log("Ganjil=", i);
//     }
//   }

// buat looping for
// ada array [2,2,6,10]
// output hasil dari array.
let data = [2, 2, 6, 10];
let result = 0;
// (let i = 0; i < data.length; i++) data.length untuk mmenghitung berapa banyak array
for (let i = 0; i < data.length; i++) {
  result += data[i];
}
console.log(result);
console.log(data.length); // buat ngecek aja berapa banyak array

// buat perkalian 2,5,10 dari array
// output hasil dari perkalian tsb
let data2 = [2, 5, 10];
let hasil2 = 0;

for (let i = 0; i < data2.length; i++) {
  hasil2 *= data2[i];
}
console.log(hasil2);

// let data2 = [2, 5, 10];
// let hasil2 = 0;

// for (let i = 0; i < data2.length; i++) {
//   hasil2 *= data2[i]; // ini sama aja dengan
//   hasil2 = data2[i] * data2[i]; // ini
// }
// console.log(hasil2);
