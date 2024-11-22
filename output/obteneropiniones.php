<?php
include 'conexion.php';

$sql = "SELECT * FROM opinion"; // Cambia esto por tu tabla de opiniones
$result = $conn->query($sql);

$opiniones = array();

if ($result->num_rows > 0) {
    // Recorrer todos los resultados y almacenarlos en un array
    while($row = $result->fetch_assoc()) {
        $opiniones[] = $row;
    }
} else {
    echo "0 resultados";
}

// Devolver los resultados en formato JSON
echo json_encode($opiniones);

$conn->close();
?>
