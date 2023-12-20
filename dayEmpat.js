// all about command git
// git add .
// git commit -m "test"
// git push origin namabranch

//bikin branch baru
// git checkout -b "nama branch"
// git add dayTiga.js
// git switch
// git push origin

//FUNCTION

// budi pergi ke supermarket pada hari sabtu
// belanja susu dengan harga 10k dan chitato 5k dalam struk belanjaan terdapat sub total belanjaan, diskon, total keseluruhan, tunai, kembali.
// jika budi pergi ke supermarket pada hari senin akan dapat diskon 5k

// let product = [
//   {
//     nama: "ultramilk",
//     harga: 5000,
//   },
//   {
//     nama: "Chitato",
//     harga: 10000,
//   },
// ];

// function hitungTransaksi(hari, tunai) {
//   let transaksi = {
//     product: product,
//     subtotal: product[0].harga + product[1].harga,
//     diskon: 0,
//     total: 0,
//     tunai: tunai,
//     kembali: 0, // kenapa harus pake koma ?
//   };
//   if (hari === "jumat") {
//     transaksi.diskon = 1000;
//   }
//   transaksi.total = transaksi.subtotal - transaksi.diskon;
//   transaksi.kembali = tunai - transaksi.total;
//   return transaksi;
// }
// console.log(hitungTransaksi("jumat", 20000));

//hitung volume 2 kubus dengan rumus s*s*s
function hitungVolumeKubus(a, b) {
  let sisiSatu;
  let sisiDua;
  let total;

  sisiSatu = a * a * a;
  sisiDua = b * b * b;

  total = sisiSatu + sisiDua;

  return total;
}
console.log(hitungVolumeKubus(1, 1, 1));

//creates a function that adds two numbers and return the sum make it simpler and remember the refactoring.
function addTwoNumbers(x, y) {
  return x + y;
}
console.log(addTwoNumbers(2, 5));

// buat dengan cara lain
