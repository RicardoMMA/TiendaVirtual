<?php
$servername = "localhost";
$username = "root"; // El usuario de MySQL (puede variar)
$password = ""; // La contraseña de MySQL (puede variar, generalmente es vacía en XAMPP)
$dbname = "ropa"; // Cambia esto por el nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Establecer el conjunto de caracteres (esto es importante para caracteres especiales)
$conn->set_charset("utf8");

?>
