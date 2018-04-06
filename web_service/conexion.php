<?php
	
	$host = "localhost";
	$usuario = "root";
	$contrasena = "";
	$bd = "tuesa_com";

	$conn = new mysqli($host, $usuario, $contrasena, $bd) or die ("Error" . mysqli_errno($conn));
?>