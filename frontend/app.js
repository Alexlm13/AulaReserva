function getDatos(url, analizaResultado){
    fetch(url)
       .then((response) => response.json())
       .then((data) => {
            console.log("mostrando datos");
            console.log(data);
            analizaResultado(data);
       })
}

function muestraAulas(data){
    document.getElementById("aulas-disponibles").innerHTML=data
        .map(item=>`<div>${item.id} - ${item.nombre} - ${item.capacidad}</div>`)
        .join("");

    document.getElementById("aula").innerHTML='<option value="">-- Selecciona un aula --</option>'+data
        .map(item=>`<option value="${item.id}">${item.nombre}</option>`)
        .join("");
}

function reservar(){
    let aula = document.getElementById("aula").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let responsable = document.getElementById("responsable").value;
    let mensaje = document.getElementById("mensaje-reserva");

    if (aula == "") {
        mensaje.innerHTML = "Selecciona un aula";
    } else if (fecha == "") {
        mensaje.innerHTML = "Indica una fecha";
    } else if (hora == "") {
        mensaje.innerHTML = "Indica una hora";
    } else if (responsable == "") {
        mensaje.innerHTML = "Escribe el responsable";
    } else {
        mensaje.innerHTML = "Solicitud de reserva correcta";
    }
}

(function (){
    getDatos("/backend/public/index.php", muestraAulas);
})()