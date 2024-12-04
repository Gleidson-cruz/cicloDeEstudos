let nomeMateria = null;
let pesoMateria = null;
let cargaHorariaDia = null;
let cargaHorariaSemana = null;
let cargaHorariaTotal = null;
let somaDificuldade = [];
let materiasCriadas = [];

const criarCiclo = document.getElementById("criar");

// inicio Validação do formulário

const form = document.getElementById("myform");

function validarCarga(cargaDia) {
  if (cargaDia.trim() === "") {
    return (document.getElementById("alertCargaDia").innerHTML =
      "Esse campo é obrigatório");
  }
  if (!cargaDia.match(/^[0-9]+$/)) {
    return (document.getElementById("alertCargaDia").innerHTML =
      "Apenas caracteres numéricos são aceitos");
  }
  if (parseInt(cargaDia) > 24) {
    return (document.getElementById("alertCargaDia").innerHTML =
      "A carga horária do dia não pode ser maior que 24");
  }
}

function validarCargaSemana(cargaSemana) {
  if (cargaSemana.trim() === "") {
    return (document.getElementById("alertCargaSemana").innerHTML =
      "Esse campo é obrigatório");
  }
  if (!cargaSemana.match(/^[0-9]+$/)) {
    return (document.getElementById("alertCargaSemana").innerHTML =
      "Apenas caracteres numéricos são aceitos");
  }
  if (parseInt(cargaSemana) > 7) {
    return (document.getElementById("alertCargaSemana").innerHTML =
      "A carga horária da semana não pode ser maior que 7");
  }
}

function validarMat(materia) {
  if (materia.trim() === "") {
    return (document.getElementById("alertMat").innerHTML =
      "Esse campo é obrigatório");
  } else if (!materia.match(/^[a-zA-Z0-9\s]+$/)) {
    return (document.getElementById("alertMat").innerHTML =
      "Apenas letras(a-z,A-Z) e numeros(0-9) são aceitos");
  }
}

function validarPeso(peso) {
  if (peso.trim() === "") {
    return (document.getElementById("alertPeso").innerHTML =
      "Esse campo é obrigatório");
  }
  if (!peso.match(/^[0-9]+$/)) {
    return (document.getElementById("alertPeso").innerHTML =
      "Apenas caracteres numéricos são aceitos");
  }
  if (parseInt(peso) > 5) {
    return (document.getElementById("alertCargaSemana").innerHTML =
      "O grau de dificuldade não pode ser maior que 5");
  }
}

function limparMsg() {
    document.getElementById("passalerta").innerHTML = "";
    document.getElementById("alertPeso").innerHTML = "";
    document.getElementById("alertMat").innerHTML = "";
    document.getElementById("alertCargaDia").innerHTML = "";
    document.getElementById("alertCargaSemana").innerHTML = "";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

limparMsg()

  let userPeso = document.getElementById("insertPeso").value;
  let matUser = document.getElementById("insertMat").value;
  let matCargaDia = document.getElementById("insertCargaDia").value;
  let matCargaSemana = document.getElementById("insertCargaSemana").value;

  const errMsgMat = validarMat(matUser);
  const errMsgPeso = validarPeso(userPeso);
  const errMsgCargaDia = validarCarga(matCargaDia);
  const errMsgCargaSemana = validarCargaSemana(matCargaSemana);

  if (errMsgPeso) {
    document.getElementById("alertPeso").style.color = "#ff0000";
    document.getElementById("alertPeso").innerHTML = errMsgPeso;
  }
  if (errMsgMat) {
    document.getElementById("alertMat").style.color = "#ff0000";
    document.getElementById("alertMat").innerHTML = errMsgMat;
  }
  if (errMsgCargaDia) {
    document.getElementById("alertCargaDia").style.color = "#ff0000";
    document.getElementById("alertCargaDia").innerHTML = errMsgCargaDia;
  }
  if (errMsgCargaSemana) {
    document.getElementById("alertCargaSemana").style.color = "#ff0000";
    document.getElementById("alertCargaSemana").innerHTML = errMsgCargaSemana;
  }
  if (!errMsgPeso && !errMsgMat && !errMsgCargaDia && !errMsgCargaSemana) {
    cargaHorariaDia = parseInt(matCargaDia);
    cargaHorariaSemana = parseInt(matCargaSemana);
    nomeMateria = matUser;
    pesoMateria = parseInt(userPeso);
    cargaHorariaTotal = cargaHorariaDia * cargaHorariaSemana;

    document.getElementById("passalerta").innerHTML =
      "Matéria adicionada com sucesso";
    document.getElementById("passalerta").style.color = "#64b46f";

    somaDificuldade.push(parseInt(userPeso))
    organizarCiclo()
    exibirMaterias()
    somaPeso()
    console.log(somaDificuldade) //depuração
    form.reset();
  }
});

// Fim Validação do formulário

function somaPeso() {
    let soma = 0;
    for (let i=0; i < somaDificuldade.length; i++) {
        soma += somaDificuldade[i];
    }
    
    console.log(somaDificuldade) //depuração
    console.log(soma); //depuração
}

function organizarCiclo() {
    class Materias {
        constructor(nome, peso, carga){
            this.nome = nome;
            this.peso = peso;
            this.carga = carga;
        }

        exibirInfo(){
            return `nome: ${this.nome}, peso: ${this.peso}, carga: ${this.carga}`
        }
    }

    const novaMateria = new Materias(nomeMateria, pesoMateria, cargaHorariaTotal)
    materiasCriadas.push(novaMateria)

    console.log(materiasCriadas) //depuração
}

function exibirMaterias() {
    const materiasDiv = document.getElementById("ciclo")
    materiasDiv.innerHTML = "";
    materiasCriadas.forEach(materia => {
        const div = document.createElement("div");
        div.textContent = materia.nome;
        materiasDiv.appendChild(div)
    });
}