<?php
$servername = "localhost";
$db_username = "root";
$db_password = "";
$dbname = "register";


try {
  $conn = new PDO("mysql:host=$servername;dbname=register", $db_username, $db_password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

/*
$sql = "CREATE DATABASE registra";
if ($conn->query($sql) === TRUE) {
  echo "Database created successfully";
} else {
  echo "Error creating database: " . $conn->error;
}


$conn->close();
*/
?>