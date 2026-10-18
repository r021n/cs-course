# Chapter 7 — Array: Menyimpan Banyak Nilai dalam Satu Variabel

Misalkan sebuah program perlu menyimpan nama beberapa buah. Kita bisa membuat variabel terpisah untuk setiap nama:

```javascript
var buah1 = "Apel";
var buah2 = "Jeruk";
var buah3 = "Mangga";
```

Cara ini masih bisa dilakukan, tetapi akan merepotkan jika jumlah buah terus bertambah. Array memberi cara yang lebih praktis: kita dapat menyimpan banyak nilai dalam satu variabel.

```javascript
var buah = ["Apel", "Jeruk", "Mangga"];
```

Sekarang `buah` berisi tiga nilai. Bayangkan array seperti deretan laci yang memiliki nomor. Setiap laci menyimpan satu nilai, dan kita bisa mengambil nilainya dengan menyebut nomor laci tersebut.

## Mengambil nilai dari array

Nomor posisi dalam array disebut **indeks**. Indeks array JavaScript dimulai dari `0`, bukan `1`.

```javascript
var buah = ["Apel", "Jeruk", "Mangga"];

console.log(buah[0]); // Apel
console.log(buah[1]); // Jeruk
console.log(buah[2]); // Mangga
```

Jadi, `buah[0]` berarti nilai pertama, sedangkan `buah[2]` berarti nilai ketiga. Angka di dalam tanda kurung siku bukan nomor urut yang biasa kita gunakan sehari-hari, melainkan indeks yang dipakai JavaScript.

Jika kita mengakses indeks yang berada di luar isi array, hasilnya adalah `undefined`.

```javascript
console.log(buah[5]); // undefined
```

Artinya, tidak ada nilai pada posisi tersebut.

## Menambahkan nilai

Salah satu cara umum menambahkan nilai ke akhir array adalah metode `.push()`:

```javascript
var buah = ["Apel", "Jeruk"];

buah.push("Mangga");

console.log(buah);
```

Setelah `push()` dijalankan, array berisi `"Apel"`, `"Jeruk"`, dan `"Mangga"`. Kita tidak perlu membuat variabel baru untuk setiap buah yang ditambahkan.

Di kode Jajan Tracker, konsep ini digunakan untuk menyimpan nama dan harga jajan:

```javascript
listNama.push(n);
listHarga.push(Number(h));
```

`n` berisi nama dan `h` berisi harga, keduanya diambil dari kolom input. Nama dimasukkan ke `listNama`, sedangkan harga diubah menjadi angka dengan `Number()` lebih dulu sebelum masuk ke `listHarga`.

## Mengetahui jumlah isi array

Properti `.length` memberi tahu berapa banyak nilai yang ada dalam array:

```javascript
var buah = ["Apel", "Jeruk", "Mangga"];

console.log(buah.length); // 3
```

`length` sering digunakan saat program perlu memeriksa semua isi array. Contohnya, perulangan dapat berjalan dari indeks `0` sampai indeks terakhir:

```javascript
for (var i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}
```

Pada setiap putaran, nilai `i` digunakan sebagai indeks. Perulangan ini akan mengambil satu nilai, lalu berpindah ke nilai berikutnya sampai semua buah diperiksa. Kita akan membahas cara kerja perulangan lebih lanjut pada chapter tersendiri.

## Dua array yang datanya berpasangan

Jajan Tracker menggunakan dua array: satu untuk nama dan satu untuk harga.

```javascript
var listNama = ["Roti", "Susu"];
var listHarga = [5000, 8000];
```

Data pada indeks yang sama saling berpasangan: `listNama[0]` adalah `"Roti"` dan `listHarga[0]` adalah `5000`. Pasangan berikutnya adalah `"Susu"` dan `8000`.

Hubungan ini tetap benar selama kedua array selalu bertambah dengan urutan yang sama. Jika nama ditambahkan tetapi harga tidak, isi keduanya tidak lagi cocok. Itu salah satu kelemahan menggunakan array terpisah untuk menyimpan data yang saling berhubungan. Dalam JavaScript, objek sering menjadi pilihan yang lebih jelas untuk menyimpan satu jajan beserta harganya, tetapi kode yang sedang kita pelajari sengaja menggunakan dua array biasa.

Untuk saat ini, perhatikan bahwa indeks menjadi penghubung antara kedua daftar: nama pada indeks tertentu berkaitan dengan harga pada indeks yang sama.

Array berguna ketika program perlu menyimpan dan mengolah banyak nilai sejenis. Dengan memahami indeks, `.push()`, dan `.length`, kamu bisa mulai mengikuti bagaimana data jajan dikumpulkan, lalu diperiksa satu per satu di bagian lain program.