var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
   
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode; // Tr = paciente = remover
        paiDoAlvo.remove();
    }, 500);
});