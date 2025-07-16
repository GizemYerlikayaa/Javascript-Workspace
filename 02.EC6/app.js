//? Arrow (Function)
//! bu eski kullanım idi,EC6 ile bu değiştirildi

// function yazdir() {
//   console.log("Hello World");
// }
// yazdir();

// const yazdir = () => {
//   console.log("Hello World");
// };
// yazdir();

// const yazdir = (firstName, lastName) => {
//   console.log("Merhaba", firstName, lastName);
// };
// yazdir("Gizem", "Yerlikaya");

//! süslü parantez içerisindeki kod satırı tek satırdan oluşuyorsa süslü parantezleri kaldırabilirsin
// const yazdir = (firstName, lastName) => console.log("Merhaba", firstName, lastName);
// yazdir("Gizem", "Yerlikaya");

//! arrow un tek bir parametresi varsa parantezleri kaldırabilirsin
// const yazdir = (firstName) => console.log("Merhaba", firstName);
// yazdir("Gizem");

//! tek bir işlem yapıp return yaptığı için return ude kaldırabilirsin
// const kupAl = (x) => x * x * x;
// console.log("Değeri:", kupAl(3));

//? Destructing (dizi object)

//! Dizilerde ES6 dan önce bu şekilde kullanıyorduk
// let lengs = ["C#", "C++", "JavaScript", "Python"];
// let leng1, leng2, leng3, leng4;

// leng1 = lengs[0];
// leng2 = lengs[1];
// leng3 = lengs[2];
// leng4 = lengs[3];

// console.log(leng1, leng2, leng3, leng4);

//!lakin EC6 ile şöyle bir güzellik geldi
// let lengs = ["C#", "C++", "JavaScript", "Python"];
// let [leng1, leng2, leng3, leng4] = lengs;
// console.log(leng1, leng2, leng3, leng4);

// const hesapla = (a, b) => {
//   const toplam = a + b;
//   const cikar = a - b;
//   const carp = a * b;
//   const bol = a / b;
//   const dizi = [toplam, cikar, carp, bol];
//   return dizi;
// };
// let [a, b, c, d] = hesapla(10, 2);
// console.log(a, b, c, d);

// object eski kullanım böyle idi
// const person = {
//   firstName: "Gizem",
//   lastName: "Yerlikaya",
//   salary: 250000,
//   age: 25,
// };
// let isim, soyisim, maas, yas;
// isim = person.firstName;
// soyisim = person.lastName;
// maas = person.salary;
// yas = person.age;

// console.log(isim, soyisim, maas, yas);

//object EC6 ile yeni kullanım
// const person = {
//   firstName: "Gizem",
//   lastName: "Yerlikaya",
//   salary: 250000,
//   age: 25,
// };

// let { firstName: isim, lastName: soyisim, salary: maas, age: yas } = person;
// console.log(isim, soyisim, maas, yas);

//? Spread kullanımı

//eski kullanım
// let numbers = [10, 20, 30, 40];
// function add(a, b, c, d) {
//   console.log(a + b + c + d);
// }
// add(numbers[0], numbers[1], numbers[2], numbers[3]);

// EC6
// let numbers = [10, 20, 30, 40];
// const add = (a, b, c, d) => {
//   console.log(a + b + c + d);
// };
// add(...numbers);

//eski yöntem
// const diller1 = ["Java", "C#"];
// const diller2 = ["Php", "Python", diller1[0], diller1[1]];
// console.log(diller2);

//yeni yöntem
// const diller1 = ["Java", "C#"];
// const diller2 = ["Php", "Python", ...diller1];
// console.log(diller2);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [a, b, ...kalanSayilar] = numbers;
// console.log(kalanSayilar);

// const array1 = ["Ali", "Veli", "Seher", "Fatma"];
// const array2 = [...array1];
// console.log(array2);

//? ForEach in arrow ile

// let names = ["Enes", "Gizem", "Sude", "Ahmet"];
// names.forEach(function (name) {
//   console.log(name);
// });

// let names = ["Enes", "Gizem", "Sude", "Ahmet"];
// names.forEach((name) => {
//   console.log(name);
// });

