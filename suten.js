// Mendeklarasikan tanya sama dengan true
var tanya = true;
//mengunakan loop dengan while dimana bila tanya sama dengan true akan diulang kembali gamenya, jika false sebaliknya.
while (tanya) {
    //menangkap pilihan player / pemain
    var p = prompt('Pilih: gunting, batu, kertas');
    //menangkap pilihan komputer dan mengeluarkan bilangan random yang sudah di ubah ke dalam string

    var comp = Math.random();
//jika comp mengeluarkan bilangan random dibawah atau lebih kecil dari bilangan 0.34 maka akan mengeluarkan string gunting
    if( comp < 0.34 ) {
        comp = 'gunting';
//jika comp mengeluarkan bilangan random diatas sama dengan atau lebih besar sama dengan dari bilangan 0.34 
//dan jika comp mengeluarkan bilangan dibawah atau lebih kecil dari 0.67 maka akan mengeluarkan string kertas
    }else if( comp >= 0.34 && comp < 0.67 ) {
        comp = 'kertas'; 
//jika comp mengeluarkan bilangan random selain ketentuan diatas maka akan mengeluarkan string batu
    }else {
        comp = 'batu';
    }
//untuk menerima hasil pertandingan suten
    var hasil = '';
    //menentukan rules permainan
    //jika nilai p sama dengan comp maka hasilnya seri
    if ( p == comp) {
        hasil = 'SERI';
    //jika nilai p sama dengan gunting maka akan menjalankan perintah dibawah ini
    }else if( p == 'gunting') {
        // Melakukan Pengecekan apakah comp memilih kertas jika iya maka string menang [dikarenakan p = gunting melawan comp = kertas yang menang adalah gunting] akan masuk ke hasil 
        // jika tidak string kalah akan masuk ke dalam hasil [dikarenakan p = gunting melawan comp = batu yang menang adalah batu maka sebagai p kalah]
        hasil = ( comp == 'kertas' ) ? 'MENANG' : 'KALAH';
        //jika nilai p sama dengan kertas maka akan menjalankan perintah dibawah ini
    }else if( p == 'kertas') {
         // Melakukan Pengecekan apakah comp memilih gunting jika iya maka string kalah [dikarenakan p = kertas melawan comp = gunting yang menang adalah gunting] akan masuk ke hasil 
        // jika tidak string menang akan masuk ke dalam hasil [dikarenakan p = kertas melawan comp = batu yang menang adalah kertas maka sebagai p menang]
        hasil = ( comp == 'gunting' ) ? 'KALAH' : 'MENANG !';
         //jika nilai p sama dengan batu maka akan menjalankan perintah dibawah ini
    }else if (p == 'batu') {
         // Melakukan Pengecekan apakah comp memilih kertas jika iya maka string kalah [dikarenakan p = batu melawan comp = kertas yang menang adalah kertas] akan masuk ke hasil 
        // jika tidak string menang akan masuk ke dalam hasil [dikarenakan p = batu melawan comp = gunting yang menang adalah batu maka sebagai p menang]
        hasil = ( comp == 'kertas' ) ? 'KALAH' : 'MENANG';
        //jika p sebagai player memasukkan input selain gunting, batu ,kertas. maka akan mengeluarkan hasil memasukkan pilihan yang salah
    } else {
        hasil = 'Memasukkan Pilihan yang salah !!'
    }
    //menampilkan hasil menggunakan alert dimana p adalah inputan player sedangkan comp math random dari comp .

    alert('Kamu Memilih : ' + p +' dan Komputer Memilih : ' + comp +'\nMaka Hasilnya : Kamu ' + hasil );
//melakukan konfirmasi apakah ingin bermain lagi jika oke maka mengulang lagi, jika cancel sebaliknya.
    tanya = confirm('Ingin Bermain Lagi ? ');
}
// alert yang akan keluar jika mengeluarkan pilihan cancel
alert('terima kasih sudah bermain.')