//basic OBJECT

//ARRAY untuk kebutuhan menyimpan data yang sama jenisnya
// array itu ngambilnya dari index, bassic object ngambil dari properties

let namaBuah0 = "mangga"; //  "mangga" itu index namaBuah0 itu properties.
let namaBuah1 = "jambu";
let namaBuah2 = "manggis";
let namaBuah = ["mangga", "jambu", "manggis"];
//kalo mau nambahin sesuatu dalam index berarti :
namaBuah[0] = "rambutan";
namaBuah.push("disini");
namaBuah.push(...["anggur", "biji"]);

console.log(namaBuah);
// kalo ARRAY mau di call itu dimulai dari [0]
console.log(namaBuah[1]);
console.log(namaBuah[2]);
