let pname = document.querySelector(".front__name"),
  date = document.querySelector(".front__date"),
  number = document.querySelector(".front__number"),
  cvc = document.querySelector(".back__cvc"),
  nameInput = document.querySelector("#name"),
  numberInput = document.querySelector("#number"),
  cvcInput = document.querySelector("#cvc"),
  dateInput = document.querySelector("#date-input"),
  yearInput = document.querySelector("#year-input"),
  form = document.querySelector(".hero__form"),
  confirmHero = document.querySelector(".hero__confirm"),
  hint = document.querySelectorAll(".hint"),
  bconfirm = document.querySelector("#button");

function containsOnlyNumber(str) {
  return /^(?=.*\d)[\d ]+$/.test(str);
}

function insertBlankAfterEveryThreeCharacters(str) {
  var str = str.split(" ").join("").split("");
  var formatted = [];
  while (str.length) {
    for (var i = 0; i < 4 && str.length; i++) {
      formatted.push(str.shift());
    }
    if (str.length) formatted.push(" ");
  }
  return formatted.join("");
}

const changeName = () => {
  pname.innerHTML = nameInput.value;
};

const changeNumber = () => {
  if (!containsOnlyNumber(numberInput.value) || numberInput.value == "") {
    numberInput.style.borderColor = "var(--Red)";
    numberInput.style.outline = "var(--Light-grayish-violet)";
    hint[0].style.visibility = "visible";
    preventDefault();
  } else {
    number.innerHTML = numberInput.value;
    hint[0].style.visibility = "hidden";
    numberInput.style.borderColor = "var(--Light-grayish-violet)";
    numberInput.style.outline = "var(--Linear-gradient)";
  }
};

const changeDate = () => {
  if (dateInput.value == "") {
    dateInput.style.borderColor = "var(--Red)";
    dateInput.style.outline = "none";
    hint[1].style.visibility = "visible";
    preventDefault();
  } else {
    date.innerHTML = `${dateInput.value} / ${yearInput.value}`;
    numberInput.style.borderColor = "var(--Light-grayish-violet)";
    numberInput.style.outline = "var(--Linear-gradient)";
  }
};

const changeCvc = () => {
  if (cvcInput.value == "") {
    cvcInput.style.borderColor = "var(--Red)";
    cvcInput.style.outline = "none";
    hint[2].style.visibility = "visible";
    preventDefault();
  } else {
    cvc.innerHTML = cvcInput.value;
    numberInput.style.borderColor = "var(--Light-grayish-violet)";
    numberInput.style.outline = "var(--Linear-gradient)";
    form.style.display = "none";
    confirmHero.style.display = "block";
  }
};

bconfirm.addEventListener("click", () => {
  changeName();
  changeNumber();
  changeDate();
  changeCvc();
});
numberInput.addEventListener("input", function (e) {
  this.value = insertBlankAfterEveryThreeCharacters(this.value);
});
