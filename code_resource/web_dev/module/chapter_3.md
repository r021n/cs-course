# Chapter 3 — Form dan Input: Menerima Masukan dari Pengguna

## Mengenal form dan kolom yang mudah dipahami

Banyak halaman web meminta pengguna memasukkan sesuatu: nama, alamat surel, kata sandi, atau jumlah barang. Di HTML, **form** menyediakan wadah untuk mengumpulkan masukan tersebut, sedangkan elemen seperti `<input>` menyediakan kolom tempat pengguna mengetik atau memilih nilai.

Form ibarat selembar formulir di dunia nyata. Ada beberapa pertanyaan; pengguna mengisi jawabannya, lalu hasilnya bisa diproses. HTML menyediakan struktur untuk formulir itu; JavaScript dapat membaca nilai yang dimasukkan dan menentukan apa yang akan dilakukan selanjutnya.

Berikut contoh formulir sederhana untuk meminta nama dan alamat surel:

```html
<form>
  <label for="nama">Nama</label>
  <input id="nama" name="nama" type="text">

  <label for="email">Alamat surel</label>
  <input id="email" name="email" type="email">

  <button type="submit">Kirim</button>
</form>
```

Elemen `<form>` membungkus bagian yang menjadi isi formulir. Di dalamnya, ada dua pasang label dan kolom input, lalu tombol untuk mengirim formulir.

Elemen `<label>` menjelaskan informasi apa yang perlu diisi. Atribut `for` pada label harus cocok dengan nilai `id` pada kolom terkait. Jadi, `for="nama"` terhubung dengan `id="nama"`.

Label bukan sekadar teks hiasan. Menghubungkannya dengan input membantu pengguna memahami kolom yang dimaksud. Misalnya, pengguna dapat mengeklik teks label untuk memindahkan fokus ke kolom tersebut. Hubungan ini juga membantu teknologi bantu, seperti pembaca layar.

Jangan mengandalkan placeholder sebagai pengganti label. Placeholder adalah teks petunjuk sementara yang muncul di dalam kolom, lalu biasanya menghilang saat pengguna mulai mengetik.

```html
<label for="kota">Kota tempat tinggal</label>
<input id="kota" name="kota" type="text" placeholder="Contoh: Bandung">
```

Label tetap menjelaskan tujuan kolom, sedangkan placeholder hanya memberi contoh isi.

### Pertanyaan

1. Menurut bacaan, apa perbedaan peran `<form>` dan `<input>` dalam sebuah halaman?
   <!-- Jawaban: `<form>` menyediakan wadah untuk mengumpulkan masukan, sedangkan `<input>` menyediakan kolom tempat pengguna mengetik atau memilih nilai -->
2. Pengguna mengisi sebuah formulir, lalu halaman langsung menyapa pengguna tersebut dengan namanya. Menurut bacaan, siapa yang membaca nilai yang dimasukkan dan memutuskan apa yang harus dilakukan selanjutnya?
   <!-- Jawaban: JavaScript -->
3. Buatlah elemen `<label>` berbunyi 'Nama' dengan atribut `for` yang menunjuk ke kolom berpengenal `nama`.
   <!-- Jawaban: `<label for="nama">Nama</label>` -->
4. Perhatikan kode berikut: `<label for="email">Alamat surel</label>` tetapi kolomnya ditulis `<input id="surel" type="email">`. Apa akibatnya bagi pengguna yang mengeklik teks label tersebut?
   <!-- Jawaban: label tidak terhubung ke kolom, sehingga fokus tidak pindah ke kolom tersebut -->
5. Buatlah kolom input dengan tipe teks, memiliki id `kota`, dan menampilkan petunjuk pengisian 'Contoh: Bandung' sebelum pengguna mulai mengetik.
   <!-- Jawaban: `<input id="kota" type="text" placeholder="Contoh: Bandung">` -->

---

## Jenis masukan serta peran id dan name

Atribut `type` menentukan jenis kolom yang ditampilkan browser. Beberapa jenis yang sering digunakan antara lain:

```html
<input type="text">
<input type="email">
<input type="password">
<input type="number">
<input type="date">
```

`text` digunakan untuk teks biasa, `email` untuk alamat surel, dan `password` untuk masukan rahasia yang biasanya disamarkan di layar. `number` digunakan untuk nilai numerik, sedangkan `date` menyediakan cara untuk memilih tanggal.

Memilih jenis yang sesuai membantu pengguna mengisi formulir dan memberi browser informasi tentang jenis nilai yang diharapkan. Namun, itu bukan jaminan bahwa masukan pasti benar. Program tetap perlu memeriksa data sebelum menggunakannya.

Atribut lain dapat membantu mengatur kolom:

```html
<input
  id="jumlah"
  name="jumlah"
  type="number"
  min="1"
  required
>
```

Di sini, `min="1"` menunjukkan nilai minimum, sedangkan `required` menyatakan bahwa kolom itu wajib diisi. Browser dapat membantu memberi tahu pengguna jika kolom yang wajib diisi masih kosong atau nilainya tidak sesuai aturan tertentu.

`id` dan `name` juga sering muncul pada kolom input. Keduanya tampak serupa karena sama-sama memiliki nilai berupa teks, tetapi kegunaannya berbeda.

`id` berfungsi sebagai pengenal elemen di halaman. HTML bisa menggunakannya untuk menghubungkan label dengan kolom, dan JavaScript bisa menggunakannya untuk mencari elemen tertentu.

