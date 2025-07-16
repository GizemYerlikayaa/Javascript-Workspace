// ? DOM'U ANLAMAK(Document Object Module)
// ! Bizim bir web sayfamızda bulunan bütün elementlerin toplamına dom deniyor

//? DOCUMENT OBJESİ
//! Window onjesi içinde tanımlanmış bir objedir ve içinde birsürü özellik ve metot barındırır
//! Kendi sayfamızın bütün içeriği document yani bu objenin içerisindedir

// console.log(window);
// let value;
// console.log(document);

// value = document.location.href;
// value = document.location.hostname;
// value = document.location.port;
// value = document.location.pathname;

// value = document.characterSet;
// value = document.title;
// value = document.links;
// value = document.links[4];
// value = document.links.item(4);
// value = document.links.item(4).id;
// value = document.links.item(4).getAttribute("id");
// value = document.links.item(4).getAttribute("class");
// value = document.links.item(4).classList;
// value = document.links.item(4).classList[3];

// value = document.forms;
// value = document.forms.item(1);
// value = document.forms.item(1).method;
// value = document.forms.item(1).id;
// value = document.forms.item(1).name;
// value = document.forms.item(1).children;
// value = document.contentType;

// console.log(value);

//? Selectors (Seçiciler) - Style Özellikleri
//!classname,id,tag name

//? GetElementById : id ye göre elementi yakalar

// const button = document.getElementById("todoAddButton");
// console.log(button);

// console.log(button.id);
// console.log(button.getAttribute("id"));

// console.log(button.className);
// console.log(button.getAttribute("class"));

// const classListesi = button.classList[3];
// const classListesi = button.classList[2];

// const classListesi = button.classList;
// classListesi.forEach(function (className) {
//   console.log(className);
// });
// console.log(classListesi);

// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;
// console.log(buttonText);
// console.log(buttonText2);

// button.innerHTML = "<b> Todo Ekleyin</b>";
//! textContent yazılanı ful string olarak yazıyor
//! innerHTML ise stringin başındaki html etiketlerini algılıyor

//? getElementByClassName: class ismine göre yakalar.

// const todoList = Array.from(document.getElementsByClassName("list-group-item"));
// todoList.forEach(function (todo) {
//   console.log(todo.textContent);
// });
// console.log(todoList);

//? getElementByTagName: etiket ismine göre yakalar

// const forms = Array.from(document.getElementsByTagName("form"));
// forms.forEach(function (form) {
//   console.log(form);
// });
// console.log(forms[1].id);

// const todoList = document.getElementsByTagName("li");
// console.log(todoList);

//? querySelector -querySelectorAll
//?(id bir kez kullanılır querySelector ile al ama bir sınıf ismi birden fazla yerde kullanılabiliyor o zaman querySelectorAll ı kullanmalıyız)

//! bu iki metot yukarıda anlattıklarımızı farklı şekilde almayı sağlıyor

//! id ye göre sececeksek isminin başına # koyuyoruz
//! class nameine göre seceksek isminin başına . koyuyoruz

//! id ye göre;
// const clearButton = document.querySelector("#todoClearButton");
// console.log(clearButton);

// console.log(document.getElementById("todoClearButton"));

//! classname e göre;
// const todoList = document.querySelector(".list-group");
// console.log(todoList);

// const todo = document.getElementsByClassName("list-group");
// console.log(todo);

// const todoList = document.querySelectorAll(".list-group-item");
// console.log(todoList);

// const todoList = document.querySelectorAll(".list-group-item")[2];
// console.log(todoList);

//! tagname ine göre;
// const clearButton = document.querySelectorAll("form");
// console.log(clearButton);

// const todoList = document.querySelectorAll("li");
// console.log(todoList);

// const todoList = document.querySelectorAll("li:last-child");
// console.log(todoList);

// const todoList = document.querySelectorAll("li:nth-child(2)");
// console.log(todoList);

//! odd ---> tekleri seçer , even ---> çiftleri seçer
// const todoList = document.querySelectorAll("li:nth-child(odd)");
// console.log(todoList);

