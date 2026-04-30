console.log('=== For Loop: Hitung 1 sampai 5 ===');
for (let i = 1; i <= 5; i++) {
    console.log(`Iterasi ke-${i}`);
}


// === WHILE LOOP ===
console.log('\n=== While Loop: Countdown ===');
let hitung = 5;

while (hitung > 0) {
    console.log(`Hitung mundur: ${hitung}`);
    hitung--; // ✅ FIX: harus dikurangi
}

console.log('Selesai!');


// === BILANGAN GENAP ===
console.log('\n=== Bilangan Genap antara 1 - 20 ===');
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        process.stdout.write(i + ' ');
    }
}
console.log('');


// === BREAK DAN CONTINUE ===
console.log('\n=== Break dan Continue ===');
for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        console.log(`Melewati angka ${i} (continue)`);
        continue;
    }
    if (i === 8) {
        console.log(`Berhenti di angka ${i} (break)`);
        break;
    }

    console.log(`Angka: ${i}`);
}


// === LATIHAN 3 ===

// Bagian A — Segitiga Bintang
console.log('\n=== Bagian A: Segitiga Bintang ===');

for (let i = 1; i <= 5; i++) {
    let baris = '';
    for (let j = 1; j <= i; j++) {
        baris += '*';
    }
    console.log(baris);
}


// Bagian B — Bilangan Prima
console.log('\n=== Bagian B: Bilangan Prima 1 - 100 ===');

for (let i = 2; i <= 100; i++) {
    let isPrima = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrima = false;
            break;
        }
    }

    if (isPrima) {
        process.stdout.write(i + ' ');
    }
}
console.log('');