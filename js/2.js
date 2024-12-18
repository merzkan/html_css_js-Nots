/* 
//metinin içinde seçtigimiz harften kaç oldugunu sayma
let metin = "Şuanda Yalova'da Javascript eğitimi çekmekteyim.";
var harf = prompt("harf giriniz:");
sonuc= bul(harf);
alert(harf + "harfi cümlede" + sonuc + "tane içeriyor.");


function bul(harf){
    let toplam =0;
    for(let i=0; i<metin.length ;i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1;
        }
    }
    return toplam;
}
**************************************************************************************************************
// 2lik sayidan 10luk sayiya çevirme
//1010

function binaryToDecimal(binaryString) {
    let length = binaryString.length;
    let toplam = 0;
    for (let i = 0; i < length; i++) {
        toplam += binaryString[i] * Math.pow(2, length - 1 - i);
    }
    return toplam;
}

// Kullanıcıdan geçerli bir ikili sayı alın
let userInput;
do {
    userInput = prompt("Lütfen geçerli bir ikili (binary) sayı girin (örneğin: 1010):");
} while (!/^[01]+$/.test(userInput));  // Sadece 0 ve 1 içeren girişleri kabul eder

// Ondalık değeri hesapla ve göster
let decimalValue = binaryToDecimal(userInput);
alert(`İkili sayı: ${userInput}\nOndalık değer: ${decimalValue}`);
**************************************************************************************************************
FOREACH DÖNGÜSÜ
let isimler = ["omer","ozkan","mehmet","enes","leyla","şeyma"];

isimler.forEach(function(a){
    console.log(a);
});
------------------------------------------------------------------------
For döngüsü ile
let isimler = ["omer","ozkan","mehmet","enes","leyla","şeyma"];
for(let i = 0;i<isimler.length;i++){
    console.log(isimler[i]);
}
------------------------------------------------------------------------
for in

const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x] + "<br>"; 
}
------------------------------------------------------------------------
for of

let language = "JavaScript";
let text = "";
for (let x of language) {
  text += x + "<br>";
}
*********************************
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x + "<br>";
}
------------------------------------------------------------------------

*/



