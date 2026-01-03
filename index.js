// Name Check
const fname = document.getElementById("fname");
const sname = document.getElementById("sname");

fname.addEventListener("input", function() {
    checkInputLength(fname, "fname_error");
  });

sname.addEventListener("input", function()  {
  checkInputLength(sname, "sname_error");
});

function checkInputLength(name, pid) {
  perror = document.getElementById(pid);
  if (name.value.length == 0) {
    perror.textContent = "";
  } else if (!/^[a-zA-Z]+$/.test(name.value)) {
        perror.textContent = "Only letters are allowed"; // Adjust error message if needed
      } else if (name.value.length < 3) {
    perror.textContent = "Too short";
  } else if (name.value.length > 20) {
    perror.textContent = "Way too long";
  }
 
 
    else {
    perror.textContent = "";
  }
}


//Email Check
const email = document.getElementById("email");
const emailError = document.getElementById("email_error");

email.addEventListener("input", () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(email.value)) {
    emailError.textContent = "";
  } else {
    emailError.textContent = "Invalid email format";
  }
});

//PhoneNO Check

const pno = document.getElementById("pno");
const pnoError = document.getElementById("pno_error");

pno.addEventListener("input", () => {
  const pnoRegex = /^(\+?251|0)([1-9]\d{8})$/;
  if (pnoRegex.test(pno.value)) {
    pnoError.textContent = "";
  } else {
    pnoError.textContent = "Invalid Format";
  }
});
const bdInput = document.getElementById("bd");

bdInput.addEventListener("change", (event) => {
  const selectedDate = new Date(event.target.value); // Get the selected date
  const minDate = new Date(1900, 0, 1); // Minimum date (1900-01-01)
  const maxDate = new Date(2005, 11, 31); // Maximum date (2005-12-31)

  if (selectedDate < minDate || selectedDate > maxDate) {
    event.target.value = ""; // Clear the input if invalid
    pnoError.textContent = "Invalid datet";
    }
});

//Academic Rank Error

const ar = document.getElementById("ar");
const arError = document.getElementById("ar_error");

ar.addEventListener("input", () => {
  const arValue = Number(ar.value);
  if (arValue <= 0) {
    arError.textContent = "Invalid Rank";
  } else {
    arError.textContent = "";
  }
});

const pw = document.getElementById("pw");
const cpw = document.getElementById("cpw");
const pwError = document.getElementById("pw_error");
//password
cpw.addEventListener("input", () => {
  if (pw.value !== cpw.value) {
    pwError.textContent = "Doesn`t Match";
  } else {
    pwError.textContent = "";
  }
});
