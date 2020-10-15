function validateAll(){
    if (mySubmit()){
        document.form.submit();
    }
} 


function mySubmit() {

    var lastnameValue = document.getElementById("ln").value;
	var UsernameValue  = document.getElementById("username").value;
    var firstNameValue  = document.getElementById("fn").value;
	var miValue  = document.getElementById("mi").value;
    var PasswordValue  = document.getElementById("psw").value;
    var StudentNumberValue = document.getElementById("stnm").value;
    var BirthdayValue = document.getElementById("birth").value;
    var cpNumberValue = document.getElementById("mbnm").value;
    var EmailValue = document.getElementById("email").value;
    var ConfirmPassValue = document.getElementById("rpsw").value;

    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var nonwords = /[\d\W]/;
    var user = /[/-/_/s]+/;
    var email = /[/@/.]/;
    var mobile = /[+]63/g;
    var emailReg = /[@]ue.edu.ph/gi;
    var usernameReg = /([A-Za-z ])gi/;
    var alphaNum = /[^a-zA-Z0-9]/;
    
  

	//Last Name
      if (lastnameValue == "") {
        setErrorFor(ln, 'Please input your Last name');
        return false;
      } else {
        if (letters.test(lastnameValue)){
          setSuccessFor(ln);
        
        }else  {
          setErrorFor(ln, ' Last Name must not contain number or symbol ');
           return false; 
         }      
      }

  
	  //FIRST NAME 
      if (firstNameValue == "") {
        setErrorFor(fn, 'Please input your First Name');
        return false;
      } else {
        if (letters.test(firstNameValue)){
          setSuccessFor(fn);
        
        }else  {
          setErrorFor(fn, ' First Name must not contain number or symbol ');
          return false; 
         }      
      }

        // MIDDLE INITIAL
		if (miValue == ''){
		setSuccessFor(mi);
        }else{
			if(letters.test(miValue) == true){
          setSuccessFor(mi);
			}else {
        setErrorFor(mi, ' Middle Initial must not contain numbers or symbols  ');
         return false; 
      }
		}
	  
	  //Student Number
	  if (StudentNumberValue.length != 11){
      setErrorFor(stnm, 'Invalid student number');
      return false;
		}
		else{
		if (numbers.test(StudentNumberValue)){
      setSuccessFor(stnm);
		} else {
      setErrorFor(stnm, 'Numeric Characters Only');
      return false;
			}
		}

		
	//USERNAME 
    if (UsernameValue == "") {
        setErrorFor(username, 'Please input your username');
        return false;
      }  else {
			if(UsernameValue.length < 7){
				setErrorFor(username, 'Characters must be atleast 8 - 15');
			}else{ 
				setSuccessFor(username);
                }
              }
	  
	     
	   // psw
	     if (PasswordValue == ""){
		    setErrorFor(psw, 'Please input your Password');
			return false;
	   }else  {
                    setSuccessFor(psw);              
	   }
	   
	   //rpsw
	   if (ConfirmPassValue == ""){
		    setErrorFor(rpsw, 'Please input your Password');
			return false;
	   }else{
            setSuccessFor(rpsw);     
       }
     
    
  if (cpNumberValue.test(mbnm)){
    if (mbnm.length != 13){
        setErrorFor(mbnm, 'Please enter full mobile number');
        return false;
    }
	else{
    setSuccessFor(mbnm);
	} 
	
	}else {
    setErrorFor(mbnm, 'Mobile number must start with +63');
    return false;
} 
return true;
}


function setErrorFor(input, message) {
	var formControl = input.parentElement;
	var small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setSuccessFor(input) {
	var formControl = input.parentElement;
	formControl.className = 'form-control success';
}