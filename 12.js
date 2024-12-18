document.getElementById("contactForm").onsubmit = function(event){
    const emailInput = document.getElementById("email").value;

    // E-posta formatını kontrol eden basit bir regex ifadesi
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(emailInput)){
        alert("Lütfen geçerli bir e-posta adresi girin.");
        event.preventDefault();
    }
}