// const todoList = document.querySelectorAll("li:nth-child(even)");
// console.log(todoList);

// const toList = Array.from(document.querySelectorAll("li:nth-child(even)"));
// toList.forEach(function (toli) {
//   toli.style.backgroundColor = "red";
// });
// console.log(toList);
// const toList1 = Array.from(document.querySelectorAll("li:nth-child(odd)"));
// toList1.forEach(function (toli) {
//   toli.style.backgroundColor = "lightgrey";
// });
// console.log(toList1);

//? Style Kullanımı

// const tdo = document.querySelectorAll(".list-group-item")[0];
// const tdoList = document.querySelector(".list-group");
// const button = document.querySelector("#todoClearButton");

// tdo.style.color = "white";
// tdo.style.backgroundColor = "purple";
// tdo.style.fontWeight = "bold";
// tdo.style.paddingTop = "20px";
// tdo.style.paddingLeft = "70px";
// tdoList.style.marginTop = "60px";
// tdoList.style.marginLeft = "100px";
// button.style.backgroundColor = "red";
// button.style.fontWeight = "bold";
// button.style.padding = "10px";
// button.style.borderRadius = "50px";

//? HTML Elementleri Üzerinde Gezinmek

//! 0. indeksteki çocuk vs diye gider yani 0 dan başlanır

// const tdo = document.querySelectorAll(".list-group-item")[0];
// const tdoList = document.querySelector(".list-group");
// const card = document.querySelector(".card");
// const tdoLastChild = document.querySelector(".list-group-item:nth-child(4)");
// const row = document.querySelector(".row");

// let value;

//! Anneden çocuklara erişmek

// value = tdoList;
// value = tdoList.children[0];
// value = tdoList.children[1];
// value = tdoList.children[tdoList.children.length - 1];
// value = tdoList.children[3].textContent = "Degisti";

// value = Array.from(tdoList.children);
// value.forEach(function (todo) {
//   console.log(todo.textContent);
// });

//! Çocuktan anneye erişmek

// value = tdo;
// value = tdo.parentElement;
// value = tdo.parentElement.parentElement;

//! Kardeşler arasında gezinmek

// value = tdo;
// value = tdo.nextElementSibling.nextElementSibling; //! bir sonraki kardeşine git demek

// value = tdoLastChild;
// value = tdoLastChild.previousElementSibling; //! bir önceki kardeşine git demek

// örnek1:
// value = row.children[0].children[3].children[0].textContent = "degismistitle";

// örnek2:
// let tdo3 = row.children[0].children[3].children[2].children[2];
// tdo3.style.backgroundColor = "green";
// tdo3.textContent = "todo3 degitirildi";

// console.log(tdo3);

//? Dinamik Olarak Element Oluşturma

// ornek1:

// const cardBody = document.querySelectorAll(".card-body")[1];
// console.log(cardBody);
// const link = document.createElement("a");
// link.id = "goBlogWebSite";
// link.className = "btn btn-dark btn-sm mt-3";
// link.target = "_blank";
// link.innerHTML = "Kişisel Web Siteme Git";
// link.href = "http://enesbayram.com  ";

// cardBody.appendChild(link);

//örnek2:
// const tdoList = document.querySelector(".list-group");
// const tdo = document.createElement("li");
// const tdoLink = document.createElement("a");
// const i = document.createElement("i");

// tdo.className = "list-group-item d-flex justify-content-between";
// tdo.innerHTML = "Yeni oluşturulan todo";

// tdoLink.href = "#";
// tdoLink.className = "delete-item";

// i.className = "fa fa-remove";

// tdoLink.appendChild(i);
// tdo.appendChild(tdoLink);
// tdoList.appendChild(tdo);

//? Element Silmek

// const tdoList = document.querySelector(".list-group");
// const tdos = document.querySelectorAll(".list-group-item");

// tdos[0].remove();
// tdos[2].remove();
// console.log(tdos);

// let tdo1 = tdos[0];
// tdoList.removeChild(tdo1);

//? Elementleri Değiştirmek

