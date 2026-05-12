<?php
include("conexion.php");

$codigo = $_POST['codigo'];
$producto = $_POST['nom_producto'];
$costo = $_POST['costo'];
$porcentaje = $_POST['porc_venta'];
$precio = $_POST['precio_venta'];
$fecha = $_POST['fecha'];

$imagen = $_FILES['imagen']['name'];
$ruta = "imagenes/".$imagen;

move_uploaded_file($_FILES['imagen']['tmp_name'],$ruta);

$sql = "INSERT INTO inventario 
(codigo,nom_producto,costo,porc_venta,precio_venta,imagen,fecha)
VALUES
('$codigo','$producto','$costo','$porcentaje','$precio','$ruta','$fecha')";

$resultado = mysqli_query($conexion,$sql);

if($resultado){
    echo "Producto guardado correctamente";
}else{
    echo "Error al guardar";
}
?>