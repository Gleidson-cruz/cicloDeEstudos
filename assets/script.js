const form = document.getElementById("myform");

function validarMat(input1) {
    if (input1.trim()  === "") {
        return "Todos os campos são obrigatórios";
    }

    if (!input1.match(/^[a-zA-Z0-9]+$/)) {
        return "Por favor, insira os dados corretamente. <br> O campo 'Matéria' aceita letras e números. <br> O campo 'Peso' aceita apenas numeros";
    }

    return "";
}

function validarPeso(input2) {
    if (input2.trim()  === "") {
        return "Todos os campos são obrigatórios";
    }

    if (!input2.match(/^[0-9]+$/)) {
        return "Por favor, insira o dado corretamente";
    }

    return "";
}


form.addEventListener("submit", function(event) {
    event.preventDefault();
    let userPeso = document.getElementById("insertPeso").value
    let matUser = document.getElementById("insertInfo").value;


    const errMsgMat = validarMat(matUser);
    const errMsgPeso = validarPeso(userPeso);

    document.getElementById("passalerta").innerHTML = "";


    if (errMsgPeso) {
        document.getElementById("passalerta").style.color = "#ff0000"
        document.getElementById("passalerta").innerHTML = errMsgPeso;
    }

    if (errMsgMat) {
        document.getElementById("passalerta").style.color = "#ff0000"
        document.getElementById("passalerta").innerHTML = errMsgMat;
    }

    if (!errMsgPeso && !errMsgMat) {
        document.getElementById("passalerta").innerHTML = "Materia adcionada com sucesso";
        document.getElementById("passalerta").style.color = "#64b46f"
    }

});
