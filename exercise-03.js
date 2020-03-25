var nama = 'Rudy';
var peran = 'Ksatria';

if (nama === '') {
  console.log('Nama harus diisi!');
} else if (peran === 'Ksatria') {
  console.log('Selamat datang di dunia Proxytia, ' + nama + '\nHalo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (peran === 'Tabib') {
  console.log('Selamat datang di dunia Proxytia, ' + nama + '\nHalo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.');
} else if (peran === 'Penyihir') {
  console.log('Selamat datang di dunia Proxytia, ' + nama + '\nHalo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
} else {
  console.log('Halo ' + nama + ', pilih peranmu untuk memulai game!');
}