// jelaskan materi code
//1. variable -> const, let, var
// let data = "Rijal";
// const data2 = "samsul";
// var data3 = "samsulLagi";
// let string = 1;

// //2. tipe data string, number, bool
// let data = 25 < 7;
// // console.log(data);
// let data2 = 15 > 36;
// console.log(data || data2);

// let datax = 14 > 7;
// let Datay = 5 <= 5;
// console.log(datax && Datay);

// // LOGICAL AND
// // x	      y	        x and y
// // false	  false	    false
// // false	  true	    false
// // true	    false	  false
// // true	    true	  true

// //LOGICAL OR
// // x	      y	     x or y
// // false	  false	  false
// // false	  true	  true
// // true	    false	  true
// // true	    true	  true

// //3. manipulasi string, contoh replace, subtsring

// //4 kondisi menggunakan if else dan tenary operator ? :
// // jika lampu merah mobil A jalan dst
// // let trafficLight
// // let lampuHijau = {
// //     if (lampuHijau){
// //         console.log("jalan")
// //     } if else(lampuKuning){
// //         console.log ("Hati Hati")
// //     }
// // }
// //5. data object

// //6. data array

// //7. data array object

// //8. function punya parameter
// // cek ongkir
// // user akan memasukan nama wilayahnya
// // jawa barat 10000
// // jawa timur 15000
// // output jumlah ongkir untuk wilayah 10000

// // function cekOngkir(wilayah) {
// //   let hasil;
// //   if (wilayah === "jawa barat") {
// //     // console.log(`jumlah ongkir untuk ${wilayah} 10000`);
// //     hasil = `jumlah ongkir untuk ${wilayah} 10000`;
// //   } else {
// //     // console.log(`jumlah ongkir untuk ${wilayah} 15000`);
// //     hasil = `jumlah ongkir untuk ${wilayah} 15000`;
// //   }
// //   return hasil;
// // }

// // function trafficLight(lightCollor) {
// //   let output;
// //   if (lightCollor === "red") {
// //     console.log("berhenti coy");
// //   } else if (lightCollor === "yellow") {
// //     console.log("siap siap");
// //   } else console.log("jalan");
// // }
// // trafficLight("red");

// // let = "bener";
// let angka = 10;

// switch (angka) {
//   case 1:
//     console.log(`hari selasa`);
//     break;
//   case 2:
//     console.log(`hari rabu`);
//     break;
//   case 3:
//     console.log(`kamis`);
//     break;
//   case 4:
//     console.log(`jumat`);
//     break;
//   default:
//     console.log("gaada");
//     break;
// }

// let perhitungan = 8 + 8;
// switch (perhitungan) {
//   case 1:
//     console.log(8 * 5);
//     break;
//   case 2:
//     console.log(10 + 6);
//     break;
//   default:
//     console.log(2 + 2);
//     break;
// }

function cekTinggiBadan(tinggi) {
  let tipeBadan;
  if (tinggi > 160) {
    tipeBadan = "tinggi";
  } else console.log("pendek");
  return tipeBadan;
}
console.log(cekTinggiBadan(161));

function cekCuaca(kondisi) {
  let cuaca;
  if (kondisi === "hujan") {
    cuaca = "pake payung";
  } else if (kondisi === "mendung") {
    cuaca = "bawa payung biar aman";
  } else console.log("gausah keluar rumah");
  return cuaca;
}
console.log(cekCuaca("badai"));

let hasil;
let;
