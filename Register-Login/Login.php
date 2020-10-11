<?php
	
	$username = $_POST['username'];
	$password = $_POST['psw1'];
	
	try {
 require 'database.php';
     
  $sql = "SELECT username, password FROM register";
     
     
  // use exec() because no results are returned 
    $result = $conn->query($sql);
	$results = $result->fetch();
	 
	 if ($results['username'] == $username and $results['password'] == $password){
		 echo "Login Success";
		header('Location:Bionote/Bio.html');
	 }

  echo '<script>
  				alert("Congratulations, you are now registered!");
					</script>';
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

?>
