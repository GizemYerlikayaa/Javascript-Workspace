/*
1-Javascript senkron çalışan bir programlama dilidir.

2-ASENKRON ÇALIŞMASINA SEBEP OLANLAR:
---Timing işlemlerinde (zamansal functionlar)
---Eventlar(olay)
---Http isteklerinde
------------ CALLBACK-PROMISE-ASYNC & AWAIT YAPILARINI KULLANARAK-------
-----------> Asenkron yapıları senkrona çevirip yönetiyoruz...----------
*/

// console.log("Gizem");
// setTimeout(() => {
//   console.log("1000 ms doldu ve çalıştı.");
// }, 1000);
// setTimeout(() => {
//   console.log("500 ms de doldu ve çalıştı.");
// }, 500);
// setTimeout(() => {
//   console.log("750 ms olan da doldu ve çalıştı.");
// }, 750);

// console.log("Yerlikaya");

//----------------------------------------------------------------------
//?ASENKRON PROBLEMİ(http istekleri)

// const users = [
//   {
//     userId: 5,
//     post: "Enes Post 1",
//   },
//   {
//     userId: 5,
//     post: "Enes Post 2",
//   },
//   {
//     userId: 5,
//     post: "Enes Post 3",
//   },
//   {
//     userId: 6,
//     post: "Ali Post 1",
//   },
//   {
//     userId: 7,
//     post: "Betül Post 1",
//   },
// ];

// function getUserId(callback) {
//   setTimeout(() => {
//     // servise gittik ve cevabı aldık
//     // return 5;
//     let userId = 7;
//     callback(userId);
//   }, 1000);
// }

// function getPostByUserId(userId) {
//   //Gerçekte bir rest api ye istek atacaksınız o cevap bize oradan gelecek.
//   setTimeout(() => {
//     users.forEach((user) => {
//       if (user.userId === userId) {
//         console.log(user.post);
//       }
//     });
//   }, 500);
// }

// getUserId(getPostByUserId);

// let userId = getUserId();
// getPostByUserId(userId);

// //! görüldüğü gibi problem oluştu senkrona çevireceğiz
// //! callback - promise - async await yapılarıyla

//? CALLBACK NEDİR ?

// function getName(callback) {
//   setTimeout(() => {
//     // servisten ismimi getirdi
//     let name = "Gizem";
//     callback(name);
//   }, 1000);
// }
// function getSurname(name, callback) {
//   setTimeout(() => {
//     let surname = "Yerlikaya";
//     callback(surname);
//   }, 500);
// }
// function getAge(name, surname, callback) {
//   setTimeout(() => {}, 300);
//   let age = 22;
//   callback(age);
// }
// // getName();
// // getSurname();

// //getName(getSurname);

// getName((name) => {
//   getSurname(name, (surname) => {
//     getAge(name, surname, (age) => {
//       console.log(name, surname, age);
//     });
//   });
// });

//! callback:bir fonksiyonu bir fonksiyona parametre geçerek asenkron yapıyı senkron yapıya çeviririz.

//? AJAX = Asynchronous JavaScript And XML.
//! TARAYICI ---(AJAX)---> SERVER
//! sunucudan bir istek atıp veri almak için kullanıyoruz
//! readyState = XMLHttpRequest'in durumunu tutar.
//! readyState = 4 (işlendi bitti sonuç hazır ) ve status = 200 (istek başarılı) olmalı
//! responseText = cevap metnini alabilmek için
//! onreadystatechange = readyState im değişitkçe bir şeyler yaptırmak için

//? XmlHttpRequest Kullanımı

// function prepareURL(url, id) {
//   if (id === null) {
//     return url;
//   }
//   return `${url}?postId=${id}`;
// }

// function getComments(url, id) {
//   let newURL = prepareURL(url, id);
//   const xhr = new XMLHttpRequest();
//   xhr.addEventListener("readystatechange", () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       console.log(JSON.parse(xhr.responseText));
//     }
//   });

//   xhr.open("GET", newURL);
//   xhr.send();
// }
// getComments("https://jsonplaceholder.typicode.com/comments", null);

// function getData(url) {
//   const xhr = new XMLHttpRequest();
//   xhr.addEventListener("readystatechange", () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       console.log(JSON.parse(xhr.responseText));
//     }
//   });

//   xhr.open("GET", url);
//   xhr.send();
// }
// getData("https://jsonplaceholder.typicode.com/users");

//? ------ROMİSE------
//! PROMİSE callback alternatifidir (EC6 ile geldi)
//! pending = bekleme / fullfield (resolve) = işlem başarılı / rejected = reddetdildi

