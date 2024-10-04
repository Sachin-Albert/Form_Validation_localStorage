document.getElementById('registerBtn').addEventListener('click', function(event) {
  event.preventDefault();

  let uname = document.getElementById("uname").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let cpassword = document.getElementById("cpassword").value.trim();

  let isValid = true;

  if (uname === "") {
      document.getElementById("validname").textContent = "Please enter a valid username";
      document.getElementById("validname").style.color = "red";
      document.getElementById("uname").style.border = "1.5px solid red";
      isValid = false;
  } 
  else {
      document.getElementById("uname").style.border = "1.5px solid green";
      document.getElementById("validname").style.display = "none";
  }

  if (email === "") {
      document.getElementById("validemail").textContent = "Please enter a valid email";
      document.getElementById("validemail").style.color = "red";
      document.getElementById("email").style.border = "1.5px solid red";
      isValid = false;
  }
   else {
      document.getElementById("email").style.border = "1.5px solid green";
      document.getElementById("validemail").style.display = "none";
  }

  if (password === "") {
      document.getElementById("validpass").textContent = "Please enter a valid password";
      document.getElementById("validpass").style.color = "red";
      document.getElementById("password").style.border = "1.5px solid red";
      isValid = false;
  }
   else if (password.length < 8) {
      document.getElementById("validpass").textContent = "Password must be at least 8 characters long";
      document.getElementById("validpass").style.color = "red";
      document.getElementById("password").style.border = "1.5px solid red";
      isValid = false;
  }
  
  else {
      document.getElementById("password").style.border = "1.5px solid green";
      document.getElementById("validpass").style.display = "none";
  }

  if (cpassword === "") {
      document.getElementById("validcpass").textContent = "Please confirm your password";
      document.getElementById("validcpass").style.color = "red";
      document.getElementById("cpassword").style.border = "1.5px solid red";
      isValid = false;
  }
  
  else if (cpassword !== password) {
      document.getElementById("validcpass").textContent = "Passwords do not match";
      document.getElementById("validcpass").style.color = "red";
      document.getElementById("cpassword").style.border = "1.5px solid red";
      isValid = false;
  }
  
  else {
      document.getElementById("cpassword").style.border = "1.5px solid green";
      document.getElementById("validcpass").style.display = "none";
  }

  if (isValid) {
      localStorage.setItem("username", uname);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      window.location.href = "login.html";
  }
});
