// 02-11-lanjutan.js
// OPERASI LANJUTAN: DETEKSI SIKLUS & MERGE DUA LIST

class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

// Deteksi Siklus: Floyd's Algorithm (Fast & Slow Pointer)
function adaSiklus(head) {
    let lambat = head; // Maju 1 langkah
    let cepat = head;  // Maju 2 langkah
    
    while (cepat && cepat.next) {
        lambat = lambat.next;
        cepat = cepat.next.next;
        
        if (lambat === cepat) return true; // Bertemu di dalam siklus
    }
    return false;
}

// Merge dua Linked List yang sudah terurut
function mergeTerurut(head1, head2) {
    const dummy = new Node(0); // Node pembantu
    let current = dummy;
    
    while (head1 && head2) {
        if (head1.data <= head2.data) {
            current.next = head1;
            head1 = head1.next;
        } else {
            current.next = head2;
            head2 = head2.next;
        }
        current = current.next;
    }
    
    current.next = head1 || head2; // Menyambung sisa list yang belum habis
    return dummy.next;
}

// Helper untuk membuat Linked List dari Array
function buatList(arr) {
    if (!arr.length) return null;
    const head = new Node(arr[0]);
    let cur = head;
    for (let i = 1; i < arr.length; i++) {
        cur.next = new Node(arr[i]);
        cur = cur.next;
    }
    return head;
}

// Helper untuk mencetak list
function cetakList(head) {
    let s = '';
    let cur = head;
    while (cur) {
        s += `[${cur.data}]` + (cur.next ? ' -> ' : '');
        cur = cur.next;
    }
    console.log(s);
}

// ==========================================
// PENGUJIAN
// ==========================================

// 1. Test Deteksi Siklus
console.log('=== Test Deteksi Siklus ===');
const A = buatList([1, 2, 3, 4, 5]);
console.log('Ada siklus (seharusnya false):', adaSiklus(A));

// Buat siklus buatan: node 5 menunjuk kembali ke node 2
let temp = A;
while (temp.next) {
    temp = temp.next;
}
temp.next = A.next; // Membuat Loop/Siklus
console.log('Ada siklus (seharusnya true):', adaSiklus(A));

// 2. Test Merge Terurut
console.log('\n=== Test Merge Terurut ===');
const L1 = buatList([1, 3, 5, 7, 9]);
const L2 = buatList([2, 4, 6, 8, 10]);

console.log('List 1:'); cetakList(L1);
console.log('List 2:'); cetakList(L2);

const merged = mergeTerurut(L1, L2);
console.log('Merged Result:');
cetakList(merged);