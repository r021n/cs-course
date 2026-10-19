# Chapter 8 — Kondisi: Membuat Keputusan dengan `if` dan `else`

## Percabangan Dasar: `if` dan `else`

Program sering perlu memilih tindakan berdasarkan keadaan tertentu. Misalnya, jika pengguna sudah masuk, tampilkan halaman utama. Jika belum, tampilkan formulir masuk. Dalam JavaScript, keputusan seperti ini dapat dibuat menggunakan kondisi.

Bayangkan sebuah persimpangan jalan. Kamu melihat tanda, lalu memilih arah berdasarkan informasi yang ada. Kondisi dalam program bekerja dengan cara serupa: JavaScript memeriksa suatu keadaan, lalu menjalankan bagian kode yang sesuai.

### Menjalankan kode jika syarat terpenuhi

Bentuk paling sederhana menggunakan `if`:

```javascript
var cuaca = "hujan";

if (cuaca === "hujan") {
  console.log("Bawa payung.");
}
```

Bagian di dalam tanda kurung, `cuaca === "hujan"`, adalah **kondisi** yang diperiksa. Jika hasilnya benar, yaitu `true`, JavaScript menjalankan kode di dalam kurung kurawal. Jika hasilnya salah, kode di dalam blok tersebut dilewati.

Tanda `===` membandingkan dua nilai beserta tipe datanya. Dalam contoh ini, JavaScript memeriksa apakah nilai `cuaca` sama dengan teks `"hujan"`.

### Menentukan pilihan lain dengan `else`

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

### Pertanyaan

1. Perhatikan kode berikut:
   ```javascript
   var lampu = "merah";

   if (lampu === "hijau") {
     console.log("jalan");
   } else {
     console.log("berhenti");
   }
   ```
   Tuliskan output teks yang dicetak ke konsol dari kode di atas tanpa tanda kutip.
   <!-- Jawaban: `berhenti` -->
2. Perhatikan kode berikut:
   ```javascript
   var akses = true;

   if (akses === true) {
     console.log("Buka pintu");
   } else {
     console.log("Tolak masuk");
   }
   ```
   Tuliskan output teks yang dicetak ke konsol dari kode di atas tanpa tanda kutip.
   <!-- Jawaban: `Buka pintu` -->
3. Lengkapi pernyataan kondisi `if` yang memeriksa apakah nilai variabel `skor` sama persis dengan angka `100`. Tuliskan hanya pernyataan `if` beserta kondisinya di dalam tanda kurung tanpa kurung kurawal pembuka (gunakan spasi tunggal di sekitar `===`).
   <!-- Jawaban: `if (skor === 100)` -->
4. Dalam struktur `if (kondisi) { ... }`, kode di dalam kurung kurawal hanya akan dijalankan jika `kondisi` menghasilkan nilai boolean apa? Jawab hanya dengan `true` atau `false`.
   <!-- Jawaban: `true` -->

---

## Memeriksa Lebih dari Dua Kemungkinan

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

### Pertanyaan

1. Perhatikan kode berikut:
   ```javascript
   var skor = 85;

   if (skor >= 90) {
     console.log("Emas");
   } else if (skor >= 80) {
     console.log("Perak");
   } else if (skor >= 70) {
     console.log("Perunggu");
   } else {
     console.log("Peserta");
   }
   ```
   Tuliskan output teks yang dicetak ke konsol tanpa tanda kutip.
   <!-- Jawaban: `Perak` -->
2. Perhatikan kode berikut:
   ```javascript
   var suhu = 35;

   if (suhu > 20) {
     console.log("Cukup hangat");
   } else if (suhu > 30) {
     console.log("Sangat panas");
   } else {
     console.log("Suhu normal");
   }
   ```
   Karena JavaScript mengecek kondisi dari atas ke bawah dan langsung mengeksekusi blok pertama yang terpenuhi, tuliskan teks yang sebenarnya dicetak ke konsol oleh kode di atas tanpa tanda kutip.
   <!-- Jawaban: `Cukup hangat` -->
3. Perhatikan kode berikut:
   ```javascript
   var angka = 0;

   if (angka > 0) {
     console.log("Bilangan positif");
   } else if (angka < 0) {
     console.log("Bilangan negatif");
   } else {
     console.log("Bilangan nol");
   }
   ```
   Tuliskan output teks yang dicetak ke konsol dari kode di atas tanpa tanda kutip.
   <!-- Jawaban: `Bilangan nol` -->
4. Dalam struktur rantai percabangan `if ... else if ... else`, jika tidak ada satu pun kondisi `if` maupun `else if` yang bernilai `true`, blok manakah yang akan dijalankan oleh JavaScript? Jawab hanya dengan nama kata kuncinya (`if`, `else if`, atau `else`).
   <!-- Jawaban: `else` -->

---

## Operator untuk Membandingkan Nilai

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

### Pertanyaan

1. Perhatikan baris kode berikut:
   ```javascript
   console.log(10 >= 10);
   ```
   Tuliskan nilai boolean yang dicetak ke konsol oleh baris kode di atas (`true` atau `false`).
   <!-- Jawaban: `true` -->
2. Perhatikan dua baris perbandingan berikut:
   ```javascript
   console.log(5 == "5");
   console.log(5 === "5");
   ```
   Tuliskan nilai boolean yang dicetak oleh baris pertama dan baris kedua secara berurutan, dipisahkan oleh satu spasi tanpa tanda kutip.
   <!-- Jawaban: `true false` -->
3. Tuliskan simbol operator perbandingan JavaScript untuk memeriksa "tidak sama dengan" yang turut membandingkan tipe data nilainya (strict not equal).
   <!-- Jawaban: `!==` -->
4. Perhatikan kode berikut:
   ```javascript
   var umur = 18;
   var bolehDaftar = umur >= 17;
   ```
   Tuliskan secara berurutan tipe data dari variabel `bolehDaftar` dan nilai dari variabel `bolehDaftar` yang dihasilkan pada kode di atas, dipisahkan oleh satu spasi tanpa tanda kutip.
   <!-- Jawaban: `boolean true` -->

---

## Menggabungkan Kondisi dan Membaca Kode

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

### Membaca kondisi dalam kode

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

### Pertanyaan

1. Perhatikan kode berikut:
   ```javascript
   var usia = 16;
   var punyaTiket = false;

   if (usia >= 17 && punyaTiket === true) {
     console.log("Boleh masuk");
   } else {
     console.log("Dilarang masuk");
   }
   ```
   Tuliskan teks output yang dicetak ke konsol dari kode di atas tanpa tanda kutip.
   <!-- Jawaban: `Dilarang masuk` -->
2. Perhatikan kode berikut:
   ```javascript
   var sedangLogin = false;
   console.log(!sedangLogin);
   ```
   Tuliskan nilai boolean yang dicetak ke konsol oleh kode di atas (`true` atau `false`).
   <!-- Jawaban: `true` -->
3. Perhatikan kode berikut:
   ```javascript
   var hari = "Minggu";

   if (hari === "Sabtu" || hari === "Minggu") {
     console.log("Hari libur");
   } else {
     console.log("Hari kerja");
   }
   ```
   Tuliskan teks output yang dicetak ke konsol dari kode di atas tanpa tanda kutip.
   <!-- Jawaban: `Hari libur` -->
4. Tuliskan simbol operator logika JavaScript yang mewakili logika "DAN", di mana seluruh kondisi yang digabungkan wajib bernilai benar agar menghasilkan nilai `true`.
   <!-- Jawaban: `&&` -->