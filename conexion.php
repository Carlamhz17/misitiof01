<?php
$conexion = mysqli_connect("localhost","root","","inventario_fares");

if(!$conexion){
    die("Error de conexión: ".mysqli_connect_error());
}
?>