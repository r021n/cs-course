# Chapter 9 — Perulangan: Menjalankan Instruksi Berulang Kali

## Dasar Perulangan for

Saat program perlu melakukan hal yang sama untuk banyak data, kita tidak perlu menulis instruksinya berkali-kali. Kita bisa menggunakan **perulangan**: sekumpulan instruksi yang dijalankan berulang kali sesuai aturan tertentu.

Misalnya, ada daftar nama yang ingin ditampilkan. Tanpa perulangan, kita harus menulis baris berbeda untuk nama pertama, kedua, ketiga, dan seterusnya. Kalau jumlah nama berubah, kode pun harus diubah. Perulangan membuat program bisa memproses daftar itu satu per satu, berapa pun jumlah isinya.

Salah satu bentuk perulangan yang umum di JavaScript adalah `for`.

```javascript
var namaHewan = ["Kucing", "Burung", "Ikan"];

for (var i = 0; i < namaHewan.length; i++) {
  console.log(namaHewan[i]);
}
```

Kode ini menampilkan setiap nama hewan. Perulangan membaca isi array dengan indeks: pertama indeks `0`, lalu `1`, kemudian `2`.

Bagian di dalam tanda kurung pada `for` mengatur bagaimana perulangan berjalan:

```javascript
for (var i = 0; i < namaHewan.length; i++)
```

Di awal, `var i = 0` membuat penghitung bernama `i` dan menginisialisasinya dengan nilai `0`. Sebelum setiap putaran, JavaScript memeriksa kondisi `i < namaHewan.length`. Jika kondisinya benar, kode di dalam kurung kurawal dijalankan. Setelah satu putaran selesai, `i++` menambah nilai `i` sebanyak satu. Lalu kondisi diperiksa lagi.

Dengan array yang berisi tiga nama, alurnya seperti ini:

| Nilai `i` | Kondisi yang diperiksa | Nilai yang diambil |
|---:|---|---|
| 0 | `0 < 3` — benar | `namaHewan[0]` |
| 1 | `1 < 3` — benar | `namaHewan[1]` |
| 2 | `2 < 3` — benar | `namaHewan[2]` |
| 3 | `3 < 3` — salah | Perulangan berhenti |

Perulangan berhenti karena kondisinya tidak lagi terpenuhi. Dengan demikian, perulangan berhasil membaca semua indeks yang tersedia, dari `0` sampai indeks terakhir.

### Pertanyaan

1. Perhatikan perulangan berikut:
   ```javascript
   var buah = ["Apel", "Jeruk", "Mangga", "Pisang"];
   for (var i = 0; i < buah.length; i++) {
     // instruksi
   }
   ```
   Berapakah nilai variabel `i` pada saat kondisi `i < buah.length` pertama kali menghasilkan `false` sehingga perulangan berhenti?
   <!-- Jawaban: `4` -->
2. Perhatikan perulangan berikut:
   ```javascript
   var hewan = ["Kambing", "Sapi", "Kuda"];
   for (var i = 0; i < hewan.length; i++) {
     console.log(i);
   }
   ```
   Tuliskan angka yang dicetak ke konsol secara berurutan dari putaran pertama hingga selesai, dipisahkan hanya oleh satu spasi.
   <!-- Jawaban: `0 1 2` -->
3. Diberikan array `var data = ["A", "B", "C"];`. Berapa kalikah kode di dalam kurung kurawal pada `for (var i = 0; i < data.length; i++)` akan dijalankan?
   <!-- Jawaban: `3` -->

---

## Mengapa Mulai dari Nol dan Memakai < ?

Indeks array dimulai dari `0`, sementara jumlah elemennya dihitung mulai dari `1`. Jika array memiliki tiga elemen, indeksnya adalah `0`, `1`, dan `2`; nilai `namaHewan.length` adalah `3`.

Itulah sebabnya kondisinya biasanya menggunakan `i < namaHewan.length`, bukan `i <= namaHewan.length`. Jika menggunakan `<=`, perulangan juga akan mencoba membaca indeks `3`, padahal tidak ada elemen pada posisi itu. Kesalahan seperti ini umum terjadi saat pertama kali belajar perulangan.

### Pertanyaan

1. Perhatikan kode berikut:
   ```javascript
   var warna = ["Merah", "Kuning", "Hijau"];
   for (var i = 0; i <= warna.length; i++) {
     // instruksi
   }
   ```
   Jika perulangan menggunakan operator `<=` seperti di atas, berapakah indeks terakhir dari array `warna` yang akan coba dibaca oleh perulangan tersebut?
   <!-- Jawaban: `3` -->
2. Perhatikan kode yang salah dalam menentukan kondisi batas perulangan berikut:
   ```javascript
   var nama = ["Andi", "Budi"];
   for (var i = 0; i <= nama.length; i++) {
     console.log(nama[i]);
   }
   ```
   Tuliskan seluruh nilai yang dicetak ke konsol dari putaran pertama hingga perulangan selesai, secara berurutan dipisahkan hanya oleh satu spasi tanpa tanda kutip.
   <!-- Jawaban: `Andi Budi undefined` -->
3. Diberikan array `var data = ["X", "Y", "Z", "W"];`. Jika perulangan dirancang membaca semua elemen array dari indeks `0` hingga elemen terakhir tanpa menghasilkan `undefined`, operator relasional manakah yang tepat digunakan di antara `i` dan `data.length` (`<` atau `<=`)? Tuliskan hanya simbol operator tersebut.
   <!-- Jawaban: `<` -->

