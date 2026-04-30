let namaMahasiswa = 'rafi hazmah';
let programStudi = "Teknik Informatika";

let perkenalan = `Halo! Nama saya ${namaMahasiswa} dari ${programStudi}.`;
console.log(perkenalan);
console.log('Panjang nama:', namaMahasiswa.length); // property .length

let nilaiUjian = 87;         
let ipk        = 3.75;       
let suhuKulkas = -4;         

console.log('Nilai Ujian :', nilaiUjian);
console.log('IPK         :', ipk);
console.log('Suhu Kulkas :', suhuKulkas);

let sudahLogin = true;
let sudahLulus = false;

console.log('Sudah login :', sudahLogin);
console.log('Sudah lulus :', sudahLulus);

let fotoProfil = null;    // belum ada foto
console.log('Foto profil:', fotoProfil);

let nomorTelepon;
console.log('No. Telepon:', nomorTelepon);

console.log('--- Tipe Data ---');
console.log('namaMahasiswa :', typeof namaMahasiswa); // string
console.log('nilaiUjian    :', typeof nilaiUjian);    // number
console.log('sudahLogin    :', typeof sudahLogin);    // boolean
console.log('fotoProfil    :', typeof fotoProfil);    // object <- keanehan JS!
console.log('nomorTelepon  :', typeof nomorTelepon);  // undefined