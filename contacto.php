<?php
$nombre=$_POST['nombre'];
$telefono=$_POST['telefono'];
$email=$_POST['email'];
$tipodecarga=$_POST['tipodecarga'];
$vehiculo=$_POST['vehiculo'];
$mensaje=$_POST['mensaje'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilophp.css">
    <title>Document</title>
</head>
<body>
    <header>
    <h1><i><b>El formulario fue enviado con exito!</b></i></h1>
    </header>

    <main>
        <p><?php
echo("Nombre y apellido:".$nombre."<br>");
echo("Telefono:".$telefono."<br>");
echo("Email:".$email."<br>");
echo("Tipo de carga:".$tipodecarga."<br>");
echo("Vehiculo elegido:".$vehiculo."<br>");
echo("Mensaje enviado:".$mensaje."<br>" );
?>
</p>
    </main>
</body>
</html>