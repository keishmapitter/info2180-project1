/* Add your JavaScript to this file */
windows.onload = funtion() 
{
  let button = document.getElementsByClassName("button")[0];
  button.addEventListener("click", function(e){
     e.preventDefault();
  var enter_email = document.getElementById("email");
  var enter_message = document.getElementsByClassName("message")[0];

  if (enter_email.value != ""){
      enter_message.textContent = "Your email address has been added, Thank you for your time"
  }    
  else
  {
      enter_message.textContent = "Your email is invalid, Please enter a valid email address."
  }

     } 
 )}