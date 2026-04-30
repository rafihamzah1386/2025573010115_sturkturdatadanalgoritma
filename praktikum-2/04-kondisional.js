let nilaiUjian = 78;

console.log('=== Konversi Grade ===');
console.log('Nilai:', nilaiUjian);

if (nilaiUjian >= 90) {
    console.log('Grade: A (Sangat Baik)');
} else if (nilaiUjian >= 80) {
    console.log('Grade: B (Baik)');
} else if (nilaiUjian >= 70) {
    console.log('Grade: C (Cukup)');
} else if (nilaiUjian >= 60) {
    console.log('Grade: D (Kurang)');
} else {
    console.log('Grade: E (Tidak Lulus)');
}

let namahari = 'Rabu';

console.log('\n=== Cek Jenis Hari ===');
switch (namahari) {
    case 'Senin':
    case 'Selasa':
    case 'Rabu':
    case 'Kamis':
    case 'Jumat':
        console.log(`${namahari} adalah hari kerja.`);
        break;
    case 'Sabtu':
    case 'Minggu':
        console.log(`${namahari} adalah akhir pekan.`);
        break;
    default:
        console.log('Nama hari tidak dikenali.');
}

let nilaiAkhir = 65;
let statusLulus = nilaiAkhir >= 60 ? 'LULUS' : 'TIDAK LULUS';

console.log('\n=== Status Kelulusan ===');
console.log(`Nilai ${nilaiAkhir}: ${statusLulus}`);


//LATIHAN 4 : Konverter Musim dan Status Cuaca ---

// 2. Deklarasikan variabel bulan
const bulan = 7; 

// 3. Menentukan musim menggunakan if/else if/else
console.log('\n=== Penentuan Musim ===');
let musim;

if (bulan === 12 || bulan === 1 || bulan === 2) {
    musim = 'Dingin';
} else if (bulan >= 3 && bulan <= 5) {
    musim = 'Semi';
} else if (bulan >= 6 && bulan <= 8) {
    musim = 'Panas';
} else if (bulan >= 9 && bulan <= 11) {
    musim = 'Gugur';
} else {
    musim = 'Bulan tidak valid';
}

console.log(`Bulan ${bulan} adalah musim ${musim}.`);

// 4. Deklarasikan variabel boolean
const adaAwan = true;
const adaAngin = false;

// 5 & 6. Menggunakan operator logika dan template literal untuk output
console.log('\n=== Status Cuaca ===');

// Apakah cuaca mendung sekaligus berangin?
console.log(`Apakah mendung dan berangin? ${adaAwan && adaAngin}`);

// Apakah ada awan atau angin?
console.log(`Apakah ada awan atau angin? ${adaAwan || adaAngin}`);

// Apakah langit cerah (tidak ada awan)?
console.log(`Apakah langit cerah? ${!adaAwan}`);