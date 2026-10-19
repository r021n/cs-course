# Chapter 5 — Event: Membuat Halaman Merespons Pengguna

Sebuah halaman web bisa menampilkan informasi, tetapi sering kali kita juga ingin halaman itu merespons tindakan pengguna. Misalnya, sesuatu terjadi saat tombol diklik atau saat pengguna mengetik di kolom. Dalam JavaScript, tindakan seperti itu disebut **event**.

Bayangkan bel pintu. Menekan tombol bel adalah tindakan; bunyi bel adalah respons. Pada halaman web, mengklik tombol bisa menjadi tindakannya, dan menjalankan suatu fungsi bisa menjadi responsnya. JavaScript menghubungkan keduanya.

## Event dan fungsi yang menanganinya

Fungsi yang dijalankan ketika suatu event terjadi sering disebut **event handler** atau penangan event. Contoh sederhana: tombol memanggil fungsi saat diklik.

```html
<button onclick="sapa()">Sapa</button>

<script>
  function sapa() {
    alert("Halo!");
  }
</script>
```

Atribut `onclick` menyatakan bahwa fungsi `sapa()` dijalankan ketika tombol diklik. Di sini, `onclick` adalah event yang didengarkan, sedangkan `sapa()` adalah fungsi yang meresponsnya.

Pola tersebut juga muncul pada kode Jajan Tracker:

```html
<button onclick="tambah()">Tambah</button>
```

Saat tombol ditekan, browser memanggil fungsi `tambah()`. Fungsi itulah yang kemudian menambahkan data ke array dan memanggil `cek()`.

### Pertanyaan

1. Diberikan fungsi JavaScript berikut:
   ```javascript
   function simpanData() {
     alert("Tersimpan!");
   }
   ```
   Tuliskan atribut HTML lengkap (beserta nilainya menggunakan tanda kutip ganda `"`) yang harus ditambahkan ke dalam tag `<button>` agar memanggil fungsi tersebut saat tombol diklik.
   <!-- Jawaban: `onclick="simpanData()"` -->
2. Pada elemen `<button onclick="tambah()">Tambah</button>`, tuliskan pemanggilan fungsi JavaScript yang dijalankan oleh browser saat tombol diklik.
   <!-- Jawaban: `tambah()` -->

---

## Event tidak hanya terjadi saat klik

Halaman dapat merespons banyak jenis tindakan. Dua event yang terlihat pada kode Jajan Tracker adalah `click` dan `input`.

Event `click` terjadi saat pengguna mengeklik elemen. Event `input` terjadi ketika nilai suatu kolom berubah karena pengguna mengetik atau mengedit isinya.

```html
<label for="nama">Nama</label>
<input id="nama" type="text">

<p id="pesan">Belum ada nama.</p>

<script>
  var kolomNama = document.getElementById("nama");
  var pesan = document.getElementById("pesan");

  kolomNama.oninput = function() {
    pesan.textContent = "Kamu mengetik: " + kolomNama.value;
  };
</script>
```

Setiap kali isi kolom berubah, fungsi yang ditugaskan ke `oninput` dijalankan. Fungsi itu membaca nilai kolom, lalu memperbarui teks pada paragraf.

Pada kode Jajan Tracker, atribut berikut membuat fungsi `cek()` dijalankan setiap kali nilai uang berubah:

```html
<input id="uang" type="number" oninput="cek()">
```

Artinya, pengguna tidak perlu menekan tombol khusus untuk memeriksa ulang daftar. Perubahan pada kolom uang sudah memicu pemeriksaan.

### Pertanyaan

1. Tuliskan nama event yang terjadi pada browser ketika nilai suatu kolom input berubah karena pengguna mengetik atau mengedit isinya.
   <!-- Jawaban: `input` -->
2. Sebuah elemen input teks disimpan pada variabel `kolomNama`. Tuliskan ekspresi JavaScript untuk membaca teks atau nilai yang sedang diketik pengguna di dalam kolom tersebut.
   <!-- Jawaban: `kolomNama.value` -->
