// const newBgColor = document.querySelector(".bg");

// function changeBgColor() {
//   newBgColor.style.backgroundColor = "#ddd";
// }

// newBgColor.addEventListener("mouseover", changeBgColor);

///////////         FIRST NAME            ////////////

function firstName() {
  var fname = document.getElementById("fname").value;

  if (/^[A-Za-z]+$/.test(fname) && fname.length >= 3 && fname.length <= 20) {
    document.getElementById("firstName_err").innerHTML = "Valid input";
  } else {
    document.getElementById("firstName_err").innerHTML = "Invalid input";
  }
}

///////////         LAST NAME            ////////////

function lastName() {
  var lname = document.getElementById("lname").value;

  if (/^[A-Za-z]+$/.test(lname) && lname.length >= 3 && lname.length <= 20) {
    document.getElementById("lastName_err").innerHTML = "Valid input";
  } else {
    document.getElementById("lastName_err").innerHTML = "Invalid input";
  }
}

///////////         EMAIL            ////////////

function validateEmail() {
  var email = document.getElementById("email").value;

  if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
    document.getElementById("email_err").innerHTML = "Valid input";
  } else {
    document.getElementById("email_err").innerHTML = "Invalid input";
  }
}

///////////         PHONE NUMBER            ////////////

function validatePhoneNumber() {
  var phoneNumber = document.getElementById("phone").value;

  if (phoneNumber.startsWith("09") && phoneNumber.length === 10) {
    document.getElementById("phone_err").innerHTML = "Valid input";
  } else if (phoneNumber.startsWith("+251") && phoneNumber.length === 13) {
    document.getElementById("phone_err").innerHTML = "Valid input";
  } else {
    document.getElementById("phone_err").innerHTML = "Invalid input";
  }
}

///////////         BIRTH DATE            ////////////

function validateBirthdate() {
  var birthdate = document.getElementById("birthdate").value;
  var birthYear = new Date(birthdate).getFullYear();

  if (birthYear >= 2005) {
    document.getElementById("birthdate_err").innerHTML = "Invalid input";
  } else {
    document.getElementById("birthdate_err").innerHTML = "Valid input";
  }
}

///////////        DROPDOWN VALIDATION            ////////////

function validateQualification() {
  var qualification = document.getElementById("qualification").value;

  if (qualification === "") {
    document.getElementById("qualification_err").innerHTML = "Invalid input";
  } else {
    document.getElementById("qualification_err").innerHTML = "Valid input";
  }
}

///////////        PASSWORD VALIDATION            ////////////

function validateConfirmPassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    document.getElementById("confirmPassword_err").innerHTML =
      "Passwords do not match";
  } else {
    document.getElementById("confirmPassword_err").innerHTML =
      "Passwords match";
  }
}

///////////        IMAGE VALIDATION            ////////////

function validatePhoto() {
  var fileInput = document.getElementById("photo");
  var file = fileInput.files[0];

  if (file) {
    var fileName = file.name;
    var fileExtension = fileName.split(".").pop().toLowerCase();
    var allowedExtensions = ["png", "jpg", "jpeg"];

    if (allowedExtensions.includes(fileExtension)) {
      document.getElementById("photo_err").innerHTML = "Valid file";
    } else {
      document.getElementById("photo_err").innerHTML = "Invalid file extension";
      fileInput.value = ""; // Clear the file input field
    }
  } else {
    document.getElementById("photo_err").innerHTML = "No file selected";
  }
}

function validateForm() {
  // Perform individual field validations
  var isFirstNameValid = firstName();
  var isLastNameValid = lastName();
  var isGenderValid = validateGender();
  var isPhoneValid = validatePhoneNumber();
  var isBirthdateValid = validateBirthdate();
  var isQualificationValid = validateQualification();
  var isPasswordValid = validatePassword();
  var isConfirmPasswordValid = validateConfirmPassword();
  var isPhotoValid = validatePhoto();
  var isEmailValid = validateEmail();

  // Check if all criteria are valid
  if (
    isFirstNameValid &&
    isLastNameValid &&
    isGenderValid &&
    isPhoneValid &&
    isBirthdateValid &&
    isQualificationValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isPhotoValid &&
    isEmailValid
  ) {
    // If all criteria are valid, submit the form    return true;
  } else {
    // If any criteria are invalid, prevent form submission
    return false;
  }
}
