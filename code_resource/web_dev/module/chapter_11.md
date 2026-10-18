# Chapter 11 — Fungsi: Memberi Nama pada Sebuah Tugas

Saat program mulai bertambah panjang, kita mungkin perlu menjalankan beberapa langkah sebagai satu kesatuan. Daripada menulis langkah-langkah itu berulang kali, kita dapat mengelompokkannya ke dalam **fungsi**.

Fungsi adalah bagian program yang diberi nama dan dapat dijalankan saat dibutuhkan. Bayangkan fungsi seperti tombol pada mesin kopi: kamu menekan tombol “buat kopi”, lalu mesin menjalankan serangkaian langkah. Nama fungsi memberi tahu kita tugas apa yang akan dilakukan, tanpa harus membaca semua langkahnya setiap kali.

## Membuat dan memanggil fungsi

Berikut fungsi sederhana:

```javascript
function sapa() {
  console.log("Halo!");
}
```

Kode itu **mendefinisikan** fungsi bernama `sapa`. Namun, mendefinisikan fungsi tidak langsung menjalankan isinya. Untuk menjalankannya, kita perlu **memanggil** fungsi tersebut:

```javascript
sapa();
```

Tanda kurung setelah nama fungsi menunjukkan bahwa fungsi sedang dipanggil. Ketika baris itu dijalankan, JavaScript menjalankan instruksi di dalam badan fungsi.

Pemisahan antara mendefinisikan dan memanggil fungsi membuat kita bisa menentukan kapan sebuah tugas dilakukan. Fungsi yang sama juga dapat dipanggil lebih dari sekali:

```javascript
sapa();
sapa();
```

Fungsi `sapa` akan dijalankan dua kali.

## Fungsi dengan parameter

Kadang fungsi perlu menerima informasi agar bisa melakukan tugasnya. Informasi tersebut dapat diberikan melalui **parameter**.

```javascript
function sapa(nama) {
  console.log("Halo, " + nama + "!");
}
```

`nama` adalah parameter: semacam tempat untuk menerima nilai. Saat fungsi dipanggil, kita memberikan nilai sebagai argumen:

```javascript
sapa("Rani");
sapa("Dimas");
```

Pemanggilan pertama menghasilkan `Halo, Rani!`, sedangkan pemanggilan kedua menghasilkan `Halo, Dimas!`. Fungsi yang sama dapat melakukan tugas untuk nilai yang berbeda.

Fungsi juga bisa menerima beberapa parameter:

```javascript
function jumlahkan(angkaPertama, angkaKedua) {
  console.log(angkaPertama + angkaKedua);
}

jumlahkan(4, 6);
```

Di sini, `angkaPertama` dan `angkaKedua` adalah parameter. Nilai `4` dan `6` adalah argumen yang diberikan saat fungsi dipanggil.

## Mengembalikan hasil dengan `return`

Tidak semua fungsi hanya menampilkan pesan. Ada fungsi yang menghitung atau mengolah nilai, lalu memberikan hasilnya kembali menggunakan `return`.

```javascript
function jumlahkan(angkaPertama, angkaKedua) {
  return angkaPertama + angkaKedua;
}

var hasil = jumlahkan(4, 6);
console.log(hasil);
```

Fungsi tersebut menghitung penjumlahan dan mengembalikan hasilnya. Nilai yang dikembalikan kemudian disimpan dalam variabel `hasil`.

Perhatikan bedanya dengan fungsi berikut:

```javascript
function jumlahkanDanTampilkan(angkaPertama, angkaKedua) {
  console.log(angkaPertama + angkaKedua);
}
```

Fungsi itu menampilkan hasil ke konsol, tetapi tidak mengembalikan hasil untuk digunakan oleh kode lain. `console.log()` berguna untuk menampilkan informasi saat menguji atau memeriksa program. `return` berguna ketika hasil fungsi perlu dipakai lagi.

## Memecah pekerjaan menjadi beberapa fungsi

Sebuah program sebaiknya memiliki fungsi-fungsi dengan tugas yang jelas dan terpisah. Misalnya, menghitung luas dapat dijadikan satu fungsi tersendiri.

```javascript
function hitungLuasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

var luas = hitungLuasPersegiPanjang(8, 3);
console.log(luas);
```

Fungsi tersebut menerima panjang dan lebar, kemudian mengembalikan hasil perkaliannya. Nama `hitungLuasPersegiPanjang` memberi petunjuk tentang tugasnya.

Fungsi yang punya satu tugas jelas biasanya lebih mudah dibaca dan diperbaiki. Kalau sebuah fungsi terlalu panjang atau melakukan banyak hal yang tidak berkaitan, kita bisa mempertimbangkan untuk membaginya menjadi beberapa fungsi.

## Membaca fungsi pada kode yang kamu lampirkan

Kode Jajan Tracker mendefinisikan dua fungsi:

```javascript
function tambah() {
  var n = document.getElementById("nama").value;
  var h = document.getElementById("harga").value;

  listNama.push(n);
  listHarga.push(Number(h));

  cek();
}
```

Fungsi `tambah()` menjalankan beberapa langkah: mengambil nama dan harga dari kolom masukan, menyimpan keduanya ke dalam array, lalu memanggil `cek()`.

Memanggil `cek()` dari dalam `tambah()` berarti satu fungsi dapat meminta fungsi lain menjalankan tugasnya. Dalam hal ini, setelah data baru ditambahkan, `cek()` memperbarui tampilan berdasarkan data yang tersedia.

Fungsi kedua dimulai seperti ini:

```javascript
function cek() {
  var uang = Number(document.getElementById("uang").value);

  // Kode pemeriksaan dan pembaruan tampilan berada di sini
}
```

Fungsi `cek()` membaca nilai kolom uang lalu mengubahnya menjadi angka, kemudian bagian kode lainnya memeriksa daftar dan menampilkan hasilnya. Kedua fungsi tersebut tidak memiliki parameter. Keduanya membaca informasi langsung dari halaman dan array yang sudah tersedia.

Fungsi-fungsi itu juga dihubungkan dengan tindakan pengguna melalui atribut HTML:

```html
<input id="uang" type="number" oninput="cek()">
<button onclick="tambah()">Tambah</button>
```

Jadi, `tambah()` dipanggil saat tombol diklik, sedangkan `cek()` dipanggil saat isi kolom uang berubah. Fungsi menentukan pekerjaan yang dilakukan; event menentukan kapan pekerjaan itu dijalankan.

## Inti chapter

Saat membaca fungsi, perhatikan tiga hal: **di mana fungsi didefinisikan, kapan fungsi dipanggil, dan apa tugasnya**. Periksa juga apakah fungsi menerima parameter atau mengembalikan nilai.

Dengan konsep fungsi ini, kita sudah membahas bagian-bagian utama yang diperlukan untuk memahami kode awal: HTML menyusun elemen, atribut memberi informasi dan menghubungkan tindakan, sedangkan JavaScript membaca data, mengolahnya, dan memperbarui halaman.