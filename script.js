let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
let botao = document.getElementById("botaoProjetoNaoConcluido");

botao.addEventListener("click",function(){
  alert("Projeto em andamento, em breve estara disponivel")
})

hamburger.addEventListener("click", function() {
  menu.classList.toggle("show");
});

var url = 'https://wa.me/5522992043536';
var qr = 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=' + encodeURIComponent(url);
document.getElementById('qrcode').src = qr;