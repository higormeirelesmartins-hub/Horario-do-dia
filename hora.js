function carregar() {
var data =new Date();
var hora = data.getHours();
var minutos = data.getMinutes();
var r = document.getElementById("msg");
var img = document.getElementById("imagem");
 nome=window.prompt("Qual é o seu nome?");
if (hora >= 0 && hora < 12) {
        bom = "Bom dia!";
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHPK6vvtkwJvIsEUIruS1rss36sYdwGQU3g&s";
    document.body.style.background = "#f9bd3c";


} else if (hora >= 12 && hora < 18) {
        bom = "Boa tarde!";
    img.src = "https://i.pinimg.com/736x/2b/06/95/2b06950a176a8852eb26f3b4b14ecfe9.jpg";
    document.body.style.background = "#cc9723";
} else {
    bom = "Boa noite!";
    img.src = "https://i.pinimg.com/736x/2a/52/a3/2a52a39806e84a502db951cf9e0488d5.jpg";
    document.body.style.background = "#123a56";
    }
    r.innerHTML = `Olá, ${nome}! Agora são ${hora}:${minutos},${bom}!`;
   r.appendChild(img);
   r.style.textAlign = "center";
} 