`name` memberi nama pada data kolom, terutama ketika formulir dikirim. Misalnya, nilai dari input dengan `name="email"` dapat dikenali sebagai data surel. Pada aplikasi yang memakai JavaScript untuk mengolah nilai secara langsung, `id` sering terlihat karena digunakan untuk memilih elemen.

Satu input bisa memiliki keduanya:

```html
<input id="email" name="email" type="email">
```

Nilai `id` tidak perlu selalu sama dengan `name`, meskipun pada contoh sederhana keduanya sering dibuat sama agar mudah dibaca.

### Pertanyaan

1. Buatlah kolom masukan untuk memilih tanggal.
   <!-- Jawaban: `<input type="date">` -->
2. Buatlah kolom masukan untuk jumlah barang dengan tiga aturan ini saja: tipe angka, nilai minimum 1, dan wajib diisi.
   <!-- Jawaban: `<input type="number" min="1" required>` -->
3. Menurut bacaan, `type="email"` bukan jaminan bahwa masukan pasti benar. Apa yang tetap wajib dilakukan program sebelum memakai nilai tersebut?
   <!-- Jawaban: memeriksa (memvalidasi) data terlebih dahulu -->
4. Buatlah kolom masukan jenis surel yang memiliki `id` dan `name` bernilai `email`.
   <!-- Jawaban: `<input id="email" name="email" type="email">` -->
5. JavaScript akan mencari kolom dengan `document.getElementById("total")`, dan saat formulir dikirim datanya harus dikenali sebagai `total`. Tulis kolom masukan angka yang memenuhi kedua kebutuhan itu.
   <!-- Jawaban: `<input id="total" name="total" type="number">` -->
6. Seorang siswa menulis `<input id="email" name="surel" type="email">`. Menurut bacaan, apakah ada yang salah dengan kode itu?
   <!-- Jawaban: tidak ada yang salah, karena nilai `id` tidak perlu sama dengan `name` -->

---

## Tombol dalam formulir

Tombol yang berada di dalam `<form>` secara bawaan biasanya berfungsi mengirim formulir. Karena itu, sebaiknya tuliskan `type` secara jelas:

```html
<button type="submit">Kirim</button>
<button type="button">Buka pratinjau</button>
```

`type="submit"` digunakan untuk mengirim formulir. `type="button"` hanya membuat tombol biasa; tombol itu tidak mengirim formulir dengan sendirinya. JavaScript dapat digunakan untuk menentukan apa yang dilakukan saat tombol biasa diklik.

Ini relevan ketika membaca kode Jajan Tracker. Tombol “Tambah” pada kode tersebut ditulis di luar elemen `<form>` dan memiliki atribut `onclick`. Jadi, tombol itu memanggil fungsi JavaScript saat diklik, bukan mengirim sebuah formulir HTML.

### Pertanyaan

1. Buatlah tombol berlabel 'Kirim' yang berfungsi mengirim formulir.
   <!-- Jawaban: `<button type="submit">Kirim</button>` -->
2. Buatlah tombol berlabel 'Buka pratinjau' yang hanyalah tombol biasa dan tidak mengirim formulir.
   <!-- Jawaban: `<button type="button">Buka pratinjau</button>` -->
3. Seorang siswa berkata, “`<button>Kirim</button>` yang berada di dalam `<form>` tidak akan mengirim formulir.” Menurut bacaan, apakah pernyataan itu benar?
   <!-- Jawaban: tidak benar, karena tombol di dalam `<form>` secara bawaan berfungsi mengirim formulir -->
4. Buatlah tombol berlabel 'Tambah' yang menjalankan fungsi JavaScript `tambah()` saat diklik, tanpa mengirim formulir.
   <!-- Jawaban: `<button onclick="tambah()">Tambah</button>` -->

---

## Membaca input pada kode Jajan Tracker

Pada kode yang kamu lampirkan, ada kolom seperti ini:

```html
Uang: <input id="uang" type="number" oninput="cek()">
```

Teks `Uang:` memberi tahu pengguna kegunaan kolom tersebut. Elemen `<input>` membuat kolom masukan. `id="uang"` memberi kolom itu pengenal yang bisa dicari JavaScript, `type="number"` memberi tahu browser bahwa kolom masukan ini hanya menerima angka, dan `oninput="cek()"` menghubungkan perubahan nilainya dengan fungsi `cek()`.

Ada satu hal penting saat JavaScript membaca kolom input: nilai dari input umumnya diterima sebagai **teks**, termasuk ketika kolomnya berjenis angka. Karena itu, kode sering mengubahnya menjadi angka sebelum melakukan perhitungan atau perbandingan. Pada aplikasi yang kamu lampirkan, hal ini terlihat pada `Number(...)`.

Form dan input merupakan cara HTML untuk menyediakan tempat menerima data. Setelah memahami bentuk kolom dan perannya, langkah berikutnya adalah memahami bagaimana halaman merespons tindakan pengguna—misalnya ketika pengguna mengetik atau menekan tombol.

### Pertanyaan

1. Menurut bacaan, mengapa JavaScript perlu mengubah nilai kolom input dengan `Number(...)` sebelum nilai itu dipakai menghitung?
   <!-- Jawaban: karena nilai dari input umumnya diterima sebagai teks, meski kolomnya berjenis angka -->
2. Tulis satu baris JavaScript yang mengubah nilai teks '2500' menjadi angka.
   <!-- Jawaban: `Number("2500")` -->
3. Seorang siswa mengetik '5000' pada kolom uang satu per satu, yaitu empat ketikan. Menurut bacaan, berapa kali fungsi `cek()` dijalankan?
   <!-- Jawaban: 4 kali (setiap kali isi kolom berubah) -->