//? For in  Döngüsü
//! for(degişken tanımlama / in / dizi ismi) şeklinde
//! for in döngüsü index numaralarını döner

// let names = ["Enes", "Gizem", "Sude", "Ahmet"];
// for (let name in names) {
//   console.log(name, names[name]);
// }

//? For of Döngüsü
//! for(degişken tanımlama / of / dizi ismi) şeklinde
//! for in döngüsü degerleri döner
//! forEach gibi

// let names = ["Enes", "Gizem", "Sude", "Ahmet"];
// for (let isim of names) {
//   console.log(isim, names.indexOf(isim));
// }

//? Map ----->key value
//! mapler arraylerinbir alternatifidir arraylerden farkıda key value şeklinde degerlerini tutmasıdır
//! map ler arrayler gibi dizi türüdür

// const map1 = new Map();
// let value;
// map1.set(34, "İstanbul");
// map1.set(35, "İzmir");
// map1.set(6, "Ankara");
// map1.set(50, "Nevşehir");

// console.log(map1.get(6));
// console.log(map1.get(50));

// value = map1.size;
// console.log(value);

// value = map1.delete(35);
// console.log(value);
// console.log(map1.size);

// console.log(map1.has(35));
// console.log(map1.has(3));

//! for of ile map üzerinde dönebiliriz
//! keys() -------> key ları döner
//! values() -------> value ları döner
// for (let [key, value] of map1) {
//   console.log(key, value);
// }

// const keys = Array.from(map1.keys());
// keys.forEach((key) => {
//   console.log(key, map1.get(key));
// });

// for (let key of map1.keys()) {
//   console.log(key);
// }

// for (let value of map1.values()) {
//   console.log(value);
// }

//! map ten array e çevirmek

// const array = Array.from(map1);
// console.log(array);
// array.forEach((value) => {
//   console.log(value[0]);
// });

//! arrayı map e çevirmek
// const array2 = [
//   [34, "İstanbul"],
//   [50, "Nevşehir"],
//   [35, "İzmir"],
//   [6, "Ankara"],
// ];
// const myMap = new Map(array2);

// const myArray = Array.from(myMap);
// console.log(myArray);

//! önemli bir nokta
// const map1 = new Map();
// map1.set(34, "İstanbul");
// map1.set(35, "İzmir");
// map1.set(6, "Ankara");
// map1.set(50, "Nevşehir");
// map1.set([1, 2, 3], "array");

// console.log(map1.get([1, 2, 3]));
//! burada referans tip kullandın diye bulamaz onu ama dişarıda tanımlasak şu şekil bulurdu
// const map1 = new Map();
// let key = [1, 2, 3];
// map1.set(34, "İstanbul");
// map1.set(35, "İzmir");
// map1.set(6, "Ankara");
// map1.set(50, "Nevşehir");
// map1.set(key, "array");

//? set
//! setlerde map ler gibi dizi çeşitlerinden bir tanesi setlerde dizilerin alternatifi
//! setlerin farkı şu setlerin içerisine koyduğumuz değerler yanlızca bir kez tutuluyor birden fazla aynı deger tutulamıyor
//! tek farkı degeri bir kere tutabilmemiz

// const set = new Set();
// set.add("Gizem");
// set.add("Gizem");
// set.add("Gizem");
// set.add("Gizem");
// set.add(true);
// set.add(3.14);
// set.add(7);
// set.add({
//   username: "Gizem",
//   lastname: "Yerlikaya",
// });
// let dizi = [1, 2, 3, 4, 5];
// set.add(dizi);
//! size ı 6 yani Gizem birden fazla eklenmesine rağmen sadece 1 tanesini alır setin de mantığı budur yani
// set.delete(dizi);
// console.log(set.size);
//! bu referans tipli olduğundan böyle silinmez değişkene ataman lazım
// console.log(set.has(dizi));

// console.log(set.has("Gizem"));

// for (let value of set) {
//   console.log(value);
// }

// const values = Array.from(set);
// console.log(values);

// values.forEach((value) => {
//   console.log(value);
// });

