// * Gizem
// ? Gizem
// ! Gizem
// todo: Gizem

// todo KOD DIŞTAN DEĞİL EN  İÇ PARÇACIKTAN BAŞLAYARAK DIŞA DOĞRU OKUNMAYA BAŞLAR
// document.write("Hello World");
// document.write("Gizi");
// document.write(55);
// document.write(true);

// console.log("Hello World");
// console.log(77);
// console.log(true);
// console.log({ name: "Gizem", surname: "Yerlikaya" });

//console.clear();

// let a = 5;
// let b = 7;

// console.log(a + b);
// console.log("İki sayinin toplami:", a + b);

//? Alert (Uyarı) ile çıktı verme işlemleri sağlar
//console.log(window);

// alert("Bu bir alert mesajidir !!!");

// let a = 10;
// let b = 15;

//! alert window objesinden geldiği için window.alert yazmamıza gerek yok document ten gelseydi document.blabla derdik
// alert("İki sayinin toplami:" + (a + b));

//alert("f5 tuşuna lütfen basmayınız!");

// console.log(window.location.port);
// console.log(location.port);
// console.error("kırımızı yazar hata gibi");
// console.warn("sarı yazar uyarı gibi");

//?  prompt(); ile kullanıcıdan deger alabiliyoruz
//!  Kullanıcıdan alınan degerler her zaman string döner

// let isim = prompt("İsminizi Giriniz:");
// let yas = prompt("Yasinizi Giriniz:");
// console.log(yas);
// console.log(isim);

// console.log(typeof yas);

//? confirm(); bir işlem yaparken kullanıcının onaynı almak için kullandığımız fonksiyon tamam ve iptal butonları ile kullanıcıdan alınır geriye boolean bir deger döner

// let sonuc = confirm("Degeri silmek istediğinize emin misiniz ?");
// console.log(sonuc);

//? Basit if else örneği

// let yas = Number(prompt("Yaşınızı giriniz:"));
// let butce = Number(prompt("Bütçenizi giriniz:"));

// if (yas > 18 && butce >= 4000) {
//   console.log("Ehliyet sınavına katılabilirsiniz :)");
// } else {
//   console.log("Ehliyet sınavına katılamazsınız");
// }

// let yas = Number(prompt("Yaşınızı giriniz:"));
// let butce = Number(prompt("Bütçenizi giriniz:"));

// if (yas > 18) {
//   if (butce < 4000) {
//     console.log("Butceniz uygun değil.");
//   } else {
//     console.log("Ehliyet sınavına katılabilirsiniz :)");
//   }
// } else {
//   console.log("Ehliyet sınavına katılamazsınız");
// }

//? vize final notuna göre geçme kalma hesaplama

// let vize1 = Number(prompt("Vize1 notunuzu giriniz:"));
// let vize2 = Number(prompt("Vize2 notunuzu giriniz:"));
// let final = Number(prompt("Final notunuzu giriniz:"));

// let ortalama = vize1 * 0.3 + vize2 * 0.3 + final * 0.4;

// if (ortalama > 60) {
//   console.log("Dersi geçtiniz tebrikler :) ortalamanız:" + ortalama);
// } else {
//   console.log("Dersten kaldınız :( ortalamanız:" + ortalama);
// }

// let vize1 = Number(prompt("Vize1 notunuzu giriniz:"));
// let vize2 = Number(prompt("Vize2 notunuzu giriniz:"));
// let final = Number(prompt("Final notunuzu giriniz:"));

// let ortalama = vize1 * 0.3 + vize2 * 0.3 + final * 0.4;
// if (final > 45) {
//   if (ortalama > 60) {
//     console.log("Dersi geçtiniz tebrikler :) ortalamanız:" + ortalama);
//   } else {
//     console.log("ortalamanız 60 tan küçük :(" + ortalama);
//   }
// } else {
//   console.log("Dersten kaldınız :( final notunuz 45 ten küçük");
// }

//?  1.yol=Ankara 2.yol=İstanbul 3.yol=Nevşehir

// secilenYol = Number(
//   prompt("Lütfen gitmek istediğiniz şehrin numarasını giriniz")
// );

// if (secilenYol == 1) {
//   console.log("Ankara seçimini yaptınız..");
// } else if (secilenYol == 2) {
//   console.log("İstanbul seçimini yaptınız..");
// } else if (secilenYol == 3) {
//   console.log("Nevşehir seçimini yaptınız..");
// } else {
//   console.log("Lütfen geçerli bir numara seçiniz...");
// }

//? Kullanıcıdan ad ve tc alıp girdiği değerlerin kontrolünü sağlama

// let ad = prompt("Lütfen adınızı giriniz:");
// let tc = Number(prompt("Lütfen tc numaranızı giriniz:"));

// function kontrolEt(ad, tc) {
//   if (ad == "") {
//     console.log("Lütfen isim kısmını boş geçmeyiniz !!");
//     return;
//   }
//   if (tc.length != 11) {
//     console.log("Lütfen tc numaranızı 11 haneli giriniz !!");
//     return;
//   }
// }
// kontrolEt(ad, tc);

//? Beden kitle indeksi hesaplama

// let boy = Number(prompt("Lütfen boyunuzu giriniz:"));
// let kilo = Number(prompt("Lütfen kilonuzu giriniz:"));

// let indeks = kilo / (boy * boy);
// indeks = indeks.toFixed(2); // Ondalık basamakları 2'ye yuvarla

