//array

// let warna = ["merah", "kuning", "hijau", "kelabu"];

// // console.log(warna);
// // console.log(warna.length);
// // console.log(warna[1]);

// // warna[2] = "hitam";
// // console.log(warna);
// warna.unshift("ungu");
// console.log(warna);

// //ini pake function biasa
// // warna.forEach(function (params) {
// //   console.log(params);
// // });
// // for looping standar
// // for (let i = 0; i < warna.length; i++) {
// //   console.log(warna[i], "standar");
// // }

// // // diubah ke arrow function
// // warna.forEach((params) => console.log(params));

// // contoh filter pake arrow function di array
// let filterWarna = warna.filter((params) => params === "kuning");
// console.log(filterWarna, "arrow  function");

// // buatlah contoh angka 1-10 dalam array lalu filter yg outputnya lebih dari 2

// let angka = [1, 2, 3, 4];

// let resultFilter = angka.filter((params) => params > 2);
// console.log(resultFilter);

// // array method .find buat nyari apa yang dicari
// let warnaFind = warna.find((params) => params === "kuning");
// console.log(warnaFind);

// // array method .map
// let resultMap = angka.map((params) => {
//   return params * 2;
// });
// console.log(resultMap);

// // array method .concat
// let mamals = ["kucing", "macan"];
// let birds = ["elang", "penguin"];

// let binatang = mamals.concat(birds);
// console.log(binatang);

// //contoh 2
// let mamals1 = ["kucing", "macan"];
// let birds1 = ["elang", "penguin"];

// let binatang1 = birds1.concat(mamals1);
// console.log(binatang1);

// separator method.
let warna = ["merah", "kuning", "hijau", "kelabu"];
let warnaBaru = [...warna];

warnaBaru.push("putih");
console.log(warna);
console.log(warnaBaru);

//buat data perulanagan dengan forEach
// filter, sort, find
