const form = document.querySelector("form");
const emailInput = document.getElementById("email");

const validateForm = (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (emailValue === "") {
    emailInput.nextElementSibling.textContent =
      "Whoops! It looks like you forgot to add your email";
    emailInput.nextElementSibling.classList.add("error");
  } else if (!emailRegex.test(emailValue)) {
    emailInput.nextElementSibling.classList.add("error");
    emailInput.nextElementSibling.textContent =
      "Please provide a valid email address";
  } else {
    emailInput.nextElementSibling.classList.remove("error");
    emailInput.nextElementSibling.textContent = "";
    alert("You successfully subscribed!");
  }
};

form.addEventListener("submit", validateForm);
