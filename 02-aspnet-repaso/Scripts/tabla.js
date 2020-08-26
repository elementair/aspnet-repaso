$.get("RepasoHTML/listarPersonas", function (data) {
    var contenido = "";

    contenido += "<table class='table'>";
    contenido += "<thead>"
    contenido += "<tr>";
    contenido += "<td>Id persona</td>";
    contenido += "<td>Nombre persona</td>";
    contenido += "<td>Apellido persona</td>";
    contenido += "</tr>";
    contenido += "</thead>";
    contenido += "<tbody>";

    var nfilas = data.length;

    for (var i = 0; i < nfilas; i++) {

        contenido += "<tr>";
        contenido += "<td>" + data[i].idPersona + "</td>";
        contenido += "<td>" + data[i].nombre + "</td>";
        contenido += "<td>" + data[i].apellidoPaterno + "</td>";
       
        contenido += "</tr>";

    }

    
    contenido += "</tbody>";
    contenido += "</table>";

    document.getElementById("divTabla").innerHTML = contenido;
});