// if (indeks < 18.5) {
//   console.log("İndeksiniz:" + indeks + "ideal kilonun altında");
// } else if (indeks >= 18.5 && indeks < 24.9) {
//   console.log("İndeksiniz:" + indeks + "ideal kilodasınız.");
// } else if (indeks >= 24.9 && indeks < 29.9) {
//   console.log("İndeksiniz:" + indeks + "ideal kilonun çok üstündesiniz (obez)");
// } else if (indeks >= 29.9 && indeks < 39.9) {
//   console.log(
//     "İndeksiniz:" + indeks + "ideal kilonun çok çok üstündesiniz (morbid obez)"
//   );
// }

//? Benzin istasyonu
/*
1-Dizel  : 24.53
2-Benzin : 22.25
3-LPG    : 11.1

Gelen müşterilerden alınacak bilgiler:
1-Yakıt tipi
2-Yüklenecek yakıt litresi
*/

// let dizel = 24.25,
//   benzin = 22.25,
//   lpg = 11.1;
// const yeniSatir = "\r\n";
// const yakitMetni =
//   "1-Dizel" +
//   yeniSatir +
//   "2-Benzin" +
//   yeniSatir +
//   "3-LPG" +
//   yeniSatir +
//   "Yüklenecek yakıt türünü seçiniz:";
// let yakitTipi = prompt(yakitMetni);
// if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {
//   let yakitLitresi = Number(prompt("Yakıt litresini giriniz:"));
//   let bakiye = Number(prompt("Lütfen bakiyenizi giriniz:"));

//   if (yakitTipi == "1") {
//     let odenecekTutar = yakitLitresi * dizel;
//     if (odenecekTutar < bakiye) {
//       //bakiye yeterli
//       bakiye = bakiye - odenecekTutar;
//       alert(
//         "Yakıt alma işlemi başarılı" + yeniSatir + "Kalan bakiyeniz:" + bakiye
//       );
//     } else {
//       //bakiye yeterli değil
//       alert(
//         "Bakiyeniz yeterli değil !" +
//           yeniSatir +
//           "Ödenecek tutar:" +
//           odenecekTutar +
//           yeniSatir +
//           "Bakiye:" +
//           bakiye +
//           yeniSatir +
//           "Eksik tutar:" +
//           (odenecekTutar - bakiye)
//       );
//     }
//   } else if (yakitTipi == "2") {
//     let odenecekTutar = yakitLitresi * benzin;
//     if (odenecekTutar < bakiye) {
//       bakiye = bakiye - odenecekTutar;
//       alert(
//         "Yakıt alma işlemi başarılı" + yeniSatir + "Kalan bakiyeniz:" + bakiye
//       );
//     } else {
//       alert(
//         "Bakiyeniz yeterli değil !" +
//           yeniSatir +
//           "Ödenecek tutar:" +
//           odenecekTutar +
//           yeniSatir +
//           "Bakiye:" +
//           bakiye +
//           yeniSatir +
//           "Eksik tutar:" +
//           (odenecekTutar - bakiye)
//       );
//     }
//   } else if (yakitTipi == "3") {
//     let odenecekTutar = yakitLitresi * lpg;
//     if (odenecekTutar < bakiye) {
//       bakiye = bakiye - odenecekTutar;
//       alert(
//         "Yakıt alma işlemi başarılı" + yeniSatir + "Kalan bakiyeniz:" + bakiye
//       );
//     } else {
//       alert(
//         "Bakiyeniz yeterli değil !" +
//           yeniSatir +
//           "Ödenecek tutar:" +
//           odenecekTutar +
//           yeniSatir +
//           "Bakiye:" +
//           bakiye +
//           yeniSatir +
//           "Eksik tutar:" +
//           (odenecekTutar - bakiye)
//       );
//     }
//   }
// } else {
//   alert("Yakıt türü numarasını doğru seçiniz !!");
// }

// ? switch-case

// // ATM uygulaması
// /*
// 1-Bakiye Görüntüleme
// 2-Para Çekme
// 3-Para Yatırma
// 4-Çıkış
// */

// let satir = "\r\n";
// let bakiye = 1000;
// let metin =
//   "1-Bakiye Görüntüleme" +
//   satir +
//   "2-Para Çekme" +
//   satir +
//   "3-Para Yatırma" +
//   satir +
//   "4-Çıkış" +
//   satir +
//   "Lütfen bir işlem seçiniz:";

// let secim = prompt(metin);
// switch (secim) {
//   case "1":
//     alert("Bakiyeniz:" + bakiye);
//     break;
//   case "2":
//     let cekilecekTutar = Number(
//       prompt("Lütfen çekmek istediğiniz bakiyeyi giriniz:")
//     );
//     if (cekilecekTutar < bakiye) {
//       //başarılı
//       bakiye = bakiye - cekilecekTutar;
//       alert("Kalan bakiye:" + bakiye);
//     } else {
//       alert(
//         "Bakiyenizden para çekemezsiniz!!" +
//           satir +
//           "Bakiyeniz:" +
//           bakiye +
//           " " +
//           "Çekilecek Tutar:" +
//           cekilecekTutar
//       );
//     }
//     break;
//   case "3":
//     let yatirilacakTutar = Number(
//       prompt("Lütfen yatırmak istediğiniz tutarı giriniz:")
//     );
//     bakiye = bakiye + yatirilacakTutar;
//     alert("Güncel Bakiye Tutarınız:" + bakiye);
//     break;
//   case "4":
//     alert("Sistemden çıkış yapılmıştır.");
//     break;
//   default:
//     alert("Lütfen geçerli bir işlem giriniz:");
//     break;
// }

// TYT PUAN HESAPLAMA
/* 
SORULAR: 4 puan
1-Türkçe 40 
2-Matematik 40  
3-Sosyal 20
4-Fen 20
--->100 puanı ösym veriyor
--->okul puanı max 60 puan veriyor
*/

