/*
    NÚMERO FICTÍCIO.
    Substituir pelo número do cliente num projeto real.
*/

const numeroWhatsApp = "351912345678";


/* HEADER */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* MENU MOBILE */

const botaoMenu =
    document.getElementById("menu-mobile");

const nav =
    document.getElementById("nav");


botaoMenu.addEventListener("click", () => {

    nav.classList.toggle("aberto");

});


nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("aberto");

    });

});


/* DATA MÍNIMA */

const campoData =
    document.getElementById("data");

const hoje = new Date();

const ano =
    hoje.getFullYear();

const mes =
    String(hoje.getMonth() + 1)
        .padStart(2, "0");

const dia =
    String(hoje.getDate())
        .padStart(2, "0");

campoData.min =
    `${ano}-${mes}-${dia}`;


/* FORMULÁRIO */

const form =
    document.getElementById("form-experimental");


form.addEventListener("submit", event => {

    event.preventDefault();


    const nome =
        document.getElementById("nome")
            .value.trim();

    const telefone =
        document.getElementById("telefone")
            .value.trim();

    const objetivo =
        document.getElementById("objetivo")
            .value;

    const data =
        document.getElementById("data")
            .value;

    const observacoes =
        document.getElementById("mensagem")
            .value.trim();


    if (
        !nome ||
        !telefone ||
        !objetivo ||
        !data
    ) {

        alert(
            "Preenche todos os campos obrigatórios."
        );

        return;

    }


    const dataFormatada =
        formatarData(data);


    let mensagem =
`Olá! Gostaria de marcar uma aula experimental na IRONLAB Fitness.

Nome: ${nome}
Telefone: ${telefone}
Objetivo: ${objetivo}
Dia preferido: ${dataFormatada}`;


    if (observacoes) {

        mensagem +=
            `\nObservações: ${observacoes}`;

    }


    mensagem +=
`\n\nPodem indicar-me a disponibilidade?`;


    abrirWhatsApp(mensagem);

});


function formatarData(data) {

    const partes =
        data.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;

}


function abrirWhatsApp(mensagem) {

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(
        url,
        "_blank"
    );

}


/* WHATSAPP FLUTUANTE */

const whatsapp =
    document.getElementById("whatsapp");


whatsapp.addEventListener("click", event => {

    event.preventDefault();

    abrirWhatsApp(
        "Olá! Gostaria de obter mais informações sobre a IRONLAB Fitness."
    );

});


/* ANO */

document.getElementById("ano")
    .textContent =
    new Date().getFullYear();