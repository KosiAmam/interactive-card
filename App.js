const cardCVC = document.querySelector(".cvc span");
const cardNumber = document.querySelector(".card-Number");
const cardName = document.querySelector(".cardholder-name");
const cardExpDate = document.querySelector(".exp-date");

const form = document.querySelector("form");
const inputName = document.querySelector("#name");
const inputNumber = document.querySelector("#card-number");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const inputCVC = document.querySelector("#cvc");

const infoErr = document.querySelectorAll(".info-err");
const complete = document.querySelector(".complete");

const showError = (input, arrInfoErr, message) => {
  input.classList.add("input-err");
  infoErr[arrInfoErr].classList.add("d-block");
  infoErr[arrInfoErr].textContent = message;
};

const hideError = (input, arrInfoErr) => {
  input.classList.remove("input-err");
  infoErr[arrInfoErr].classList.remove("d-block");
};

let inputNameValue;
let inputNumberValue;
let inputMonthValue = "00";
let inputYearValue = "00";
let inputCVCValue;

const validateInput = (input, arrInfoErr, wordLength) => {
  if (!wordLength) {
    // Name validation
    if (!input.value) {
      showError(input, arrInfoErr, "Can't be blank");
    } else {
      hideError(input, arrInfoErr);
      inputNameValue = input.value;
    }
  } else {
    // Number validation (for card number, month, year, CVC)
    if (!input.value) {
      showError(input, arrInfoErr, "Can't be blank");
    } else if (!/^\d+(\s\d+)*$/.test(input.value)) {
      showError(input, arrInfoErr, "Wrong format, numbers only");
    } else if (input === inputMonth && parseInt(input.value) > 12) {
      showError(input, arrInfoErr, "Month input must not be greater than 12!");
    } else if (input === inputMonth && parseInt(input.value) < 1) {
      showError(input, arrInfoErr, "Month input must be between 1-12!");
    } else if (input.value.replace(/\s/g, "").length < wordLength) {
      if (input === inputNumber) {
        showError(input, arrInfoErr, "Card number must be 16 numbers");
      } else {
        showError(input, arrInfoErr, `Must be ${wordLength} numbers`);
      }
    } else {
      hideError(input, arrInfoErr);

      switch (input) {
        case inputNumber:
          inputNumberValue = input.value;
          break;
        case inputMonth:
          inputMonthValue = input.value;
          break;
        case inputYear:
          inputYearValue = input.value;
          break;
        case inputCVC:
          inputCVCValue = input.value;
          break;
      }
    }
  }
};

inputName.addEventListener("input", (e) => {
  e.preventDefault();

  inputNameValue = e.target.value;
  cardName.textContent = inputNameValue;
});

inputNumber.addEventListener("input", (e) => {
  e.preventDefault();
 
  let formatText = e.target.value.replace(/[^\d]/g, "");

  formatText = formatText.substring(0, 16);

  formatText = formatText.replace(/(.{4})/g, "$1 ").trim();

  e.target.value = formatText;

  inputNumberValue = e.target.value;
  cardNumber.textContent = inputNumberValue || "0000 0000 0000 0000";
});


const cleanNumericInput = (input) => {
  const cleanValue = input.value.replace(/[^\d]/g, "");
  input.value = cleanValue;
};

inputMonth.addEventListener("input", (e) => {
  e.preventDefault();


  cleanNumericInput(inputMonth);

  
  let value = inputMonth.value.substring(0, 2);
  if (parseInt(value) > 12) {
    value = "12";
  }
  inputMonth.value = value;

  inputMonthValue = value || "00";
  cardExpDate.textContent = inputMonthValue + "/" + inputYearValue;
});

inputYear.addEventListener("input", (e) => {
  e.preventDefault();

 
  cleanNumericInput(inputYear);

 
  inputYear.value = inputYear.value.substring(0, 2);

  inputYearValue = inputYear.value || "00";
  cardExpDate.textContent = inputMonthValue + "/" + inputYearValue;
});

inputCVC.addEventListener("input", (e) => {
  e.preventDefault();

  // Clean input to numbers only
  cleanNumericInput(inputCVC);

  // Limit to 3 digits
  inputCVC.value = inputCVC.value.substring(0, 3);

  inputCVCValue = inputCVC.value;
  cardCVC.textContent = inputCVCValue || "000";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

 
  inputNameValue = "";
  inputNumberValue = "";
  inputMonthValue = "00";
  inputYearValue = "00";
  inputCVCValue = "";

  validateInput(inputName, 0);
  validateInput(inputNumber, 1, 16); 
  validateInput(inputMonth, 2, 2);
  validateInput(inputYear, 2, 2);
  validateInput(inputCVC, 3, 3);

  if (
    inputNameValue &&
    inputNumberValue &&
    inputMonthValue &&
    inputYearValue &&
    inputCVCValue
  ) {
    cardName.textContent = inputNameValue;
    cardNumber.textContent = inputNumberValue;
    cardExpDate.textContent = inputMonthValue + "/" + inputYearValue;
    cardCVC.textContent = inputCVCValue;

    form.classList.add("d-none");
    complete.classList.add("d-block");
  }
});

complete.addEventListener("click", () => {
  location.reload(true);
});
