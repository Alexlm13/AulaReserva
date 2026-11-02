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
    document.getElementById("aulas-disponibles").innerHTML=data.map(item=>`<div>${item.id} - ${item.nombre} - ${item.capacidad}</div>`)
        .join("");
}

(function (){
    getDatos("/backend/public/index.php", muestraAulas);
})()