//! setten array oluşturma
// const array = Array.from(set);
// console.log(array);

//! array dan set oluşturma
// let array = [1, "Gizem", true, 17.4, [1, 2, 3]];

// const newSet = new Set(array);
// console.log(newSet);

//? template literals
//! eski kullanım

// function write(firstName, lastName) {
//   console.log("İsim:" + firstName + " " + "Soyisim:" + lastName + " ");
// }
// write("Gizem", "Yerlikaya");

//! EC6 ile yeni kullanım

// const write = (firstName, lastName) => {
//   console.log(`
//     İsim: ${firstName}
//     Soyisim: ${lastName}`);
// };
// write("Gizem", "Yerlikaya");

// const getUserId = (userId) => {
//   console.log(`http://localhost:8080/users/${userId}`);
// };
// getUserId(10);

//? OOP (Object Oriented Programming)

// class Insan {
//   //sınıf
//   /*
//     1-özellikler
//     2-yapıcı metot (constructor)
//     3-Function
//     */
//   constructor(isim, soyisim, yas, maas) {
//     this.isim = isim;
//     this.soyisim = soyisim;
//     this.yas = yas;
//     this.maas = maas;
//   }

//   bilgileriGöster() {
//     console.log(
//       `
//       isim:${this.isim}
//       soyisim:${this.soyisim}
//       yas:${this.yas}
//       maas:${this.maas}
//       `
//     );
//   }
// }
// const insan1 = new Insan("Gizem", "Yerlikaya", 22, 250000);
// const insan2 = new Insan("Enes", "Bayram", 23, 100000);

// console.log(insan1.isim);
// insan1.bilgileriGöster();
// insan2.bilgileriGöster();

//? static

//! bir şey function veya özellik statik ise class a özgüdür; değilse nesneye özgüdür

// class Insan {
//   static languagesCount = 10;

//   constructor(firstName, lastName, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
//   }

//   writeInfo() {
//     console.log(
//       this.firstName,
//       this.lastName,
//       this.salary,
//       Insan.languagesCount
//     );
//   }
// }

// const insan1 = new Insan("Gizem", "Yerlikaya", 250000);
// insan1.writeInfo();

// class Matematik {
//   topla(a, b) {
//     console.log(a + b);
//   }
//   cikar(a, b) {
//     console.log(a - b);
//   }
//   static carp(a, b) {
//     console.log(a * b);
//   }
//   bol(a, b) {
//     console.log(a / b);
//   }
// }

// const mat1 = new Matematik();
// mat1.topla(7, 5);
// mat1.carp(4, 7);

//! static olarak tanımlanmamşsa nesne üzerinden erişilir
//! satatic olarak tanımlanmışsa class ismi üzerinden erişilr
// Matematik.topla(7, 5);

//? inheritance (kalıtım,miras alma)

// class Person {
//   firstname = "Gizem";

//   write() {
//     console.log("Person write bu", this.firstname);
//   }
// }

// class Student extends Person {
//   write() {
//     console.log("Person sinifindan geldi", this.firstname);
//     super.write();
//   }
// }

// const student1 = new Student();
// student1.write();

//? this super

// class Person {
//   firstName = "Gizem";

//   write() {
//     console.log(this.firstName);
//   }
// }

// class Student extends Person {
//   write() {
//     super.write();
//   }
// }
// const student1 = new Student();
// student1.write();

// //?  super()
// class Person {
//   constructor(firstName, lastName, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
//   }

//   writeInfo() {
//     console.log(this.firstName, this.lastName, this.salary);
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName, salary) {
//     super(firstName, lastName, salary);
//   }

//   writeInfo() {
//     super.writeInfo();
//   }
// }

// class Engineer extends Person {
//   constructor(firstName, lastName, salary) {
//     super(firstName, lastName, salary);
//   }

//   writeInfo() {
//     super.writeInfo();
//   }
// }
// const student1 = new Student("Enes", "Bayram", 5000);

// const engineer1 = new Engineer("Sude", "Sena", 12000);
// student1.writeInfo();
// engineer1.writeInfo();
