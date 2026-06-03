// 03-stack-11.js
// IMPLEMENTASI STACK MENGGUNAKAN LINKED LIST (LATIHAN 2)

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackWithLinkedList {
    constructor() {
        this.head = null; // Head bertindak sebagai TOP dari Stack
        this._size = 0;
    }

    // push(data) - O(1): Menambahkan data di awal list (prepend)
    push(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this._size++;
    }

    // pop() - O(1): Menghapus dan mengembalikan elemen dari head
    pop() {
        if (this.isEmpty()) return null;
        const poppedData = this.head.data;
        this.head = this.head.next;
        this._size--;
        return poppedData;
    }

    // peek() - O(1): Melihat elemen teratas tanpa menghapusnya
    peek() {
        if (this.isEmpty()) return null;
        return this.head.data;
    }

    // isEmpty() - O(1)
    isEmpty() {
        return this.head === null;
    }

    // size - O(1) getter
    get size() {
        return this._size;
    }

    // print() - O(n) untuk keperluan cetak visual struktur data
    print() {
        if (this.isEmpty()) {
            console.log('[Stack Kosong]');
            return;
        }
        let current = this.head;
        let result = '';
        while (current) {
            result += `[${current.data}]` + (current.next ? ' -> ' : '');
            current = current.next;
        }
        console.log(`TOP Stack: ${result} (size: ${this._size})`);
    }
}

// ==========================================
// SIMULASI UNDO / REDO (LATIHAN 2 BUTIR 5)
// ==========================================
console.log('=== KONDISI AWAL SIMULASI ===');
const undoStack = new StackWithLinkedList();
const redoStack = new StackWithLinkedList();

// Rangkaian aksi pengetikan dokumen oleh pengguna
const daftarAksi = [
    'Ketik kata pertama "Halo"',
    'Ketik kata kedua "Dunia"',
    'Tambahkan tanda seru "!"',
    'Ubah warna teks ke Merah'
];

console.log('Melakukan rentetan aksi...');
daftarAksi.forEach(aksi => {
    console.log(`-> Melakukan: ${aksi}`);
    undoStack.push(aksi);
});

console.log('\n--- Status Stack Saat Ini ---');
undoStack.print();

// Simulasi aksi UNDO ke-1
console.log('\n=== Menekan Tombol UNDO 1x ===');
let aksiDiUndo = undoStack.pop();
if (aksiDiUndo) {
    console.log(`Membatalkan aksi: "${aksiDiUndo}"`);
    redoStack.push(aksiDiUndo);
}
console.log('Kondisi Stack Sekarang:');
undoStack.print();

// Simulasi aksi UNDO ke-2
console.log('\n=== Menekan Tombol UNDO 2x ===');
aksiDiUndo = undoStack.pop();
if (aksiDiUndo) {
    console.log(`Membatalkan aksi: "${aksiDiUndo}"`);
    redoStack.push(aksiDiUndo);
}
console.log('Kondisi Stack Sekarang:');
undoStack.print();

// Simulasi aksi REDO (Mengembalikan aksi yang dibatalkan)
console.log('\n=== Menekan Tombol REDO 1x ===');
let aksiDiRedo = redoStack.pop();
if (aksiDiRedo) {
    console.log(`Mengembalikan aksi: "${aksiDiRedo}"`);
    undoStack.push(aksiDiRedo);
}
console.log('Kondisi Stack Akhir:');
undoStack.print();