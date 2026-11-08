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
    let reserva = {
        aula: document.getElementById("aula").value,
        fecha: document.getElementById("fecha").value,
        hora: document.getElementById("hora").value,
        responsable: document.getElementById("responsable").value
    };
    let mensaje = document.getElementById("mensaje-reserva");

    if (reserva.aula == "") {
        mensaje.innerHTML = "Selecciona un aula";
    } else if (reserva.fecha == "") {
        mensaje.innerHTML = "Indica una fecha";
    } else if (reserva.hora == "") {
        mensaje.innerHTML = "Indica una hora";
    } else if (reserva.responsable == "") {
        mensaje.innerHTML = "Escribe el responsable";
    } else {
        enviarReserva(reserva);
    }
}

function enviarReserva(reserva){
    let mensaje = document.getElementById("mensaje-reserva");

    fetch("http://localhost:8000/reservas.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reserva)
    })
    .then((response) => {
        if (response.ok) {
            document.getElementById("aula").value = "";
            document.getElementById("fecha").value = "";
            document.getElementById("hora").value = "";
            document.getElementById("responsable").value = "";
        }
        return response.json();
    })
    .then((data) => {
        mensaje.innerHTML = data.mensaje || data.error;
    });
}

(function (){
    getDatos("http://localhost:8000/index.php", muestraAulas);
})()