// let check = true;
// const promise1 = new Promise((resolve, reject) => {
//   if (check) {
//     resolve("Promise başarılı");
//   } else {
//     reject("Promise başarılı değil");
//   }
// });
// console.log(promise1);

// let check = true;
// function createPromise() {
//   return new Promise((resolve, reject) => {
//     if (check) {
//       resolve("Promiste herhangi bir sıkıntı yok");
//     } else {
//       reject("Promiste sıkıntı var !");
//     }
//   });
// }
// createPromise()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Her zaman çalışır");
//   });

//? PROMİSE + XMLHTTPREQUEST

// function readStudents(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     try {
//       xhr.addEventListener("readystatechange", () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         }
//       });
//     } catch (error) {
//       console.log("JSON da problem var");
//       reject(error);
//     }
//     xhr.open("GET", url);
//     xhr.send();
//   });
// }
// readStudents("students.json")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//

// function getUsers(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange", () => {
//       try {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         }
//       } catch (error) {
//         reject(error);
//       }
//     });
//     xhr.open("GET", url);
//     xhr.send();
//   });
// }

// function getCommentsByUserID(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange", () => {
//       try {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         }
//       } catch (error) {
//         reject(error);
//       }
//     });
//     xhr.open("GET", url);
//     xhr.send();
//   });
// }

// getUsers("https://jsonplaceholder.typicode.com/users/3")
//   .then((response) => {
//     console.log(response.id);
//     return getCommentsByUserID(
//       `https://jsonplaceholder.typicode.com/comments/${response.id}`
//     );
//   })
//   .then((res) => {
//     console.log(res);
//   })

//   .catch((error) => {
//     console.log(error);
//   })
//   .finally("Her zaman çalışır");

//! promise.all

// const p1 = Promise.resolve("Birinci promise başarılı");
// const p2 = Promise.resolve("İkinci promise başarılı");
// const p3 = new Promise((resolve, reject) => {
//   resolve("Üçüncü promise başarılı");
// });
// const p4 = Promise.reject("Dördüncü promise hatalı");
// Promise.all([p1, p2, p3, p4])
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//? -------FETCH API-------
//! callback ---yerine---> promise
//! ajax(xmlhttprequest) ---yerine---> fetch api

// function getStudents(url) {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// getStudents("students.json");

// function getData(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// }
// getData("https://jsonplaceholder.typicode.com/albums");

//! yukarıdaki ile aynı şey :) başka açıdan sadece :)

// function getData(url) {
//   return fetch(url);
// }
// getData("https://jsonplaceholder.typicode.com/albums")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//! post örneği gibi ama server yok çalışmaz
// function saveStudents() {
//   fetch("https://jsonplaceholder.typicode.com/albums", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
// }

//? ASYNC AWAİT
//! kodları çok daha temiz kodlamayı sağlayan bizi promise then zincirinden kurtaran can simidi :)

//! başında async olunca döndürdüğü tip promise olur
// async function hello() {
//   return "Hello World";
// }
// hello().then((response) => console.log(response));

//! then zinciri örneği

// document.querySelector("#button").addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/comments/1")
//     .then((response) => response.json())
//     .then((post) => {
//       fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then((response) => response.json())
//         .then((comments) => console.log(comments));
//     });
// });

//? şimdi bu yukarıdaki kodu then zincirinden kurtaralım ASYNC AWAİT ile

// document.querySelector("#button").addEventListener("click", async () => {
//   const responsePost = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   const post = await responsePost.json();
//   const responseComments = await fetch(
//     `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
//   );
//   const comments = await responseComments.json();
//   console.log(comments);
// });

//! bir tur daha kısaltılmış hali

// document.querySelector("#button").addEventListener("click", async () => {
//   const post = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();

//   const comments = await (
//     await fetch(
//       `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
//     )
//   ).json();
//   console.log(comments);
// });

//!  SON TEKRAR KONU ÖZETİ

// Senkron: sırayla çalıan işlem parçacıkları
// Asenkron: eş zamanlı birden fazla iş yapmak için kullanılır

// 1.function
// 2.funtion
// 3.function

// JavaScript senkron çalışan bir programlama dilidir.

// ASENKRON ÇALIŞMASINA SEBEP OLAN DURUMLAR:

// 1-Timig
// 2-Event
// 3-HTTP İSTEKLERİ
//     -XMLHttpRequest
//     -Fetch Api
//     -Axios

// ASENKRONU YÖNETMEK İÇİN:

// 1-Callback EC6 ÖNECESİ
// 2-Promise (then then then...) EC6 2015
// 3-Async Await EC7
