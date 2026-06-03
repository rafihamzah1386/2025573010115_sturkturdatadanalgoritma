// 01-linked-list.js
// SINGLY LINKED LIST - IMPLEMENTASI LENGKAP & LATIHAN 1

// Class Node: Unit terkecil Linked List
class Node {
    constructor(data) {
        this.data = data; // Nilai yang disimpan
        this.next = null; // Pointer ke node berikutnya
    }
}

// Class LinkedList
class LinkedList {
    constructor() {
        this.head = null; // Pointer ke node pertama
        this.size = 0;    // Jumlah node
    }

    // Tambah node di AKHIR - O(n)
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Traverse ke akhir
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Tambah node di AWAL - O(1)
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head; // Node baru menunjuk ke head lama
        this.head = newNode;      // Head sekarang adalah node baru
        this.size++;
    }

    // Insert di posisi indeks tertentu - O(n)
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log('Index di luar batas!');
            return;
        }
        if (index === 0) {
            this.prepend(data);
            return;
        }
        const newNode = new Node(data);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    // Hapus node berdasarkan nilai - O(n)
    delete(data) {
        if (!this.head) return false;
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next; // Lewati node yang dihapus
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Cari node berdasarkan nilai - O(n)
    search(data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    // Balik urutan list - O(n)
    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            const next = current.next; // Simpan next sementara
            current.next = prev;       // Balik pointer
            prev = current;            // Geser prev maju
            current = next;            // Geser current maju
        }
        this.head = prev; // Head sekarang adalah node terakhir
    }

    // Tampilkan semua node - O(n)
    print() {
        if (!this.head) {
            console.log('[List kosong]');
            return;
        }
        let result = '';
        let current = this.head;
        while (current) {
            result += `[${current.data}]` + (current.next ? ' -> ' : '');
            current = current.next;
        }
        console.log(`${result} (size: ${this.size})`);
    }

    // Convert ke Array - O(n)
    toArray() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }

    // ==========================================
    // LATIHAN 1: FITUR TAMBAHAN LINKED LIST
    // ==========================================

    // getAt(index) - O(n)
    getAt(index) {
        if (index < 0 || index >= this.size) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    // deleteAt(index) - O(n)
    deleteAt(index) {
        if (index < 0 || index >= this.size) return null;
        let current = this.head;
        if (index === 0) {
            const deletedData = this.head.data;
            this.head = this.head.next;
            this.size--;
            return deletedData;
        }
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        const deletedData = current.next.data;
        current.next = current.next.next;
        this.size--;
        return deletedData;
    }

    // indexOf(data) - O(n)
    indexOf(data) {
        return this.search(data);
    }

    // isEmpty() - O(1)
    isEmpty() {
        return this.size === 0;
    }

    // clear() - O(1)
    clear() {
        this.head = null;
        this.size = 0;
        console.log('List berhasil dikosongkan.');
    }
}

// ==========================================
// DEMONSTRASI & PENGUJIAN
// ==========================================
const ll = new LinkedList();
console.log('=== Append ===');
ll.append(10); ll.append(20); ll.append(30); ll.append(40);
ll.print();

console.log('\n=== Prepend ===');
ll.prepend(5);
ll.print();

console.log('\n=== Insert di indeks 2 ===');
ll.insertAt(15, 2);
ll.print();

console.log('\n=== Search & IndexOf ===');
console.log('Indeks nilai 20 (search):', ll.search(20));
console.log('Indeks nilai 99 (search):', ll.search(99));
console.log('Indeks nilai 30 (indexOf):', ll.indexOf(30));

console.log('\n=== Delete 20 ===');
ll.delete(20);
ll.print();

console.log('\n=== Reverse ===');
ll.reverse();
ll.print();

console.log('\n=== Uji Latihan 1 (getAt & deleteAt) ===');
console.log('Data di indeks 2:', ll.getAt(2));
console.log('Hapus data di indeks 1:', ll.deleteAt(1));
ll.print();

console.log('\n=== Uji IsEmpty & Clear ===');
console.log('Apakah list kosong?', ll.isEmpty());
ll.clear();
ll.print();
console.log('Apakah list kosong sekarang?', ll.isEmpty());