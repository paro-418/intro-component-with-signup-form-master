let fname = document.getElementById("first-name");
fname.addEventListener("click", () => {
  fname.style.backgroundImage = "none";
  document.getElementsByClassName("error-msg")[0].style.display = "none";
  fname.style.borderColor = "#999";
});

let lname = document.getElementById("last-name");
lname.addEventListener("click", () => {
  lname.style.backgroundImage = "none";
  document.getElementsByClassName("error-msg")[1].style.display = "none";
  lname.style.borderColor = "#999";
});

let mail = document.getElementById("email");
mail.addEventListener("click", () => {
  mail.style.backgroundImage = "none";
  document.getElementsByClassName("error-msg")[2].style.display = "none";
  mail.style.borderColor = "#999";
});

mail.addEventListener("input", (e) => {
  e.preventDefault();
  if (mail.value == "") {
    mail.style.borderColor = "#999";
  }
});

let pass = document.getElementById("password");
pass.addEventListener("click", () => {
  pass.style.backgroundImage = "none";
  document.getElementsByClassName("error-msg")[3].style.display = "none";
  pass.style.borderColor = "#999";
});

let emailInput = document.getElementById("email");

emailInput.addEventListener("input", () => {
  let storeEmail = emailInput.value;
  let errorMsg = document.getElementById("email-error");

  if (storeEmail == "") {
    errorMsg.style.display = "none";
    emailInput.style.backgroundImage = "none";
    return;
  }

  if (ValidateEmail(storeEmail)) {
    errorMsg.style.display = "none";
    emailInput.style.backgroundImage = "none";
    mail.style.borderColor = "#999";
  } else {
    errorMsg.style.display = "block";
    emailInput.style.backgroundImage = "url(images/icon-error.svg)";
    mail.style.borderColor = "red";
  }
});

function ValidateEmail(mail) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
  return regex.test(mail);
}

let button = document.getElementsByClassName("form-button")[0];

button.addEventListener("click", (e) => {
  e.preventDefault();

  let storeInputs = document.getElementsByTagName("input");
  let storeSpans = document.getElementsByClassName("error-msg");

  for (let i = 0; i < storeInputs.length; i++) {
    if (storeInputs[i].value == "") {
      storeInputs[i].style.backgroundImage = "url(images/icon-error.svg)";
      storeSpans[i].style.display = "block";
      storeInputs[i].style.borderColor = "red";
    } else {
      storeSpans[i].style.display = "none";
    }
  }
});