---

## Apa yang Dilakukan di Setiap Putaran?

Perulangan tidak menentukan sendiri apa yang harus dilakukan terhadap data. Ia hanya menjalankan kode di dalam kurung kurawal berulang kali. Pada contoh sebelumnya, instruksi yang diulang adalah:

```javascript
console.log(namaHewan[i]);
```

Karena nilai `i` berubah setiap putaran, program mengambil elemen yang berbeda. Kode di dalam perulangan juga bisa melakukan hal lain, misalnya memeriksa nilai, menghitung jumlah, atau memperbarui tampilan halaman.

Contohnya, program berikut menghitung total angka dalam array:

```javascript
var angka = [4, 7, 2];
var total = 0;

for (var i = 0; i < angka.length; i++) {
  total = total + angka[i];
}

console.log(total); // 13
```

Pada setiap putaran, nilai di posisi `i` ditambahkan ke `total`. Setelah semua angka dijumlahkan, nilai `total` menjadi `13`.

### Pertanyaan

1. Perhatikan kode perhitungan berikut:
   ```javascript
   var bilangan = [5, 10, 15];
   var hasil = 0;

   for (var i = 0; i < bilangan.length; i++) {
     hasil = hasil + bilangan[i];
   }
   ```
   Berapakah nilai akhir yang tersimpan di dalam variabel `hasil` setelah perulangan selesai?
   <!-- Jawaban: `30` -->
2. Perhatikan kode berikut:
   ```javascript
   var angka = [3, 5, 2];
   var total = 0;

   for (var i = 0; i < angka.length; i++) {
     total = total + angka[i];
     console.log(total);
   }
   ```
   Tuliskan nilai `total` yang dicetak ke konsol pada setiap putaran perulangan secara berurutan dipisahkan hanya oleh satu spasi.
   <!-- Jawaban: `3 8 10` -->
3. Perhatikan kode berikut:
   ```javascript
   var item = ["Buku", "Penggaris", "Penghapus"];
   var hitung = 0;

   for (var i = 0; i < item.length; i++) {
     hitung = hitung + 1;
   }
   ```
   Berapakah nilai akhir dari variabel `hitung` setelah seluruh putaran selesai?
   <!-- Jawaban: `3` -->

---

## Membaca Perulangan pada Kode Program

Dalam kode Jajan Tracker, perulangannya berbentuk seperti ini:

```javascript
for (var i = 0; i < listNama.length; i++) {
  var teks = "<p>" + listNama[i] + " - " + listHarga[i] + "</p>";

  if (listHarga[i] <= uang) {
    document.getElementById("bisa").innerHTML += teks;
  } else {
    document.getElementById("belum").innerHTML += teks;
  }
}
```

Perulangan berjalan sebanyak jumlah elemen dalam `listNama`. Pada setiap putaran, nilai `i` digunakan untuk mengambil satu nama dan harga dari posisi yang sama. Setelah itu, kondisi `if` menentukan bagian kode mana yang dijalankan.

Peran masing-masing perlu dipahami: `for` mengulang pekerjaan untuk setiap data, sedangkan `if/else` memilih tindakan untuk data yang sedang diperiksa. Keduanya menjalankan peran yang berbeda, meskipun sering digunakan bersama.

Saat membaca perulangan, coba cari tiga hal: di mana penghitung dimulai, kondisi apa yang membuat perulangan berlanjut, dan bagaimana penghitung berubah. Setelah itu, perhatikan instruksi di dalam kurung kurawal—itulah pekerjaan yang dilakukan pada setiap putaran.

### Pertanyaan

1. Perhatikan kode seleksi data berikut:
   ```javascript
   var listNama = ["Donat", "Bakso", "Permen"];
   var listHarga = [3000, 10000, 1000];
   var uang = 5000;
   var terbeli = "";

   for (var i = 0; i < listNama.length; i++) {
     if (listHarga[i] <= uang) {
       terbeli = terbeli + listNama[i] + " ";
     }
   }
   ```
   Berdasarkan kondisi `listHarga[i] <= uang`, tuliskan nama jajan apa saja yang masuk ke dalam variabel `terbeli` secara berurutan dipisahkan hanya oleh satu spasi tanpa tanda kutip dan tanpa spasi di akhir.
   <!-- Jawaban: `Donat Permen` -->
2. Perhatikan potongan kode berikut:
   ```javascript
   var listNama = ["Susu", "Roti", "Kue"];
   var listHarga = [8000, 5000, 7000];
   var uang = 6000;
   var countElse = 0;

   for (var i = 0; i < listNama.length; i++) {
     if (listHarga[i] <= uang) {
       // bagian if
     } else {
       countElse = countElse + 1;
     }
   }
   ```
   Berapakah nilai akhir dari variabel `countElse` setelah perulangan selesai?
   <!-- Jawaban: `2` -->
3. Perhatikan potongan kode berikut:
   ```javascript
   var menu = ["Es Jeruk", "Kopi", "Teh"];
   var harga = [4000, 6000, 3000];
   var uang = 5000;

   for (var i = 0; i < menu.length; i++) {
     if (harga[i] <= uang) {
       console.log("bisa");
     } else {
       console.log("belum");
     }
   }
   ```
   Tuliskan output kata yang dicetak ke konsol untuk ketiga minuman tersebut secara berurutan dipisahkan hanya oleh satu spasi tanpa tanda kutip.
   <!-- Jawaban: `bisa belum bisa` -->