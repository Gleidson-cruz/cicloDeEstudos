let nomeMateria = null;
let pesoMateria = null;
const cargaHoraria = null;




const form = document.getElementById("myform");

function validarCarga(carga) {
  if (carga.trim() === "") {
    return (document.getElementById("alertCarga").innerHTML =
      "Esse campo é obrigatório");
  }
  if (!carga.match(/^[0-9]+$/)) {
    return (document.getElementById("alertCarga").innerHTML =
      "Apenas caracteres numéricos são aceitos");
  }
  if (parseInt(carga) > 24) {
    return (document.getElementById("alertPeso").innerHTML =
      "A carga horária não pode ser maior que 24");
  }
}

function validarMat(materia) {
  if (materia.trim() === "") {
    return (document.getElementById("alertMat").innerHTML =
      "Esse campo é obrigatório");
  } else if (!materia.match(/^[a-zA-Z0-9]+$/)) {
    return (document.getElementById("alertPeso").innerHTML =
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
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let userPeso = document.getElementById("insertPeso").value;
  let matUser = document.getElementById("insertInfo").value;
  let matCarga = document.getElementById("insertCarga").value;

  const errMsgMat = validarMat(matUser);
  const errMsgPeso = validarPeso(userPeso);
  const errMsgCarga = validarCarga(matCarga);

  document.getElementById("passalerta").innerHTML = "";
  document.getElementById("alertPeso").innerHTML = "";
  document.getElementById("alertMat").innerHTML = "";
  document.getElementById("alertCarga").innerHTML = "";

  if (errMsgPeso) {
    document.getElementById("alertPeso").style.color = "#ff0000";
    document.getElementById("alertPeso").innerHTML = errMsgPeso;
  }
  if (errMsgMat) {
    document.getElementById("alertMat").style.color = "#ff0000";
    document.getElementById("alertMat").innerHTML = errMsgMat;
  }
  if (errMsgCarga) {
    document.getElementById("alertCarga").style.color = "#ff0000";
    document.getElementById("alertCarga").innerHTML = errMsgCarga;
  }
  if (!errMsgCarga) {
    if (!errMsgPeso && !errMsgMat) {
      document.getElementById("passalerta").innerHTML =
        "Materia adcionada com sucesso";
      document.getElementById("passalerta").style.color = "#64b46f";
    }
  }
});