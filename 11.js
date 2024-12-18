document.getElementById("changeColorBtn").onclick = function() {
    document.body.style.backgroundColor = "#f39c12"; // Arka plan rengini turuncuya değiştirir
}

const hoverText = document.getElementById("hoverText");

hoverText.onmouseover = function() {
    hoverText.style.color = "red"; // Metin rengini kırmızıya değiştirir
};

hoverText.onmouseout = function() {
    hoverText.style.color = "black"; // Metin rengini siyaha döndürür
};