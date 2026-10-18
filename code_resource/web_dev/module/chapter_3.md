# Chapter 3 — Form dan Input: Menerima Masukan dari Pengguna

Banyak halaman web meminta pengguna memasukkan sesuatu: nama, alamat surel, kata sandi, atau jumlah barang. Di HTML, **form** menyediakan wadah untuk mengumpulkan masukan tersebut, sedangkan elemen seperti `<input>` menyediakan kolom tempat pengguna mengetik atau memilih nilai.

Form ibarat selembar formulir di dunia nyata. Ada beberapa pertanyaan; pengguna mengisi jawabannya, lalu hasilnya bisa diproses. HTML menyediakan struktur untuk formulir itu; JavaScript dapat membaca nilai yang dimasukkan dan menentukan apa yang akan dilakukan selanjutnya.

## Membuat kolom yang mudah dipahami

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

## `input` bisa menerima jenis masukan yang berbeda

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

## Apa fungsi `id` dan `name` pada input?

Keduanya tampak serupa karena sama-sama memiliki nilai berupa teks, tetapi kegunaannya berbeda.

`id` berfungsi sebagai pengenal elemen di halaman. HTML bisa menggunakannya untuk menghubungkan label dengan kolom, dan JavaScript bisa menggunakannya untuk mencari elemen tertentu.

`name` memberi nama pada data kolom, terutama ketika formulir dikirim. Misalnya, nilai dari input dengan `name="email"` dapat dikenali sebagai data surel. Pada aplikasi yang memakai JavaScript untuk mengolah nilai secara langsung, `id` sering terlihat karena digunakan untuk memilih elemen.

Satu input bisa memiliki keduanya:

```html
<input id="email" name="email" type="email">
```

Nilai `id` tidak perlu selalu sama dengan `name`, meskipun pada contoh sederhana keduanya sering dibuat sama agar mudah dibaca.

## Tombol dalam formulir

Tombol yang berada di dalam `<form>` secara bawaan biasanya berfungsi mengirim formulir. Karena itu, sebaiknya tuliskan `type` secara jelas:

```html
<button type="submit">Kirim</button>
<button type="button">Buka pratinjau</button>
```

`type="submit"` digunakan untuk mengirim formulir. `type="button"` hanya membuat tombol biasa; tombol itu tidak mengirim formulir dengan sendirinya. JavaScript dapat digunakan untuk menentukan apa yang dilakukan saat tombol biasa diklik.

Ini relevan ketika membaca kode Jajan Tracker. Tombol “Tambah” pada kode tersebut ditulis di luar elemen `<form>` dan memiliki atribut `onclick`. Jadi, tombol itu memanggil fungsi JavaScript saat diklik, bukan mengirim sebuah formulir HTML.

## Membaca input pada kode Jajan Tracker

Pada kode yang kamu lampirkan, ada kolom seperti ini:

```html
Uang: <input id="uang" type="number" oninput="cek()">
```

Teks `Uang:` memberi tahu pengguna kegunaan kolom tersebut. Elemen `<input>` membuat kolom masukan. `id="uang"` memberi kolom itu pengenal yang bisa dicari JavaScript, `type="number"` memberi tahu browser bahwa kolom masukan ini hanya menerima angka, dan `oninput="cek()"` menghubungkan perubahan nilainya dengan fungsi `cek()`.

Ada satu hal penting saat JavaScript membaca kolom input: nilai dari input umumnya diterima sebagai **teks**, termasuk ketika kolomnya berjenis angka. Karena itu, kode sering mengubahnya menjadi angka sebelum melakukan perhitungan atau perbandingan. Pada aplikasi yang kamu lampirkan, hal ini terlihat pada `Number(...)`.

Form dan input merupakan cara HTML untuk menyediakan tempat menerima data. Setelah memahami bentuk kolom dan perannya, langkah berikutnya adalah memahami bagaimana halaman merespons tindakan pengguna—misalnya ketika pengguna mengetik atau menekan tombol.