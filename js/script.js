const modal = document.getElementById("modal");

const abrir = document.getElementById("abrirModal");

const fechar = document.querySelector(".fechar");

function abrirModal(){

    modal.style.display = "flex";

    modal.setAttribute("aria-hidden", "false");

}

function fecharModal(){

    modal.style.display = "none";

    modal.setAttribute("aria-hidden", "true");

}

abrir.onclick = abrirModal;

fechar.onclick = fecharModal;

window.onclick = (e)=>{

    if(e.target==modal){

        fecharModal();

    }

}

document.addEventListener("keydown", (e)=>{

    if(e.key === "Escape" && modal.style.display === "flex"){

        fecharModal();

    }

});

document.getElementById("formOrcamento").addEventListener("submit", function(e){

e.preventDefault();

const nome=document.getElementById("nome").value;

const empresa=document.getElementById("empresa").value;

const email=document.getElementById("email").value;

const telefone=document.getElementById("telefone").value;

const servico=document.getElementById("servico").value;

const mensagem=document.getElementById("mensagem").value;

const texto=

`Olá!

Meu nome é ${nome}

Empresa: ${empresa}

Email: ${email}

Telefone: ${telefone}

Serviço: ${servico}

Descrição:

${mensagem}`;

const numero="5511988427172";

window.open(

`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`,

"_blank"

);

this.reset();

fecharModal();

});

const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

menuToggle.addEventListener("click", () => {
    const aberto = menu.classList.toggle("active");
    menuToggle.classList.toggle("active", aberto);
    menuToggle.setAttribute("aria-expanded", aberto);
});

menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
