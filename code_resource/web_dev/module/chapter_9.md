# Chapter 9 — Perulangan: Menjalankan Instruksi Berulang Kali

Saat program perlu melakukan hal yang sama untuk banyak data, kita tidak perlu menulis instruksinya berkali-kali. Kita bisa menggunakan **perulangan**: sekumpulan instruksi yang dijalankan berulang kali sesuai aturan tertentu.

Misalnya, ada daftar nama yang ingin ditampilkan. Tanpa perulangan, kita harus menulis baris berbeda untuk nama pertama, kedua, ketiga, dan seterusnya. Kalau jumlah nama berubah, kode pun harus diubah. Perulangan membuat program bisa memproses daftar itu satu per satu, berapa pun jumlah isinya.

## Perulangan `for`

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

## Mengapa mulai dari nol dan memakai `<`?

Indeks array dimulai dari `0`, sementara jumlah elemennya dihitung mulai dari `1`. Jika array memiliki tiga elemen, indeksnya adalah `0`, `1`, dan `2`; nilai `namaHewan.length` adalah `3`.

Itulah sebabnya kondisinya biasanya menggunakan `i < namaHewan.length`, bukan `i <= namaHewan.length`. Jika menggunakan `<=`, perulangan juga akan mencoba membaca indeks `3`, padahal tidak ada elemen pada posisi itu. Kesalahan seperti ini umum terjadi saat pertama kali belajar perulangan.

## Apa yang dilakukan di setiap putaran?

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

## Membaca perulangan pada kode yang dipelajari

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