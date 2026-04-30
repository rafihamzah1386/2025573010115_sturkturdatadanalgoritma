// Deklarasi array dataMahasiswa
const dataMahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 95 },
  { nama: "Dina", nilai: 60 },
  { nama: "Eka", nilai: 78 },
  { nama: "Fajar", nilai: 88 }
];

// Function hitungStatistik
function hitungStatistik(arrMahasiswa) {
  const total = arrMahasiswa.length;

  const jumlahNilai = arrMahasiswa.reduce((acc, mhs) => {
    return acc + mhs.nilai;
  }, 0);

  const rataRata = jumlahNilai / total;

  const tertinggi = arrMahasiswa.reduce((max, mhs) => {
    return mhs.nilai > max ? mhs.nilai : max;
  }, arrMahasiswa[0].nilai);

  const terendah = arrMahasiswa.reduce((min, mhs) => {
    return mhs.nilai < min ? mhs.nilai : min;
  }, arrMahasiswa[0].nilai);

  return {
    total,
    rataRata,
    tertinggi,
    terendah
  };
}

// Function filterLulus
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

// Function tambahGrade
function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map(mhs => {
    let grade = "";

    if (mhs.nilai >= 90) {
      grade = "A";
    } else if (mhs.nilai >= 80) {
      grade = "B";
    } else if (mhs.nilai >= 70) {
      grade = "C";
    } else if (mhs.nilai >= 60) {
      grade = "D";
    } else {
      grade = "E";
    }

    return {
      ...mhs,
      grade
    };
  });
}

// Memanggil function
const statistik = hitungStatistik(dataMahasiswa);
const mahasiswaLulus = filterLulus(dataMahasiswa, 75);
const mahasiswaDenganGrade = tambahGrade(dataMahasiswa);

// Menampilkan hasil
console.log("=== Statistik Mahasiswa ===");
console.log(`Total Mahasiswa : ${statistik.total}`);
console.log(`Rata-rata Nilai : ${statistik.rataRata}`);
console.log(`Nilai Tertinggi : ${statistik.tertinggi}`);
console.log(`Nilai Terendah  : ${statistik.terendah}`);

console.log("\n=== Mahasiswa Lulus ===");
mahasiswaLulus.forEach(mhs => {
  console.log(`${mhs.nama} - ${mhs.nilai}`);
});

console.log("\n=== Mahasiswa dengan Grade ===");
mahasiswaDenganGrade.forEach(mhs => {
  console.log(`${mhs.nama} - Nilai: ${mhs.nilai} - Grade: ${mhs.grade}`);
});