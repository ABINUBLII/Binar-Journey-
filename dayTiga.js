let a = 1;
let b = "2";
// kita ubah dulu jadi NUMBER biar hasil a + b jadi (3)
b = parseInt(b);
let hasil = a + b;
console.log(hasil); // outputnya 3

//WAKTU

let waktu = new Date(); // let waktu = new Date(); // new Date() ini rumus buat dapetin waktu yang ada di laptop dan disimpan dalam variable waktu
let tahun = waktu.getFullYear();
let bulan = waktu.getMonth();
let tanggal = waktu.getDate();
console.log(tanggal); // ngecek bener ga tanggalnya real
let hari = waktu.getDay();
console.log(hari);
let jam = waktu.getHours();
let menit = waktu.getMinutes();

let dataBulan = [
  "januari",
  "februari",
  "maret",
  "april",
  "may",
  "juni",
  "juli",
  "agustus",
  "september",
  "oktober",
  "november",
  "desember",
];
let dataHari = ["minggu", "senin", "selasa", "rabu", "kamis", "jum'at", "sabtu"];

// // contoh : kita mau bikin 18 Desember 2023
let hasilWaktu = `${tanggal} ${bulan} ${tahun}`;
// console.log(hasilWaktu); // outputnya 18 11 2023 (belum sesuai), kenapa 11 ? karna dihitung dari 0-11

console.log(`${tanggal} ${dataBulan[bulan]} ${tahun}`);
// output : 18 desember 2023, reminder: kita mau call desember dari variable dataBulan,artinya harus pake namaVar[index]

// contoh soal bikin : senin, 18 Desember 2023.
let hasilWaktuDua = `${dataHari[hari]}, ${tanggal} ${dataBulan[bulan]} ${tahun}.`;
console.log(hasilWaktuDua);

//contoh soal bikin : rabu, 18 Januari 2023
let hasilWaktuTiga = `${dataHari[3]}, ${tanggal} ${dataBulan[0]} ${tahun}`;
console.log(hasilWaktuTiga);

// all about command git
// git add .
// git commit -m "test"
// git push

//bikin branch baru

// git checkout -b "nama branch"
// git add .
// git switch
