// === TUGAS 2: BMI (Versi Standar) ===

// Data
const beratBadan = 68;     // kg
const tinggiBadan = 1.72;  // meter

// Hitung BMI
let bmi = beratBadan / (tinggiBadan * tinggiBadan);

// Tampilkan BMI
console.log("=== HASIL BMI ===");
console.log("Berat Badan :", beratBadan, "kg");
console.log("Tinggi Badan:", tinggiBadan, "m");
console.log("BMI         :", bmi.toFixed(2));

// Kategori
let kategori = "";

if (bmi < 18.5) {
    kategori = "Kurus (Underweight)";
} else if (bmi <= 24.9) {
    kategori = "Normal (Ideal)";
} else if (bmi <= 29.9) {
    kategori = "Kelebihan Berat Badan (Overweight)";
} else {
    kategori = "Obesitas (Obese)";
}

console.log("Kategori    :", kategori);