// const cardBody = document.querySelectorAll(".card-body")[1];

// const newTitle = document.createElement("h2");
// newTitle.className = "card-title";
// newTitle.textContent = "Todo Listesi-YENİ";

// cardBody.replaceChild(newTitle, cardBody.childNodes[1]); //! ikinici elementi her zaman node tipinde yazman lazım

//? EVENTS

// bu alttaki ilk gösterilen pek tercih edilmez yinede bir örnek olsun burada
// html sayfasında onclick="changeTitle()" diyerek js sayfasına ise aşağıdaki kodalrı yazarak
// function changeTitle() {
//   document.querySelectorAll(".card-title")[1].textContent =
//     "to do başlığını değişti...";
// }

//------------------------

// adEventListener() --> 1.parametresinde event ın ismini click vs gibi, 2.parametresinde ise function
// const clearButton = document.querySelector("#todoClearButton");

// clearButton.addEventListener("click", function () {
//   document.querySelectorAll(".card-title")[1].textContent = "ahahhahahaha";
// });

//------------------------

// Iste bu kullanımı tercih edilen yöntem:
// const clearButton = document.querySelector("#todoClearButton");
// clearButton.addEventListener("click", changeTitle); // ! changeTitle() yazma sakın o zaman click tetiklenmeden çalışır

// function changeTitle() {
//   document.querySelectorAll(".card-title")[1].textContent =
//     "hahahahah değişti...";
// }

//--------------------------

// const clearButton = document.querySelector("#todoClearButton");

// clearButton.addEventListener("click", changeTitle);

// function changeTitle(e) {
//   console.log(e.target.className); // e.type --> tetiklenen event ın tipini verir - e.target -->  tetiklenen html etiketini verir - e.tatget.textContent - e.target.className
// }

//? MOUSE EVENTLARI:

//? DOMContentLoaded, load -->(bu ikisi sayfa yüklenmesi ile ilgili )
//? click, onclick, dblclick, (mouseover, mouseout,/ mouseenter, mouseleave)

// ! burada sayfa yüklendiğinde şu metot çalıştırılsın dedim

// document.addEventListener("DOMContentLoaded", run);
// function run() {
//   alert("sayfa yüklendi.");
// }

// window.addEventListener("load", run);
// function run() {
//   console.log("sayfa yüklendi.");
// }

// const cardTitle = document.querySelectorAll(".card-title")[1];

// cardTitle.addEventListener("click", run);
// function run(e) {
//   console.log(e.type);
// }

// const cardTitle = document.querySelectorAll(".card-title")[1];

// cardTitle.addEventListener("dblclick", run);
// function run(e) {
//   console.log(e.type);
// }

// const cardBody = document.querySelectorAll(".card-body")[1];
// cardBody.addEventListener("mouseover", run);
// function run(e) {
//   console.log(e.type);
// }

// const cardBody = document.querySelectorAll(".card-body")[1];
// cardBody.addEventListener("mouseout", run);
// function run(e) {
//   console.log(e.type);
// }

// const cardBody = document.querySelectorAll(".card-body")[1];
// cardBody.addEventListener("mouseenter", run);
// function run(e) {
//   console.log(e.type);
// }

//! anlaşılması gereken fark şu:
//! mouseover; card-body nin içindeki elementlerde de gezindiğinde tetiklenirken;
//! mouseenter sadece hedefte verilen html etiketinde çalışır.

//! mouseout ve mouseleave de aynı mantıkla çalışmaktadır.

// const cardBody = document.querySelectorAll(".card-body")[1];
// cardBody.addEventListener("mouseleave", run);
// function run(e) {
//   console.log(e.type);
// }

//? KLAVYE EVENTLARI:

//? keypres, keydown, keyup

//? keypres: klavyeden basılan harf ve rakamlarda tetiklenir sadece
//? keydown :klavyeden basılan her şeyde tetiklenir (örn:capslock vs)
//? keyup : tuştan elini kaldırdığında çalışıyor, her şeyde geçerli

