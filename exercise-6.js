// Looping
// Soal looping ini memiliki 3 nomor.

// 1. Melakukan Looping Menggunakan While
//Jawaban :
var angka1 = 2;
var angka2 = 20;

console.log('LOOPING PERTAMA');
while (angka1 <= 20) {
  console.log(`${angka1} - I love coding`);
  angka1 += 2;
};

console.log('LOOPING KEDUA');
while (angka2 >= 2) {
  console.log(`${angka2} - I will become fullstack developer`);
  angka2 -= 2;
}





// 2. Melakukan Looping Menggunakan For
//Jawaban :
console.log('LOOPING PERTAMA');
for (angka = 1; angka <= 20; angka++) {
  console.log(`${angka} - I love coding`);
}

console.log('LOOPING KEDUA');
for (angka = 20; angka >= 1; angka--) {
  console.log(`${angka} - I will become fullstack developer`);
}





// 3. Angka Ganjil dan Genap
//Jawaban :
for (var angka = 1; angka <= 100; angka++) {
    if (angka % 2 === 0) {
      console.log('GENAP')
    } else {
      console.log('GANJIL')
    }
  }
  
for (var angka = 1; angka <= 100; angka += 2) {
    if (angka % 3 === 0) {
      console.log('3 kelipatan 3')
    } else {
      console.log('')
    }
  }
  
for (var angka = 1; angka <= 100; angka += 5) {
    if (angka % 6 === 0) {
      console.log('6 kelipatan 6')
    } else {
      console.log('')
    }
  }
  
for (var angka = 1; angka <= 100; angka += 9) {
    if (angka % 10 === 0) {
      console.log('10 kelipatan 10')
    } else {
      console.log('')
    }
  }