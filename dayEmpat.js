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
// function hitungVolumeKubus(a, b) {
//   let sisiSatu;
//   let sisiDua;
//   let total;

//   sisiSatu = a * a * a;
//   sisiDua = b * b * b;

//   total = sisiSatu + sisiDua;

//   return total;
// }
// console.log(hitungVolumeKubus(1, 1, 1));

//creates a function that adds two numbers and return the sum make it simpler and remember the refactoring.
// function addTwoNumbers(x, y) {
//   return x + y;
// }
// console.log(addTwoNumbers(2, 5));

// // buat dengan cara lain
// function addTwoNumbs(numb1, numb2) {
//   let total;
//   total = numb1 + numb2;

//   return total;
// }
// console.log(addTwoNumbs(5, 5));

//create a function that multiplys three numbers and console log the product

// function multNumbs(a, b, c) {
//   let totalMult;
//   totalMult = a * b * c;

//   return totalMult;
// }
// console.log(multNumbs(5, 2, 1));

// create a function that divide 2 numbers and console log the product
// function divideTwoNumbs(a, b) {
//   let total;
//   total = a / b;

//   return total;
// }
// console.log(divideTwoNumbs(10, 2));

//jamming session
// user bayar dengan uang 50k
// diskon hari jumat 10k
// ada 2 params ( uang dan hari )
// outputnya : prduknya apa aja,
// subtotal
//diskon
// kembalian
let produk = [
  {
    nama: "ultramilk",
    harga: 6900,
  },
  {
    nama: "chitato",
    harga: 11500,
  },
];

function hitungTransaksi(hari, tunai) {
  let transaksi = {
    produk: produk,
    subtotal: produk[0].harga + produk[1].harga,
    diskon: 0,
    total: 0,
    tunai: tunai,
    kembalian: 0,
  };
  if (hari === "jumat") {
    transaksi.diskon = 10000; // cara ganti nominal dalam array yg tersimpan pada variable
  }
  transaksi.total = transaksi.subtotal - transaksi.diskon;
  transaksi.kembalian = tunai - transaksi.total;

  return transaksi;
}
console.log(hitungTransaksi("jumat", 50000));

//brain jamming
// dalam struk belanjaan ada kopi, kecubung, gele, kokain
// user bayar dengan uang 50k
// outputnya :
// prduknya apa aja,
// total item yg dibeli
// subtotal = total belanjaannya
// total setelah dipotong disc
// jika belanja lebih dari 100k discount 20k

let itemBelanja = [
  {
    item: "kopi",
    totalItem: 3,
    harga: 10000,
  },
  {
    item: "gele",
    totalItem: 10,
    harga: 20000,
  },
];
// console.log(itemBelanja);

function belanjaan(tunai) {
  let rumusFunction = {
    itemBelanja: itemBelanja,
    subtotal:
      itemBelanja[0].harga * itemBelanja[0].totalItem +
      itemBelanja[1].harga * itemBelanja[1].totalItem,
    totalPembelian: itemBelanja[0].totalItem + itemBelanja[1].totalItem,
    total: 0,
    diskon: 0,
    kembalian: 0,
  };
  if (rumusFunction.subtotal > 100000) {
    rumusFunction.diskon = 100000;
  } else {
    rumusFunction.diskon = 0;
  }
  rumusFunction.total = rumusFunction.subtotal - rumusFunction.diskon; // rumus hitung total
  rumusFunction.kembalian = tunai - rumusFunction.total; // rumus hitung kembalian`
  totalDiskon = rumusFunction.subtotal;
  return rumusFunction;
}
console.log(belanjaan(300000));
