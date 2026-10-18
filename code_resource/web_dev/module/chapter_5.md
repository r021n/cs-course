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

## Apa yang terjadi ketika event berlangsung?

Secara sederhana, urutannya seperti ini:

1. Browser menampilkan halaman dan mengetahui elemen-elemennya.
2. Pengguna melakukan tindakan, misalnya mengeklik tombol.
3. Browser mengenali tindakan itu sebagai event.
4. Fungsi yang terhubung dengan event dijalankan.
5. Fungsi dapat membaca atau mengubah halaman melalui DOM.

Pada contoh Jajan Tracker, ketika tombol “Tambah” diklik, event `click` memanggil `tambah()`. Ketika isi kolom uang berubah, event `input` memanggil `cek()`. Dengan demikian, event adalah pemicu; yang menentukan respons aplikasi adalah isi fungsi yang dijalankan.

Ada banyak event lain, seperti `submit` saat formulir dikirim, `change` saat nilai pilihan berubah, dan `keydown` saat tombol papan ketik ditekan. Pilih event yang sesuai dengan tindakan yang ingin ditangani. Untuk saat ini, hal terpenting adalah mengenali hubungan dasarnya: **suatu tindakan terjadi, lalu fungsi tertentu dijalankan**.