// let turkceDogru,
//   turkceYanlis = 0;
// let matematikDogru,
//   matematikYanlis = 0;
// let sosyalDogru,
//   sosyalYanlis = 0;
// let fenDogru,
//   fenYanlis = 0;
// let okulPuani = 0;
// let puan = 0;

// let satir = "\r\n";
// let mesaj =
//   "TYT Puan Hesaplama Uygulamasına Hoşgeldiniz!" +
//   satir +
//   "1-Puan Hesapla" +
//   satir +
//   "2-Çıkış Yap";

// let secim = Number(prompt(mesaj));
// switch (secim) {
//   case 1:
//     okulPuani = Number(prompt("Okul puanınızı giriniz:"));
//     turkceDogru = Number(prompt("Türkçe doğru sayınız"));
//     turkceYanlis = Number(prompt("Türkçe yanlış sayınız"));

//     matematikDogru = Number(prompt("Matematik doğru sayınız"));
//     matematikYanlis = Number(prompt("Matematik yanlış sayınız"));

//     fenDogru = Number(prompt("Fen doğru sayınız"));
//     fenYanlis = Number(prompt("Fen yanlış sayınız"));

//     sosyalDogru = Number(prompt("Sosyal doğru sayınız"));
//     sosyalYanlis = Number(prompt("Sosyal yanlış sayınız"));

//     let dogruSayisi = turkceDogru + matematikDogru + fenDogru + sosyalDogru;
//     let yanlisSayisi =
//       turkceYanlis + matematikYanlis + fenYanlis + sosyalYanlis;
//     let kalanDogruSayisi = dogruSayisi - yanlisSayisi / 4;
//     puan = kalanDogruSayisi * 4 + 100 + okulPuani;
//     alert("TYT PUANINIZ:" + puan);
//     break;
//   case 2:
//     alert("Uygulamadan çıkış yaptınız...");
//     break;
//   default:
//     alert("Lütfen geçerli işlem numarası giriniz!!");
//     break;
// }

//? TÜR DÖNÜŞÜMLERİ
// strings, numbers,booleans, undefined and null ,object,function

// let a = 5;
// let b = Number("12");
// console.log(a + b);

// parsInt ,parsFloat
// let a = 8;
// let b = parseInt("12");
// console.log(a + b);

// let x = String(55);
// console.log(typeof x);

// let x = (55).toString();
// console.log(x);

// let sonuc = String(true);
// console.log(sonuc);

// let a = Number("B");
// console.log(a);
// Nan ---> not a number

// let rakamlar = String([1, 2, 3, 4, 5]);
// console.log(typeof rakamlar);

//? breakpoint
// debugger;
// let a = 10;
// let b = 15;
// let c = a + b;
// let d = a + b + c;
// let e = a + c + b;

// let sonuc = a + b + c + d + e;
// console.log(sonuc);

//? for döngüsü
// for(degisken;kosul;arttırma-azaltma){
//     kodlar
// }

// 1 den 10 a kadar yazdırma
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 0 den 10 a kadar çiftleri yazdırma
// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// 0 dan 10 a kadar tekleri yazdırma
// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// tek sayılarda Gizem çift sayılarda Yerlikaya yazdırsın
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log("Gizem");
//   } else {
//     console.log("Yerlikaya");
//   }
// }

// 50 den 1 e kadar olan sayıları yazdırsın ve toplamını yazsın
// let toplam = 0;
// for (let i = 50; i >= 1; i--) {
//   toplam += i;
//   console.log(i);
// }
// console.log("Toplam:", toplam);

//? while döngüsü
// while(kosul){
//     kodlar
//     sayacin-degeriniatariz
// }

// 1 den 10 a kadar yazdırma
// let sayac = 1;
// while (sayac <= 10) {
//   console.log(sayac);
//   sayac++;
// }

// 1 den 10 a kadar tek sayıları yazdırma
// let sayac = 1;
// while (sayac <= 10) {
//   console.log(sayac);
//   sayac += 2;
// }

// let sayac = 1;
// while (sayac <= 10) {
//   if (sayac % 2 != 0) {
//     console.log(sayac);
//   }
//   sayac++;
// }

//1 den 10 a kadar olan çift sayıları yazdırma
// let sayac = 1;
// while (sayac <= 10) {
//   if (sayac % 2 == 0) {
//     console.log(sayac);
//   }
//   sayac++;
// }

// sayac = 1;
// while (true) {
//   console.log(sayac);
//   if (sayac == 7) {
//     break;
//   }
//   sayac++;
// }

//? do-while döngüsü
// do {
//   kodlar;
// } while (kosul);

// 1 den 10 a kadar yazdırma
// let sayac = 1;
// do {
//   console.log(sayac);
//   sayac++;
// } while (sayac <= 10);

// let yas = 17;
// do {
//   console.log("Ehliyeti alabilirsiniz :)");
// } while (yas >= 18);

// 1 den 20 ye kadar olan tek sayıların toplamını bulma
// let sayac = 1;
// let toplam = 0;
// do {
//   if (sayac % 2 == 1) {
//     toplam += sayac;
//     console.log(sayac);
//   }
//   sayac++;
// } while (sayac <= 20);
// console.log("Toplam", toplam);

//? break
//  1 den 10 a kadar sayıları yazdıralım 8 e geldiğinde döngüden çıkalım
// let sayac = 1;
// while (sayac <= 10) {
//   console.log(sayac);
//   if (sayac >= 8) {
//     break;
//   }
//   sayac++;
// }

