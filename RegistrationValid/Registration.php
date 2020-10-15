<?php

$fn = $_POST['fn'];
$ln = $_POST['ln'];
$mi = $_POST['mi'];
$em = $_POST['email'];
$sn = $_POST['stnm'];
$mn = $_POST['mbnm'];
$yl = $_POST['yl'];
$psw = $_POST['psw'];
$rpsw = $_POST['rpsw'];
$birth = $_POST['birth'];
$user = $_POST['username'];


if ($psw == $rpsw ) {
		insertRecord($fn,$ln,$em,$sn,$mn,$yl,$psw,$rpsw,$birth,$user,$mi);
       
	}
	else {
		echo '<script>
  				alert("Password Mismatch!");
					</script>';

		echo '<script>
				window.history.go(-1);
					</script>';
		}


function insertRecord($fn,$ln,$em,$sn,$mn,$yl,$psw,$rpsw,$birth,$user,$mi) {
 try {
 require 'database.php';
     
  $sql = "INSERT INTO register (firstName, lastName, email, studentNumber, mobileNumber, yearLevel, 
								password, confirmPassword, birthdate, username, mi) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
     
     
  // use exec() because no results are returned 
     $conn->prepare($sql)->execute([$fn,$ln,$em,$sn,$mn,$yl,$psw,$rpsw,$birth,$user,$mi]);


  echo '<script>
  				alert("Congratulations, you are now registered!");
					</script>';
					
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
}

?>