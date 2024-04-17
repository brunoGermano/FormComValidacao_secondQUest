
const dadosPraEnviar = document.querySelectorAll(".data");

// Verificando nos casos de prenchimento dos campos sem que haja envio.
dadosPraEnviar.forEach(function (dado) {

    dado.addEventListener("change", function () {

        if (dado.classList.contains("redClass")) {
            if (dado.value !== "") {
                dado.classList.remove("redClass");
                dado.classList.add("greenClass");

                removeClasseMensagemErroNosCampos("mostrar");
            }
        }
        else {
            if (dado.value === "") {
                dado.classList.remove("greenClass");
            } else {
                dado.classList.add("greenClass");
            }
        }
    });
});



// Verificando os campos depois do envio
botaoEnviarClicado = document.querySelector(".btnSend");
botaoEnviarClicado.addEventListener("click", function () {

    let cont = 0;
    dadosPraEnviar.forEach(function (dado) {
        console.log("tamanho do foreach: " + dadosPraEnviar.length);

        if (dado.value === "") {

            dado.classList.add("redClass");

            adicionaClasseMensagemErroNosCampos("mostrar");

        } else {
            dado.classList.remove("redClass");

            removeClasseMensagemErroNosCampos("mostrar");
            cont++;
        }
    });

    if (cont === dadosPraEnviar.length) {
        alert("Form enviado com sucesso!");
        removeGreenClasseNosCamposDepoisdeEnviadoForm("greenClass");
        resetaCampos();
    }
    else {
        alert("Por favor, preencha todos os dados antes de enviar!");
    }
})



function adicionaClasseMensagemErroNosCampos(classe) {

    const mensagensErros = document.querySelectorAll(".all-field");

    for (let i = 0; i < mensagensErros.length; i++) {

        if (mensagensErros[i].querySelector(".data").value === "") {
            mensagensErros[i].classList.add(classe);
        }

    }

}

function removeClasseMensagemErroNosCampos(classe) {

    const mensagensErros = document.querySelectorAll(".all-field");

    for (let i = 0; i < mensagensErros.length; i++) {

        if (mensagensErros[i].querySelector(".data").value !== "") {
            mensagensErros[i].classList.remove(classe);
        }
    }
}


function resetaCampos() {
    dadosPraEnviar.forEach(function (dado) {
        dado.value = "";
    });
}

function removeGreenClasseNosCamposDepoisdeEnviadoForm(classe) {

    const mensagensErros = document.querySelectorAll(".all-field");

    for (let i = 0; i < mensagensErros.length; i++) {

        if (mensagensErros[i].querySelector(".data").value !== "") {
            mensagensErros[i].querySelector(".data").classList.remove(classe);
        }
    }
}
