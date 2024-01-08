// jelaskan materi code
//1. variable -> const, let, var
// let data = "Rijal";
// const data2 = "samsul";
// var data3 = "samsulLagi";
// let string = 1;

//2. tipe data string, number, bool
let data = 25 < 7;
// console.log(data);
let data2 = 15 > 36;
console.log(data || data2);

let datax = 14 > 7;
let Datay = 5 <= 5;
console.log(datax && Datay);

// LOGICAL AND
// x	    y	    x and y
// false	false	false
// false	true	false
// true	    false	false
// true	    true	true

//LOGICAL OR
// x	    y	    x or y
// false	false	false
// false	true	true
// true	    false	true
// true	    true	true

//3. manipulasi string, contoh replace, subtsring

//4 kondisi menggunakan if else dan tenary operator ? :
// jika lampu merah mobil A jalan dst
// let trafficLight
// let lampuHijau = {
//     if (lampuHijau){
//         console.log("jalan")
//     } if else(lampuKuning){
//         console.log ("Hati Hati")
//     }
// }
//5. data object

//6. data array

//7. data array object

//8. function punya parameter
// cek ongkir
// user akan memasukan nama wilayahnya
// jawa barat 10000
// jawa timur 15000
// output jumlah ongkir untuk wilayah 10000

function cekOngkir(wilayah) {
  let hasil;
  if (wilayah === "jawa barat") {
    // console.log(`jumlah ongkir untuk ${wilayah} 10000`);
    hasil = `jumlah ongkir untuk ${wilayah} 10000`;
  } else {
    // console.log(`jumlah ongkir untuk ${wilayah} 15000`);
    hasil = `jumlah ongkir untuk ${wilayah} 15000`;
  }
  return hasil;
}

function trafficLight(lightCollor) {
  let output;
  if (lightCollor === "red") {
    console.log("berhenti coy");
  } else if (lightCollor === "yellow") {
    console.log("siap siap");
  } else console.log("jalan");
}
trafficLight("red");
