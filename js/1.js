/* 
Writing into the HTML output using document.write().
Writing into the browser console, using console.log().
Writing into an alert box, using window.alert().
Writing into an HTML element, using innerHTML.

window en dış objedir. (erişirken window demesekte olur)
document windowsun altında bir objedir. (document.   bunda demeliyiz)
alert()
prompt()
****************************************************************************
var: function scope -- ram bellekte çok fazla yer kapar her yerden erişebilyior a=5 a=10 yazdırır
let const: block scope a= 5 a= bir daha tanımlayamazsın

*/
document.write("omer");//ekrana yazar The document.write() method should only be used for testing.
console.log("ozkan"); //consola yazar
//alert("merhaba");  //window.alert("merhaba")(böylede çagırırız)

console.log(window);//metodlar bulunur consolda gösterdik şuan
// window.print() sayfayi yazdırmak için 

function display(){
    document.getElementById("demo").innerHTML=Date();
}
function displayoff(){
    document.getElementById("demo").innerHTML="The time is?";
}

let isim = prompt("isminizi giriniz:");//kullanıcıdan değer alıyor
console.log(isim);// konsola yazdırıyor.
var degisken= 10;
console.log(degisken);
confirm("tiklamak istediginize emin misniz");
