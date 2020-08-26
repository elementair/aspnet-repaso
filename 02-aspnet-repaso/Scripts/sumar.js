var btnSumar = document.getElementById("btnSumar");
var btnLimpiar = document.getElementById("btnLimpiar");

btnSumar.onclick = function () {
    var num1 = document.getElementById("txtnumero1").value*1;
    var num2 = document.getElementById("txtnumero2").value*1;
    var suma = num1 + num2;

    document.getElementById("lblrespuesta").innerHTML = "La suma es " + suma;
}

btnLimpiar.onclick = function () {

    document.getElementById("lblrespuesta").innerHTML = "";
    document.getElementById("txtnumero1").value = "";
    document.getElementById("txtnumero2").value = "";
}
