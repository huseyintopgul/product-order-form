//GİRDİ DEĞİŞKENLERİ
let urunCinsiyeti;
let urunSecimi;
let urunAdedi;
let urunTaksidi;

//ÇIKTI DEĞİŞKENLERİ

let araToplam;
let kargoUcreti = 29;
let odenecekToplamTutar;

//GLOBAL D  ÖNGÜ DEĞİŞKEN
let i;

//GLOBAL NESNE DEĞİŞKENLERİ
let liste;
let secenek;

//DİZİ TİPİ DEĞİŞKENLER
let erkekParfumleri = ["Celvin Clein", 100, "Lacoste", 150, "Axe", 50, "First Class", 75];
let kadinParfumleri = ["Burbury", 150, "Avon", 100, "She", 80, "Chanel", 475,];


function urunAdediDoldur() {
    for (i = 1; i <= 10; i++) {

        secenek = document.createElement("option");
        liste = document.getElementById("urunAdedi");
        liste.options.add(secenek);
        secenek.text = i;
        secenek.value = i;
    }
}

function taksitlendir() {
    for (i = 0; i <= 12; i = i + 3) {
        secenek = document.createElement("option");
        liste = document.getElementById("taksitSayisi");
        liste.options.add(secenek);
        secenek.text = i;
        secenek.value = i;
    }
}

function urunleriGetir() {

    document.querySelectorAll("#urunListesi option").forEach(option => option.remove());

    liste = document.getElementsByName("cinsiyet");
    for (i = 0; i < liste.length; i++) {
        if (liste[i].checked) {
            urunCinsiyeti = liste[i].value;
        }
    }
    if (urunCinsiyeti == "E") {
        for (i = 0; i < erkekParfumleri.length; i = i + 2) {

            secenek = document.createElement("option");
            liste = document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text = erkekParfumleri[i];
            secenek.value = erkekParfumleri[i + 1];

        }
    } else if (urunCinsiyeti == "K") {
        for (i = 0; i < kadinParfumleri.length; i = i + 2) {

            secenek = document.createElement("option");
            liste = document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text = kadinParfumleri[i];
            secenek.value = kadinParfumleri[i + 1];
        }
    }
}

function hesapla() {


    liste = document.getElementById("urunListesi");
    urunSecimi = liste[liste.selectedIndex].value;

    liste = document.getElementById("urunAdedi");
    urunAdedi = liste[liste.selectedIndex].value;

    liste = document.getElementById("taksitSayisi");
    urunTaksidi = liste[liste.selectedIndex].value;

    araToplam = urunSecimi * urunAdedi;

    if (urunTaksidi == 3) {
        araToplam = araToplam * 1.1;
    } else if (urunTaksidi == 6) {
        araToplam = araToplam * 1.2;
    } else if (urunTaksidi == 9) {
        araToplam = araToplam * 1.3;
    } else if (urunTaksidi == 12) {
        araToplam = araToplam * 1.4;
    }
    document.getElementById('araToplamTutari').value = araToplam.toFixed(2) + 'TL';
    document.getElementById('birimFiyati').value = urunSecimi + 'TL';
    if (araToplam < 100) {
        document.getElementById('kargoUcreti').value = kargoUcreti + 'TL';
        odenecekToplamTutar = araToplam + kargoUcreti;
    } else {
        document.getElementById('kargoUcreti').value = '0 TL'
        odenecekToplamTutar = araToplam;
    }

    document.getElementById('sonuc').innerHTML = 'Ödemeniz Gereken Toplam Tutar: ' + odenecekToplamTutar.toFixed(2) + 'TL';






}