const botao = document.querySelector("#orcamento-btn");

botao.addEventListener("click", () => {
    alert("Em breve nosso formulário de orçamento!");
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
