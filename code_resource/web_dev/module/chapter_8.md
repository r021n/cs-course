# Chapter 8 — Kondisi: Membuat Keputusan dengan `if` dan `else`

Program sering perlu memilih tindakan berdasarkan keadaan tertentu. Misalnya, jika pengguna sudah masuk, tampilkan halaman utama. Jika belum, tampilkan formulir masuk. Dalam JavaScript, keputusan seperti ini dapat dibuat menggunakan kondisi.

Bayangkan sebuah persimpangan jalan. Kamu melihat tanda, lalu memilih arah berdasarkan informasi yang ada. Kondisi dalam program bekerja dengan cara serupa: JavaScript memeriksa suatu keadaan, lalu menjalankan bagian kode yang sesuai.

## Menjalankan kode jika syarat terpenuhi

Bentuk paling sederhana menggunakan `if`:

```javascript
var cuaca = "hujan";

if (cuaca === "hujan") {
  console.log("Bawa payung.");
}
```

Bagian di dalam tanda kurung, `cuaca === "hujan"`, adalah **kondisi** yang diperiksa. Jika hasilnya benar, yaitu `true`, JavaScript menjalankan kode di dalam kurung kurawal. Jika hasilnya salah, kode di dalam blok tersebut dilewati.

Tanda `===` membandingkan dua nilai beserta tipe datanya. Dalam contoh ini, JavaScript memeriksa apakah nilai `cuaca` sama dengan teks `"hujan"`.

## Menentukan pilihan lain dengan `else`

Sering kali program perlu melakukan sesuatu baik ketika kondisi benar maupun ketika kondisi salah. Untuk itu, kita bisa menambahkan `else`.

```javascript
var cuaca = "cerah";

if (cuaca === "hujan") {
  console.log("Bawa payung.");
} else {
  console.log("Tidak perlu membawa payung.");
}
```

JavaScript memeriksa kondisi terlebih dahulu. Jika nilainya `true`, kode pada blok `if` dijalankan. Jika nilainya `false`, kode pada blok `else` yang dijalankan.

Dengan demikian, `if` dan `else` menyediakan dua jalur pilihan. Program memilih salah satunya, bukan menjalankan keduanya.

## Memeriksa lebih dari dua kemungkinan

Jika ada beberapa kemungkinan, gunakan `else if` untuk memeriksa kondisi tambahan.

```javascript
var nilai = 78;

if (nilai >= 85) {
  console.log("Sangat baik");
} else if (nilai >= 70) {
  console.log("Baik");
} else {
  console.log("Perlu belajar lagi");
}
```

JavaScript memeriksa kondisi dari atas ke bawah. Begitu menemukan kondisi yang benar, program menjalankan bloknya dan melewati pilihan setelahnya.

Urutan kondisi penting. Misalnya, jika kondisi `nilai >= 70` ditulis sebelum `nilai >= 85`, nilai `90` akan langsung memenuhi kondisi pertama. Akibatnya, blok “Sangat baik” tidak pernah dijalankan. Jadi, letakkan kondisi dengan ambang nilai yang lebih tinggi (atau yang lebih khusus) lebih dahulu, jika aturan program memerlukannya.

## Operator untuk membandingkan nilai

Kondisi sering menggunakan operator perbandingan. Hasil perbandingan berupa nilai boolean: `true` atau `false`.

```javascript
var umur = 20;

console.log(umur > 17);   // true
console.log(umur === 20); // true
console.log(umur !== 18); // true
```

Beberapa operator yang umum digunakan:

| Operator | Arti |
|---|---|
| `===` | Sama, termasuk tipe datanya |
| `!==` | Tidak sama, termasuk tipe datanya |
| `>` | Lebih besar dari |
| `<` | Lebih kecil dari |
| `>=` | Lebih besar dari atau sama dengan |
| `<=` | Lebih kecil dari atau sama dengan |

Biasakan menggunakan `===` untuk membandingkan nilai. Operator `==` juga membandingkan nilai, tetapi dapat mengubah tipe data secara otomatis. Perubahan tersebut kadang menghasilkan perilaku yang membingungkan bagi pemula.

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

Pada perbandingan pertama, JavaScript menganggap kedua nilai setara setelah penyesuaian tipe. Pada perbandingan kedua, angka `5` dan teks `"5"` berbeda tipe, sehingga hasilnya `false`.

## Menggabungkan kondisi

Kadang sebuah keputusan bergantung pada lebih dari satu syarat. Operator logika dapat menggabungkan kondisi-kondisi tersebut.

Operator `&&` berarti “dan”. Semua kondisi yang digabungkan harus benar.

```javascript
var umur = 25;
var punyaTiket = true;

if (umur >= 18 && punyaTiket === true) {
  console.log("Silakan masuk.");
}
```

Operator `||` berarti “atau”. Cukup satu kondisi yang benar agar hasil gabungannya benar.

```javascript
var hari = "Sabtu";

if (hari === "Sabtu" || hari === "Minggu") {
  console.log("Hari libur.");
}
```

Tanda `!` membalik nilai boolean: `true` menjadi `false`, dan sebaliknya. Karena itu, tanda ini sering dibaca sebagai “bukan”.

```javascript
var sedangLogin = false;

if (!sedangLogin) {
  console.log("Silakan masuk terlebih dahulu.");
}
```

Hindari menulis kondisi yang terlalu panjang dan rumit dalam satu baris hingga sulit dibaca. Beberapa kondisi sederhana yang jelas biasanya lebih mudah diperiksa daripada satu kondisi panjang.

## Membaca kondisi dalam kode

Saat menemukan `if`, mulailah dengan membaca kondisi di dalam tanda kurung: informasi apa yang sedang diperiksa? Setelah itu, lihat blok kodenya: apa yang dilakukan jika kondisi benar? Jika ada `else` atau `else if`, perhatikan pilihan lain yang tersedia.

Sebagai contoh, kode berikut memilih pesan berdasarkan status persediaan:

```javascript
var stok = 0;

if (stok > 0) {
  console.log("Barang tersedia.");
} else {
  console.log("Barang sedang habis.");
}
```

Variabel `stok` dibandingkan dengan angka `0`. Karena kondisinya salah, program menjalankan blok `else`.

Inti dari kondisi adalah memberi program kemampuan memilih tindakan. Nilai yang diperiksa bisa berasal dari variabel, hasil perhitungan, atau masukan pengguna. Pada chapter berikutnya, kita akan melihat bagaimana perulangan digunakan untuk menjalankan instruksi berulang kali—sering kali sambil memeriksa banyak data satu per satu.