// Latihan 1 — Identifikasi Kompleksitas
    const mulai = Date.now();
    fn(n);
    const selesai = Date.now();
    console.log(`${fn.name} (${n}) : ${selesai - mulai} ms`);
}

// =====================================================
// Fungsi A
// Big O: O(1)
// Karena hanya melakukan satu operasi matematika.
// =====================================================
function fungsiA(n) {
    return n * 2;
}

// =====================================================
// Fungsi B
// Big O: O(n²)
// Karena terdapat nested loop.
// =====================================================
function fungsiB(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// =====================================================
// Fungsi C
// Big O: O(log n)
// Karena nilai i dikali 2 setiap iterasi.
// =====================================================
function fungsiC(n) {
    for (let i = 1; i < n; i *= 2) {
        console.log(i);
    }
}

// =====================================================
// Fungsi D
// Big O: O(n³)
// Karena terdapat tiga nested loop.
// =====================================================
function fungsiD(n) {
    const arr = Array.from({ length: n }, (_, i) => i);

    arr.forEach(x => {
        arr.forEach(y => {
            arr.forEach(z => {
                console.log(x, y, z);
            });
        });
    });
}

// =====================
// Pengujian
// =====================
const n = 1000;

hitungKompleksitas(n, fungsiA);
hitungKompleksitas(100, fungsiB);
hitungKompleksitas(n, fungsiC);
hitungKompleksitas(20, fungsiD);