// document.addEventListener("keypress", run);
// function run(e) {
//   console.log(e.key); //! klavyeden bastığım harfleri veriyor
//   console.log(e.keyCode); //! klavyeden bastığım şeylerin ascıı kodunu veriyor
//   console.log(e.which); //! keyCode ile aynı işlevde
// }

// document.addEventListener("keydown", run);
// function run(e) {
//   console.log(e.type);
//   console.log(e.keyCode);
// }

// document.addEventListener("keyup", run);
// function run(e) {
//   console.log(e.type);
// }

//! kullanıcı f5 e bastığında sayfa yenilenmesin istiyorum
// document.addEventListener("keydown", run);
// function run(e) {
//   console.log(e.keyCode);
//   if (e.keyCode == 116) {
//     alert("sayfa yenileme engellendi!");
//   }
//   e.preventDefault();
// }

//! formda girdiğim kelimeleri alıp yukarıdaki başlık kısmına yazdırıyorum
// const cardTitle = document.querySelectorAll(".card-title")[0];
// const input = document.querySelector("#todoName");

// input.addEventListener("keyup", run);

// function run(e) {
//   cardTitle.textContent = e.target.value;
// }

//? INPUT EVENTLARI:

//? focus-->inputa girdiğinizde tetikleniyor, blur-->inputtan çıktığınızda tetikleniyor,copy,paste,cut,select

// const tdo = document.querySelector("#todoName");

// tdo.addEventListener("focus", run);
// tdo.addEventListener("blur", run);
// tdo.addEventListener("copy", run);
// tdo.addEventListener("paste", run);
// tdo.addEventListener("cut", run);
// tdo.addEventListener("select", run);

// function run(e) {
//   console.log(e.type);
// }

//? SESSİON STORAGE KULLANIMI:
//! Session storage tarayıcı açılıp kapatıldığında degerleri silinen bir depolama türüdür.

//? deger ekleme
// sessionStorage.setItem("418", "Gülay");
// sessionStorage.setItem("39", "Gizem");
// sessionStorage.setItem("176", "İsmail");
// sessionStorage.setItem(552, 37);

//?deger silme
// sessionStorage.removeItem("39");

//? degeri alma (getItem da degerin keyini yazıyoruz sadece zaten o bize value yi verecek)
// let value = sessionStorage.getItem("418");
// if (value == null) {
//   console.log("Deger bulunamadi");
// } else {
//   console.log("Deger bulundu:", value);
// }

//? hepsini silme
// sessionStorage.clear();

//? storage e eklenen degerler string tipte tutuluyor
// let value = sessionStorage.getItem(552);
// console.log(typeof value);

//? session storage - Array Yazdırma
//! JSON.stringify sayesinde degerleri arraymiş gibi tutabildik

//! JSON.parse ta bunu arraya çevirdi çevrilmiş halinide value ye atadı;
//! kullanmasaydık aray gibi görünen string olurdu üzerinde dönemezdik
//! birde array olmayan bir şeyin üzerinde forEach ile dönemeyiz

// let names = ["Ali", "Enes", "Kübra", "Adem", "Ayşenur"];
// sessionStorage.setItem("names", JSON.stringify(names));

// let value = JSON.parse(sessionStorage.getItem("names"));
// value.forEach(function (name) {
//   console.log(name);
// });

//? LOCAL STORAGE KULLANIMI:(session storage ile aynı kullanımı var)
//! Local storage tarayıcı açılıp kapatıldığında degerleri silinmeyen bir depolama türüdür.

// localStorage.setItem("motion1", "Push up");
// localStorage.setItem("motion2", "Barfix");
// localStorage.setItem("motion3", "Burpee");
// localStorage.setItem("motion4", "Squat");

// let value = localStorage.getItem("motion1");
// console.log(value);

// localStorage.removeItem("motion4");

// localStorage.clear();

// let motions = ["Push Up", "Barfix", "Burpee", "Squat", "Chin Up"];
// localStorage.setItem("motions", JSON.stringify(motions));

// let value = JSON.parse(localStorage.getItem("motions"));
// value.forEach(function (mot) {
//   console.log(mot);
// });
