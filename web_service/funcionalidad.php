<?php
    $action = $_POST['action'];

    if ($action == "guardarComentario") 
        guardarComentario();

    function connect() {
        $host = "localhost";
        $usuario = "root";
        $contrasena = "";
        $bd = "tuesa_com";

        $mysqli = new mysqli($host, $usuario, $contrasena, $bd);
        if ($mysqli->connect_errno) {
            echo "Problema con la conexion a la base de datos";
        }
        return $mysqli;
    }

    function disconnect() {
        mysqli_close();
    }

    function guardarComentario() {
        $correo = $_POST["correo"];
        $nombre = $_POST["nombre"];
        $comentario = $_POST["comentario"];
        $mysqli = connect();

        $result = $mysqli->query("call sp_guardarComentario('".$correo."','".$nombre."','".$comentario."');");    
        
        if (!$result) {
            echo "Problema al guardar en la BD: " . $mysqli->error;                             
        } else {
            echo "Todo salio bien";       
        }
        //$result->free();
        mysqli_close($mysqli);
    }

   /* function obtenerComentarios() {
        $mysqli = connect();

        $result = $mysqli->query("call sp_obtenerComentarios;");   
        
        if (!$result) {
            echo "Problema al hacer un query: " . $mysqli->error;                               
        } else {
            $rows = array();
            while( $r = $result->fetch_assoc()) {
                $rows[] = $r;
            }           
            echo json_encode($rows);
        }
        //$result->free();
        mysqli_close($mysqli);
    }*/
?>