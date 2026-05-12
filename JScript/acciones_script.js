window.addEventListener("load", iniciarf),
function iniciarf() {
    vcosto = document.getElementById("costop");
    vporcentaje = document.getElementById("porcentajev");
    vimage = document.getElementById("simagen");
    vcosto.addEventListener("input", mostrarpventa);
    vporcentaje.addEventListener("input", mostrarpventa);
    vimage.addEventListener("input", mostrarImagen);
}
function CalcularPorcentaje(costof, porcentajef) {
    let TantoTotal = costof * (porcentajef / 100);
    let PVenta = parseFloat(costof) + parseFloat(TantoTotal);
    returnPVenta;
}
function mostrarpventa() {
    if (vcosto.value != "" && vporcentaje.value != ""){
        let calculo = CalcularPorcentaje(vcosto.value, vporcentaje.value);
        document.getElementById("precio_venta").value = calculo;

    }else {
        document.getElementById("precio_venta").value = "";
    }
}

function mostrarImagen() {
    var verimagen = document.querySelector('img');
    var archivof = document.querySelector('input[type=file]').files[0];
    var leerarchivo = new FileReader();
    leerarchivo.onloadend = function () {
        verimagen.src = leerarchivo.result;
    }

    if (archivof) {
        leerarchivo.readAsDataURL(archivof);
    } else { 
        verimagen.src = "";
    }
}