# Visualisasi Data Sederhana

"Degree to philosophy" menunjukkan bagaimana sebuah artikel wikipedia
(bahasa inggris) apapun, jika ditelusuri berdasarkan link pertama dalam 
teks cepat atau lambat akan sampai ke halaman "Philosophy".

Terinspirasi oleh [XKCD](http://xkcd.com/903/).

## Prasayarat

Sebelum dapat menjalankan program, pastikan anda memiliki [NodeJS](https://nodejs.org)
pada sistem. 

## Cara Eksekusi

Masuk ke direktori program pada terminal, kemudian jalankan perintah:

    npm install
    gulp build
    node dist/index.js

dan anda akan diberikan pesan:

    Listening on 3000

Masuk ke `http://localhost:3000/` pada *browser* anda.

## Catatan

Aplikasi web sangat sederhana ini dibuat dalam waktu singkat, dan karenanya
memiliki banyak kelemahan. Beberapa kelemahan yang diketahui:

1. Tidak dapat membaca halaman wikipedia yang memiliki karakter khusus, misalnya: `'`.
2. TIdak menangani kasus di mana halaman wikipedia tidak ada atau mengalami error.
3. Jika halaman yang dibuka terlalu besar, program akan berhenti otomatis.
4. Tidak menangani pembacaan banyak kata kunci sekaligus.

## Kontribusi

Jika ingin berkontribusi, silahkan kirimkan *pull request*!