//? continue (bir kereye mahsus döngüyü kırıyor)
// konsolda 1 2 4 5 yazılsın
// sayac = 0;
// while (sayac < 5) {
//   sayac++;
//   if (sayac == 3) {
//     continue;
//   }
//   console.log(sayac);
// }

//? çarpım tablosu

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + "x" + j + "=" + i * j);
//   }
//   console.log("-----------");
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     for (let k = 1; k <= 10; k++) {
//       console.log(i + "x" + j + "x" + k + "=" + i * j * k);
//     }
//   }
//   console.log("-----------");
// }

//? asal sayı bulma uygulaması
// let sonuc = true;
// let deger = Number(prompt("Lütfen bir sayı giriniz:"));

// if (deger < 2) {
//   alert(deger + " " + "asal sayı değildir.");
// } else {
//   for (let i = 2; i <= Math.floor(deger / 2); i++) {
//     if (deger % i == 0) {
//       sonuc = false;
//       break;
//     }
//   }
// }
// if (sonuc) {
//   alert(deger + " " + "asal sayıdır.");
// } else {
//   alert(deger + " " + "asal sayı degildir.");
// }

//? faktöriel hesaplama
//5!=5x4x3x2x1
// carpim = 1;
// sayi = Number(prompt("Lütfen bir sayı giriniz:"));
// for (let i = 1; i <= sayi; i++) {
//   carpim *= i;
// }
// alert("Sayinin faktöriyeli:" + carpim);

//? armstrong sayısı bulma uygulaması
// 153= 1*1*1 + 5*5*5 + 3*3*3 = 153

// let sayi = prompt("Lütfen bir sayi giriniz:");
// let toplam = 0;
// for (let i = 0; i < sayi.length; i++) {
//   let rakam = sayi.charAt(i);
//   toplam += rakam * rakam * rakam;
// }
// if (Number(sayi) == toplam) {
//   alert(sayi + " " + "armstrong sayısıdır :)");
// } else {
//   alert(sayi + " " + "armstrong sayisi değildir :(");
// }

//? parametresiz ve geriye deger döndürmeyen metot tanımlamak
/*
function yazdir(){
    kodlar 
}
*/

// function yazdir() {
//   console.log("Gizem");
// }
// yazdir();
// yazdir();
// yazdir();

// function topla() {
//   console.log(5 + 7);
// }
// topla();

//? parametreli metot tanımlamak

// function yazdir(isim, soyisim) {
//   console.log(isim + " " + soyisim + " " + "Bugün yine çok güzelsin..");
// }
// yazdir("Gizem", "Yerlikaya");
// yazdir("Gülay", "Çimen");

// function cube(sayi) {
//   console.log(sayi * sayi * sayi);
// }
// cube(5);
// cube(3);

// let yas = Number(prompt("Lütfen yaşınızı giriniz:"));
// function kontrolEt(yas) {
//   if (yas > 18) {
//     console.log("Ehliyeti alabilirsiniz :)");
//   } else {
//     console.log("Malesef ehliyet alamazsınız :(");
//   }
// }
// kontrolEt(yas);

//? Geriye deger döndüren metot (return)
//! 1-Bir degeri metodun dışına çıkarmak için kullanılır
//! 2-Bir metodu bitiren anahtar kelimedir

// let donenDeger = kupAl(2);
// kareAl(donenDeger);

// function kareAl(sayi) {
//   let sonuc = sayi * sayi;
//   console.log(sonuc);
// }

// function kupAl(sayi) {
//   let sonuc = sayi * sayi * sayi;
//   return sonuc;
// }

// function yazdir() {
//   console.log("Gizem");
//   // void: geriye deger döndürmeyen
// }
// yazdir();

//? kelime sayısı bulma uygulaması
// let metin = "Şu an Gümüşhanede yazılım çalışmaktayım.";
// let harf = prompt("Lütfen harfi giriniz:");

// let sonuc = bul(harf);
// alert("Harf sayisi:" + sonuc);

// function bul(harf) {
//   let toplam = 0;
//   for (let i = 0; i < metin.length; i++)
//     if (metin.charAt(i).toLowerCase == harf.toLowerCase) {
//       toplam += 1;
//     }
//   return toplam;
// }

//? mükemmel sayi uygulaması
// 6 = 1,2,3,6=12 -->6*2
// 28 = 1,2,4,7,14,28=56 -->28*2

// function isPerfectNumber(number) {
//   let toplam = 0;
//   for (let i = 2; i <= number / 2; i++) {
//     if (number % i == 0) {
//       toplam += i;
//     }
//   }
//   toplam += 1 + number;

//   if (toplam == number * 2) {
//     console.log("Mükemmel sayidir :)");
//   } else {
//     console.log("Mükemmel sayi değildir :(");
//   }
// }
// isPerfectNumber(49);

//? Decimal to Binary
// 10 5 2
// function convertDesimalToBinary(number) {
//   let binary = "";
//   while (true) {
//     binary += (number % 2).toString();
//     number = Math.floor(number / 2);
//     if (number == 1) {
//       binary += 1;
//       break;
//     }
//   }
//   let result = reverse(binary);
//   console.log("Sonuç:" + result);
// }
// convertDesimalToBinary(6);

// function reverse(binary) {
//   let reverseBinary = "";
//   for (let i = binary.length - 1; i >= 0; i--) {
//     reverseBinary += binary.charAt(i);
//   }
//   return reverseBinary;
// }

//? Binary to Decimal
// let binary = "1011";
// function BinaryToDecimal(binary) {
//   let toplam = 0;
//   let ust = 0;
//   for (let i = binary.length - 1; i >= 0; i--) {
//     if (Number(binary.charAt(i)) != 0) {
//       toplam += Number(binary.charAt(i)) * Math.pow(2, ust);
//     }
//     ust++;
//   }
//   console.log("Sonuç:" + toplam);
// }
// BinaryToDecimal(binary);

//? Diziler

// let sayilar = [1, 2, 3, 4, "Gizem", 7, 8, "Enes"];
// console.log(sayilar[5]);

// sayilar[7] = "Gülay";
// console.log(sayilar[7]);

// let isimler = ["Enes", "Kübra", "Bilal", "Yusuf"];
// console.log(isimler);

// let karisikDizi = [3, "Gizem", 7.7, true, null, undefined];
// console.log(karisikDizi[3]);

// let dizi1 = [];
// let dizi2 = new Array();

// dizi1[0] = "Enes";
// dizi1[1] = "Gizem";

// dizi2[0] = "Gülay";
// dizi2[1] = "Nisan";

// console.log(dizi2);
// console.log(dizi1);
// console.log(typeof dizi2);

// let personel1 = {
//   isim: "Enes",
//   soyisim: "Bayram",
//   yas: 23,
// };
// let personel2 = {
//   isim: "Gizem",
//   soyisim: "Yerlikaya",
//   yas: 22,
// };
// let rakamlar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let personelArray = [personel1, personel2, 1, true, rakamlar];
// console.log(personelArray);
// console.log(personelArray[0].isim);
// console.log(personelArray[1].yas);

//? Foreach Döngüsü : Dizilerde kullanıyoruz.

// let isimler = ["Enes", "Gizem", "Bilal", "Kübra", "Ayşenur", "Adem"];

//! for döngüsü ile dizileri döndük
// for (let i = 0; i < isimler.length; i++) {
//   console.log(isimler[i]);
// }

//! while döngüsü ile dizileri döndük
// let sayac = 0;
// while (sayac < isimler.length) {
//   console.log(isimler[sayac]);
//   sayac++;
// }

//! forEach döngüsü ile dizileri döndük
// isimler.forEach(function (isim) {
//   console.log(isim);
// });

//? Dizinin Metotları:

// let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
// let arabalar2 = ["hundai", "tofaş"];

//? push metot(dizinin sonuna eleman ekler ve sayısını döner)
// console.log(arabalar.length);
// let diziUzunluk = arabalar.push("Opel");
// console.log(diziUzunluk);

//? unshift metot(verilen degeri dizinin başına ekler)
// arabalar.unshift("hundai");
// console.log(arabalar);

//? pop metot(verilen dizideki son elemanı siler)
// arabalar.pop();
// console.log(arabalar);

// let silinenEleman = arabalar.pop();
// console.log(arabalar);
// console.log(silinenEleman);

//? shift metot(verilen dizideki ilk elemanı siler)
// arabalar.shift();
// console.log(arabalar);

// let silinenEleman = arabalar.shift();
// console.log(arabalar);
// console.log(silinenEleman);

//?splice metot
// console.log(arabalar);
// arabalar.splice(2, 0, "hundai"); // 2.indekse, bişi silmeden,hundai ekle
// console.log(arabalar);

// console.log(arabalar);
// arabalar.splice(2, 2, "hundai"); // 2.indeksten başla, iki eleman sil , yerine hundai ekle
// console.log(arabalar);

// console.log(arabalar);
// arabalar.splice(2, 2); //2.indeksten başla iki tane sil
// console.log(arabalar);

//?toString metot(verilen diziyi sttringe dönüştürür)
// console.log(typeof arabalar);
// let stringArabalar = arabalar.toString();
// console.log(typeof stringArabalar);
// console.log(stringArabalar);

//? join metot(verilen dizideki elemanları verilen şey ile birleştirip string yapar)
// let stringArabalar = arabalar.join("-");
// console.log(stringArabalar);

//? concet metot(verilen iki diziyi birleştirir yine dizidir)
// let birlesmis = arabalar.concat(arabalar2);
// console.log(birlesmis);

//? slice metot(verilen degere göre diziyi böler)
// console.log(arabalar);
// let ayriDizi = arabalar.slice(2);
// console.log(ayriDizi);

//? length özellik (verilen dizinin uzunluğunu döner)
// console.log(arabalar.length);

//? reverse metot (verilen dizinin ters halini döner)
// console.log(arabalar);
// let tersHali = arabalar.reverse();
// console.log(tersHali);

// console.log(arabalar);
// arabalar.reverse();
// console.log(arabalar);

//? split metot(verilen string degerleri belirlenen ayraca göre ayırıp diziye dönüştürür)
// let isimler = "Enes,Ali,Veli";
// let isimlerDizi = isimler.split(",");
// console.log(isimlerDizi);

//? indexof metot(verilen elemanın index numarasını döner)
// let indeks = arabalar.indexOf("renault");
// console.log(indeks);

//? includes metot (verilen elemanı içeriyormu ona bakar)
// let sonuc = arabalar.includes("bmw");
// console.log(sonuc);

//? ürün arama uygulaması

// let urun1 = {
//   isim: "ACER Swift",
//   kategori: "Teknoloji",
//   fiyat: 6.219,
// };
// let urun2 = {
//   isim: "ACER Nitro 5",
//   kategori: "Teknoloji",
//   fiyat: 15.475,
// };
// let urun3 = {
//   isim: "ACER Gaming",
//   kategori: "Teknoloji",
//   fiyat: 13.999,
// };
// let urun4 = {
//   isim: "LENOVO V15",
//   kategori: "Teknoloji",
//   fiyat: 10.999,
// };
// let urun5 = {
//   isim: "LENOVO Ideapad",
//   kategori: "Teknoloji",
//   fiyat: 4.51,
// };

// let urunler = [urun1, urun2, urun3, urun4, urun5];
// let filtreliUrunler = [];
// let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz:");

// filtreliUrunleriDoldur(urunler);
// filtreliUrunleriYazdir(filtreliUrunler);

// function filtreliUrunleriDoldur(urunler) {
//   urunler.forEach(function (urun) {
//     if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
//       filtreliUrunler.push(urun);
//     }
//   });
// }
// function filtreliUrunleriYazdir(urunler) {
//   urunler.forEach(function (urun) {
//     console.log(
//       "-------------------------------------------------------------------------------"
//     );
//     console.log(
//       "Ürün İsmi:" +
//         urun.isim +
//         "|" +
//         "Ürün fiyatı:" +
//         urun.fiyat +
//         "|" +
//         "Ürün Kategorisi:" +
//         urun.kategori
//     );
//     console.log(
//       "-------------------------------------------------------------------------------"
//     );
//   });
// }

//? ürün arama uygulaması version2

// let marka1 = {
//   isim: "Koton",
//   kategori: "Tshirt",
//   renk: "kırmızı",
//   beden: "S",
// };
// let marka2 = {
//   isim: "LCW",
//   kategori: "Elbise",
//   renk: "kırmızı",
//   beden: "S",
// };
// let marka3 = {
//   isim: "Defacto",
//   kategori: "Etek",
//   renk: "kırmızı",
//   beden: "M",
// };
// let marka4 = {
//   isim: "Mavi",
//   kategori: "Pantolon",
//   renk: "kırmızı",
//   beden: "L",
// };

// let markalar = [marka1, marka2, marka3, marka4];
// let filtreliMarkalar = [];
// let kullaniciGirdisi = prompt("Lütfen aradığınız ürünü giriniz:");

// function filtrelenmisUrunleriTopla(markalar) {
//   markalar.forEach(function (marka) {
//     if (marka.isim.toLowerCase() === kullaniciGirdisi.toLowerCase()) {
//       filtreliMarkalar.push(marka);
//     }
//   });
// }

// function filtrelenmisUrunleriYazdir(markalar) {
//   markalar.forEach(function (marka) {
//     console.log(
//       "Ürün markası:" +
//         marka.isim +
//         "|" +
//         "Ürün kategorisi:" +
//         marka.kategori +
//         "|" +
//         "Ürün rengi:" +
//         marka.renk +
//         "|" +
//         "Ürün Bedeni:" +
//         marka.beden
//     );
//   });
// }

// filtrelenmisUrunleriTopla(markalar);
// filtrelenmisUrunleriYazdir(filtreliMarkalar);

//? Ürün Arama Uygulaması - Gelişmiş Versiyon

// let marka1 = {
//   isim: "Koton",
//   kategori: "Tshirt",
//   renk: "kırmızı",
//   beden: "S",
// };
// let marka2 = {
//   isim: "LWC",
//   kategori: "Elbise",
//   renk: "kırmızı",
//   beden: "S",
// };
// let marka3 = {
//   isim: "Defacto",
//   kategori: "Etek",
//   renk: "sarı",
//   beden: "M",
// };
// let marka4 = {
//   isim: "Mavi",
//   kategori: "Pantolon",
//   renk: "siyah",
//   beden: "L",
// };

// let markalar = [marka1, marka2, marka3, marka4];
// let filtreliMarkalar = [];

// let filtreTuru = prompt(
//   "Hangi kritere göre arama yapmak istiyorsunuz? (isim / kategori / renk / beden)"
// );
// let kullaniciGirdisi = prompt("Lütfen aradığınız değeri giriniz:");

// function filtrelenmisUrunleriTopla(markalar, filtreTuru, kullaniciGirdisi) {
//   markalar.forEach(function (marka) {
//     if (
//       //   marka[filtreTuru] &&
//       marka[filtreTuru].toLowerCase() === kullaniciGirdisi.toLowerCase()
//     ) {
//       filtreliMarkalar.push(marka);
//     }
//   });
// }

// function filtrelenmisUrunleriYazdir(markalar) {
//   if (markalar.length === 0) {
//     console.log("Eşleşen ürün bulunamadı.");
//     return;
//   }

//   markalar.forEach(function (marka) {
//     console.log(
//       "Ürün markası: " +
//         marka.isim +
//         " | Ürün kategorisi: " +
//         marka.kategori +
//         " | Ürün rengi: " +
//         marka.renk +
//         " | Ürün bedeni: " +
//         marka.beden
//     );
//   });
// }

// filtrelenmisUrunleriTopla(markalar, filtreTuru, kullaniciGirdisi);
// filtrelenmisUrunleriYazdir(filtreliMarkalar);

//? kitap bulma uygulaması

// let kitap1 = {
//   isim: "Her Şeyi Düşünme",
//   yazar: "Anne Bogel",
//   fiyat: 25,
//   raf: "1.5.RAF",
// };
// let kitap2 = {
//   isim: "Hiçbir Karşılaşma Tesadüf Değildir",
//   yazar: "Hakan Mengüç",
//   fiyat: 56,
//   raf: "2.3.RAF",
// };
// let kitap3 = {
//   isim: "İnsan Ne İle Yaşar",
//   yazar: "Tolstoy",
//   fiyat: 34,
//   raf: "3.4.RAF",
// };
// let kitap4 = {
//   isim: "Zafer Sızlanarak Kazanılmaz",
//   yazar: "Haluk Tatar",
//   fiyat: 45,
//   raf: "4.1.RAF",
// };
// let kitap5 = {
//   isim: "Şeker Portakalı",
//   yazar: "Jose Mauro de Vascancelos",
//   fiyat: 22,
//   raf: "5.3.RAF",
// };

// let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];

// // 1. satır

// let raf11 = {
//   kod: "1.1.RAF",
//   goster: false,
// };
// let raf12 = {
//   kod: "1.2.RAF",
//   goster: false,
// };
// let raf13 = {
//   kod: "1.3.RAF",
//   goster: false,
// };
// let raf14 = {
//   kod: "1.4.RAF",
//   goster: false,
// };
// let raf15 = {
//   kod: "1.5.RAF",
//   goster: false,
// };

// //2.satır

// let raf21 = {
//   kod: "2.1.RAF",
//   goster: false,
// };
// let raf22 = {
//   kod: "2.2.RAF",
//   goster: false,
// };
// let raf23 = {
//   kod: "2.3.RAF",
//   goster: false,
// };
// let raf24 = {
//   kod: "2.4.RAF",
//   goster: false,
// };
// let raf25 = {
//   kod: "2.5.RAF",
//   goster: false,
// };

// //3.satır

// let raf31 = {
//   kod: "3.1.RAF",
//   goster: false,
// };
// let raf32 = {
//   kod: "3.2.RAF",
//   goster: false,
// };
// let raf33 = {
//   kod: "3.3.RAF",
//   goster: false,
// };
// let raf34 = {
//   kod: "3.4.RAF",
//   goster: false,
// };
// let raf35 = {
//   kod: "3.5.RAF",
//   goster: false,
// };

// //4.satır

// let raf41 = {
//   kod: "4.1.RAF",
//   goster: false,
// };
// let raf42 = {
//   kod: "4.2.RAF",
//   goster: false,
// };
// let raf43 = {
//   kod: "4.3.RAF",
//   goster: false,
// };
// let raf44 = {
//   kod: "4.4.RAF",
//   goster: false,
// };
// let raf45 = {
//   kod: "4.5.RAF",
//   goster: false,
// };

// // 5.satır

// let raf51 = {
//   kod: "5.1.RAF",
//   goster: false,
// };
// let raf52 = {
//   kod: "5.2.RAF",
//   goster: false,
// };
// let raf53 = {
//   kod: "5.3.RAF",
//   goster: false,
// };
// let raf54 = {
//   kod: "5.4.RAF",
//   goster: false,
// };
// let raf55 = {
//   kod: "5.5.RAF",
//   goster: false,
// };

// let raflar = [
//   [raf51, raf52, raf53, raf54, raf55],
//   [raf41, raf42, raf43, raf44, raf45],
//   [raf31, raf32, raf33, raf34, raf35],
//   [raf21, raf22, raf23, raf24, raf25],
//   [raf11, raf12, raf13, raf14, raf15],
// ];

// function rafOlustur() {
//   console.clear();
//   let satir = "";
//   for (let i = 0; i < raflar.length; i++) {
//     for (let j = 0; j < 5; j++) {
//       satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "---");
//     }
//     console.log(satir);
//     console.log("--------------------");
//     satir = "";
//   }
// }

// function kodBul(kitapIsmi) {
//   let rafKod = null;
//   kitaplar.forEach(function (kitap) {
//     if (kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(), 0)) {
//       rafKod = kitap.raf;
//     }
//   });
//   return rafKod;
// }

// function raftaGoster(rafKodu) {
//   for (let i = 0; i < raflar.length; i++) {
//     for (let j = 0; j < 5; j++) {
//       if (raflar[i][j].kod == rafKodu) {
//         raflar[i][j].goster = true;
//         break;
//       }
//     }
//   }
// }

// rafOlustur();

// let kitapIsmi = prompt("Aradığınız kitap ismini giriniz:");
// let rafKod = kodBul(kitapIsmi);
// console.log(rafKod);

// if (rafKod != null) {
//   raftaGoster(rafKod);
//   rafOlustur();
// } else {
//   alert("Girdiğiniz kitap kitaplıkta bulunmamaktadır..");
// }

//? String Sınıfının Fonksiyonları

// let kurs = "Modern Web Geliştirme Kursu";
// let tarih = "2025";

//! charAt() metot = verilen indeksin degerini (stringini) döner
// let karakter = kurs.charAt(7);
// console.log(karakter);

//! todoconcat() metot = iki string ifadeyi birleştirir
// let sonuc = kurs.concat("-", tarih, "-", "Gizem");
// console.log(sonuc);

//!indexOf metot= verilen string in indexini verir
// let index = kurs.indexOf("W");
// console.log(index);

//! lastIndexOf metot= verilen kelimenin indexini verir
// let index = kurs.lastIndexOf("Kursu");
// console.log(index);

//! toUpperCase() metot= bütün kelimelerin hepsini büyük harfe çevirir
// let sonuc = kurs.toUpperCase();
// console.log(sonuc);

//! toLowerCase() metot=bütün kelimelerin hepsini küçük harfe çevirir
// let sonuc = kurs.toLowerCase();
// console.log(sonuc);

//! trim() metot= verilen degerdeki space (boşluk karakterleri ) sağdan soldan temizler
// console.log(kurs.trim());

//! slice() metot = kelimenin istenilen indeks degerleri arasını alabiliyoruz
// console.log(kurs);
// console.log(kurs.slice(22, 27));

//! substring() metot =kelimenin istenilen indeks degerleri arasını alabiliyoruz
// console.log(kurs.substring(0, 6));

//! replace() metot = bir kelimeyle bir kelimeyi değiştirmeyi sağlar ilki değişecek olan ikincisi yerine gelecek olan degerdir
// console.log(kurs);
// console.log(kurs.replace("Modern", "Güncel"));

//! split metot()= kelimeleri belirli bir şeye göre ayırıp dizinin içierisine ayrı ayrı ekler
// console.log(kurs);
// console.log(kurs.split(" "));

//! valueOf() metot = primitiv hale dönüyor
// console.log(kurs.valueOf);

//! startsWith() metot = verilen deger ile mi başlıyor kontrol ediyor true veya false dönüyor
// console.log(kurs);
// console.log(kurs.startsWith("M"));

//! endsWith() metot = verilen deger ile mi bitiyor kontrol ediyor true veya false dönüyor
// console.log(kurs);
// console.log(kurs.endsWith("u"));

//? Math Sınıfının Fonksiyonları

//! floor() metotu = virgüllü sayının virgülden sonrasını atar
// let a = 3.99;
// console.log(Math.floor(a));

//! ceil() metotu = virgüllü sayıynın degerine bakmaksızın bir üst sayıya yuvarlıyor
// let a = 3.01;
// console.log(Math.ceil(a));

//! raund() metotu = virgülden sonraki sayıya göre bir üst veya bir alt sayıya yuvarlıyor
// let a = 3.5;
// console.log(Math.round(a));

//! max() metotu = bir dizi vermen lazım içinden büyük olanı yazdırıyor
// console.log(Math.max(1, 2, 56, 67, 21, 55, 11));

//! min() metotu = bir dizi vermen lazım içinden küçük olanı yazdırıyor
// console.log(Math.min(1, 2, 3, 4, 55, -99));

//! abs() metotu = mutlak degeri almayı sağlar
// console.log(Math.abs(-15.456));

//! sqrt() metotu = karekök almayı sağlar
// console.log(Math.sqrt(144));

//! pow() metotu = üs almak için kullanılır
// console.log(Math.pow(5, 3));

//! PI sayısı
// console.log(Math.PI);

//! random() metotu = rastgele degerler üretmek için kullanılıyor

//! bu metot 0 ile 1 arasında virgüllü sayılar üretir ben 1 ile 100 arasında üretmesini istiyorum
//! o yüzden önce 100 ile çarptım sonra floor ile virgülden sonrasını attım
// console.log(Math.floor(Math.random() * 100));

//? Date Sınıfının Fonksiyonları

//! bir tarih oluşturuyoruz o tarihe;
//! get diyerek ay gün saat dakika saniyesini çekebiliriz
//! set diyerek ise yeni degerler atayabiliyoruz

// let tarih = new Date(2003, 0, 2, 10, 40, 50); //! spesifik bir tarih oluşturmak istersek
// console.log(tarih);

// let tarih = new Date();

// console.log(tarih.toString());
// console.log(typeof tarih.toString());

// console.log(tarih);
// console.log(tarih.getFullYear()); //! tarihin yılını döner
// console.log(tarih.getDate()); //! ayın kaçıncı günü olduğunu döner
// console.log(tarih.getDay()); //! haftanın kaçıncı günü olduğunu söyler
// console.log(tarih.getHours()); //! saati döner
// console.log(tarih.getMinutes()); //! dakikayı döner
// console.log(tarih.getMonth()); //! ay ı veriyor ama bir nokta varki degerler 0 dan başlıyor yani ocak=0,şubat=1 gibi
// console.log(tarih.getSeconds()); //! saniyeyi döner
// console.log(tarih.toLocaleDateString()); //! tarihi ; gün ay yıl olarak döner
// console.log(tarih.toLocaleTimeString()); //! saat dakika saniye yi öner
// console.log(tarih.toLocaleString()); //! gün ay yıl ve saat dakika saniye yi döner

// console.log(tarih);
// tarih.setHours(5); //! saatini değiştirdik
// tarih.setDate(17); //! gününü değiştirdik
// tarih.setMonth(11); //! ayı değiştirdik (11=aralık)
// tarih.setMinutes(45); //! dakikayı değiştirdik

// tarih.setHours(tarih.getHours() + 2);
// console.log(tarih);

//? DEĞER VE REFERANS TİPLER
// ! İlkel(primitive) Deger Tipli Veri Türleri:number,boolean,undefined,null,symbol
//! İlkel olmayan(referans) Tipli Veri Türleri:object,array,function

// let a = 7;
// let b = a;
// console.log("a : " + a);
// console.log("b : " + b);
// console.log("--------------");

// b = 10;
// console.log("a : " + a);
// console.log("b : " + b);

// let dizi1 = [1, 2, 3];
// let dizi2 = [1, 2, 3];
// if (dizi1 == dizi2) {
//   console.log("eşittir");
// } else {
//   console.log("eşit değildir");
// }
//! sonuç olarak bunlar eşit değildir çıkacak sebebi ise
//! ram bellekteki adreslerinin farklı olması
//! deger tipli değil referans tipli çalışıyorlar
//! degerlerinin eşit olmasına değil referanslarının eşit olup olmamasına bakıyor
//! bu degerler ram ın heap bölgesinde farklı yerlerde tutuluyor

// let dizi1 = [1, 2, 3];
// let dizi2 = dizi1;
// if (dizi1 == dizi2) {
//   console.log("eşittir");
// } else {
//   console.log("eşit değildir");
// }
// ! eşittir sonucu çıkcak çünkü let dizi2 = dizi1; diyerek dizi2 m sende dizi1 in baktığı yere bak demiş oldum

// let dizi1 = [1, 2, 3];
// let dizi2 = dizi1;

// dizi2.push(12);
// console.log(dizi1);
// console.log(dizi2);
//! görüldükü deger tiplilerde a da yapılan değişiklik b yi etkilemiyordu ama referans tiplilerde etkiliyor