3. Perhatikan elemen `<input id="uang" type="number" oninput="cek()">`. Tuliskan nama atribut HTML yang digunakan untuk memicu fungsi `cek()` secara otomatis setiap kali isi kolom berubah.
   <!-- Jawaban: `oninput` -->

---

## Menghubungkan event dari JavaScript

Menulis `onclick` atau `oninput` langsung di HTML adalah cara yang sederhana dan mudah dipahami, terutama pada contoh kecil. Namun, pada proyek yang lebih besar, event sering dihubungkan dari JavaScript menggunakan `addEventListener()`.

```html
<button id="tombol-sapa">Sapa</button>

<script>
  var tombol = document.getElementById("tombol-sapa");

  tombol.addEventListener("click", function() {
    alert("Halo!");
  });
</script>
```

`addEventListener()` menerima nama event—dalam contoh ini, `"click"`—dan fungsi yang akan dijalankan ketika event terjadi. Hasilnya serupa dengan contoh `onclick`, tetapi hubungan antara HTML dan JavaScript lebih terpisah: HTML mendeskripsikan tombol, sedangkan JavaScript mengatur responsnya.

Pemisahan ini biasanya lebih mudah dikelola ketika halaman memiliki banyak elemen atau perilaku. Satu elemen juga dapat memiliki beberapa event listener untuk merespons tindakan yang berbeda.

### Pertanyaan

1. Saat mendaftarkan event klik tombol menggunakan method `addEventListener`, tuliskan nama event yang dioperkan sebagai argumen pertama tanpa tanda kutip.
   <!-- Jawaban: `click` -->
2. Diberikan variabel `tombol` yang menyimpan referensi elemen tombol dan sebuah fungsi bernama `sapa`. Tuliskan satu baris kode JavaScript untuk menghubungkan event klik pada `tombol` ke fungsi `sapa` menggunakan `addEventListener`. (Gunakan tanda kutip ganda `"` untuk nama event).
   <!-- Jawaban: `tombol.addEventListener("click", sapa)` -->
3. Tuliskan nama method JavaScript yang digunakan untuk mendaftarkan fungsi pendengar event pada suatu elemen DOM seperti pada contoh di atas.
   <!-- Jawaban: `addEventListener` -->

---

## Apa yang terjadi ketika event berlangsung?

Secara sederhana, urutannya seperti ini:

1. Browser menampilkan halaman dan mengetahui elemen-elemennya.
2. Pengguna melakukan tindakan, misalnya mengeklik tombol.
3. Browser mengenali tindakan itu sebagai event.
4. Fungsi yang terhubung dengan event dijalankan.
5. Fungsi dapat membaca atau mengubah halaman melalui DOM.

Pada contoh Jajan Tracker, ketika tombol “Tambah” diklik, event `click` memanggil `tambah()`. Ketika isi kolom uang berubah, event `input` memanggil `cek()`. Dengan demikian, event adalah pemicu; yang menentukan respons aplikasi adalah isi fungsi yang dijalankan.

Ada banyak event lain, seperti `submit` saat formulir dikirim, `change` saat nilai pilihan berubah, dan `keydown` saat tombol papan ketik ditekan. Pilih event yang sesuai dengan tindakan yang ingin ditangani. Untuk saat ini, hal terpenting adalah mengenali hubungan dasarnya: **suatu tindakan terjadi, lalu fungsi tertentu dijalankan**.

### Pertanyaan

1. Berdasarkan bacaan, tuliskan nama event yang terjadi saat tombol pada papan ketik (keyboard) ditekan oleh pengguna.
   <!-- Jawaban: `keydown` -->
2. Tuliskan nama event yang dipicu secara default oleh browser ketika sebuah formulir dikirimkan oleh pengguna.
   <!-- Jawaban: `submit` -->
3. Diberikan elemen kolom input yang disimpan dalam variabel `kolomTeks` dan fungsi penangan bernama `bacaTombol`. Tuliskan kode pemanggilan `addEventListener` untuk menjalankan `bacaTombol` saat pengguna menekan tombol papan ketik pada `kolomTeks`. (Gunakan tanda kutip ganda `"` untuk nama event).
   <!-- Jawaban: `kolomTeks.addEventListener("keydown", bacaTombol)` -->