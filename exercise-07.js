// Looping
// Soal looping - asterisk ini memiliki 3 nomor.

// 1. Menyusun Barisan Bintang
// Jawaban :
console.log(`1. Menyusun Barisan Bintang`);
var rows1 = 5;

for (var angka = 0; angka < rows1; angka++) {
  console.log('*');
}
console.log('\n');





// 2. Menyusun Barisan Bintang Dengan Nested Looping
//Jawaban :
console.log(`2. Menyusun Barisan Bintang Dengan Nested Looping`);
var rows2 = 5;

for (var r2 = 0; r2 < rows2; r2++) {
  var pola2 = '';
  for (var c2 = 0; c2 < rows2; c2++) {
    pola2 += '*';
  }
  console.log(pola2);
}
console.log('\n');





// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
//Jawaban :
console.log(`3. Menyusun Barisan Tangga Bintang Dengan Nested Looping`);
var rows3 = 5;

for (var r3 = 0; r3 < rows3; r3++) {
  var pola3 = '';
  for (var c3 = 0; c3 <= r3; c3++) {
    pola3 += '*';
  }
  console.log(pola3);
}