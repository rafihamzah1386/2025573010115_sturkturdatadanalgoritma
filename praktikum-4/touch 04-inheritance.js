class Kendaraan {
    constructor(merk, model, tahun) {
        this.merk = merk;
        this.model = model;
        this.tahun = tahun;
        this.kecepatanSaatIni = 0;
    }

    akselerasi(tambahan) {
        this.kecepatanSaatIni += tambahan;
        console.log(`${this.merk} ${this.model}: ${this.kecepatanSaatIni}`);
    }

    rem() {
        this.kecepatanSaatIni = 0;
    }

    info() {
        return `${this.tahun} ${this.merk} ${this.model}`;
    }
}

class Mobil extends Kendaraan {
    constructor(merk, model, tahun, jumlahPintu) {
        super(merk, model, tahun);
        this.jumlahPintu = jumlahPintu;
    }

    bunyikanKlakson() {
        console.log('Beep beep!');
    }

    info() {
        return `${super.info()} (${this.jumlahPintu} pintu)`;
    }
}

class Motor extends Kendaraan {
    constructor(merk, model, tahun, jenisMotor) {
        super(merk, model, tahun);
        this.jenisMotor = jenisMotor;
    }

    wheelie() {
        console.log('Wheelie!');
    }

    info() {
        return `${super.info()} [${this.jenisMotor}]`;
    }
}

const mobil = new Mobil('Toyota', 'Avanza', 2022, 4);
const motor = new Motor('Honda', 'CBR', 2021, 'Sport');

console.log(mobil.info());
console.log(motor.info());

console.log('\n=== Aksi ==='); 
mobil.akselerasi(60);   
mobil.bunyikanKlakson(); 

motor.akselerasi(80); 
motor.wheelie(); 
motor.rem(); 

console.log('\n=== instanceof ==='); 
console.log('mobil instanceof Mobil     :', mobil instanceof Mobil);       // true 
console.log('mobil instanceof Kendaraan :', mobil instanceof Kendaraan);   // true! 
console.log('motor instanceof Mobil     :', motor instanceof Mobil);       // false 
  

console.log('\n=== Polymorphism ==='); 
const semuaKendaraan = [mobil, motor]; 
semuaKendaraan.forEach(k => console.log(k.info()));


// ================= LATIHAN 4 =================

console.log('\n=== LATIHAN 4 ===');

class Hewan {
    constructor(nama, suara) {
        this.nama = nama;
        this.suara = suara;
    }

    bersuara() {
        console.log(`${this.nama} berkata: ${this.suara}`);
    }

    info() {
        return `Nama: ${this.nama}`;
    }
}

class Anjing extends Hewan {
    fetch() {
        console.log(`${this.nama} mengambil bola!`);
    }

    info() {
        return `${super.info()} (jenis: anjing)`;
    }
}

class Kucing extends Hewan {
    cakarSofa() {
        console.log(`${this.nama} mencakar sofa!`);
    }

    bersuara() {
        super.bersuara();
        console.log('Purrr...');
    }
}

// instance
const anjing1 = new Anjing('Doggy', 'Guk guk');
const anjing2 = new Anjing('Bruno', 'Woof');

const kucing1 = new Kucing('Kitty', 'Meong');
const kucing2 = new Kucing('Milo', 'Miaw');

const semuaHewan = [anjing1, anjing2, kucing1, kucing2];

// polymorphism
semuaHewan.forEach(h => {
    h.bersuara();
    console.log(h.info());
});