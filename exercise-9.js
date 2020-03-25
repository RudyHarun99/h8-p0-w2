// Mengenal Penggunaan Function
// Objectives
// Mampu memahami serta mengimplementasi penggunaan function pada JavaScript
// Directions
// Lanjutkan kode berikut ini hingga dapat menampilkan nilai / output yang diminta!



// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", yang kemudian akan ditampilkan di console.
//Jawaban :
function shoutOut() {
    return 'Halo Function!';
  }

console.log(`=== Tugas 1 ===`);
console.log(shoutOut() + '\n');





// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.
//Jawaban :
function calculateMultiply(angka1, angka2) {
    return angka1 * angka2;
  }
  
var num1 = 5;
var num2 = 6;
  
var hasilPerkalian = calculateMultiply(num1, num2);

console.log(`=== Tugas 2 ===`);
console.log(hasilPerkalian + '\n');





// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"
//Jawaban :
function processSentence(nama, usia, alamat, hobi) {
  return `Nama saya ${nama}, umur saya ${usia} tahun, alamat saya di ${alamat}, dan saya punya hobby yaitu ${hobi}!`;
}

var name = 'Agus';
var age = 30;
var address = 'Jln. Malioboro, Yogjakarta';
var hobby = 'gaming';

var fullSentence = processSentence(name, age, address, hobby);

console.log(`=== Tugas 3 ===`)
console.log(fullSentence);