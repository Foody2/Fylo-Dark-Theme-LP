const email = document.getElementById("email").value;
const error = document.getElementById("error");

function validateEmail() {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(email) == false) {
    error.style.display = "block";
    return false;
  } else {
    return true;
  }
}
