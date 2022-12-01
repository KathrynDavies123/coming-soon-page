let submitbutton = document.querySelector(".submitbutton");
let emailinputfield = document.querySelector(".emailinputfield");
let newsletterform = document.querySelector(".newsletterform");
let formcontainer = document.querySelector(".formcontainer");
let emailerroricon = document.querySelector(".emailerroricon");
let emailerrormessage = document.querySelector(".emailerror");

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

submitbutton.addEventListener("click", function (event) {
  event.preventDefault();
  let emailinputvalue = emailinputfield.value;
  if (validateEmail(emailinputvalue)) {
    newsletterform.innerHTML = "<h2>Thank you!</h2>";
    emailerroricon.style.display = "none";
    emailerrormessage.style.display = "none";
  }
  else {
    emailerroricon.style.display = "inline";
    emailerrormessage.style.display = "block"
    formcontainer.classList.add("errorborder");
  }
});
