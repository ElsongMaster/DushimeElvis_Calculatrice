let tab_Btn = [];
let btn_clear;
let btn_suppr;
let btn_equal;
let tab_btnExpression = [];

let funct_create_btn = () => {
  let btn_Calculatrice = [
    "C",
    "suppr",
    "%",

    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "0",
    "-",
    ".",
    "+",
    "=",
  ];
  let btn;
  let text;
  let divLine;

  for (let i = 0; i < btn_Calculatrice.length; i++) {
    btn = document.createElement("button");

    text = document.createTextNode(`${btn_Calculatrice[i]}`);
    btn.appendChild(text);
    if (btn_Calculatrice[i] == "C") {
      btn_clear = btn;
    } else if (btn_Calculatrice[i] == "suppr") {
      btn_suppr = btn;
    } else if (btn_Calculatrice[i] == "=") {
      btn_equal = btn;
    } else {
      tab_btnExpression.push(btn);
    }

    tab_Btn.push(btn);
  }
};

funct_create_btn();
console.log(tab_Btn);

//input
let divContentCalculate = document.createElement("div");
divContentCalculate.className = "Content-calculate";

let inputField = document.createElement("input");

let divContentBtn = document.createElement("div");
let bodyContent = document.createElement("div");
bodyContent.className = "bodyContent";
let title = document.createElement("h1");
title.textContent = "Calculatrice du turfu";
divContentBtn.className = "contentBtn";
//ajout des attributs (margin, color)
tab_Btn.forEach((elt) => {
  elt.setAttribute(
    "style",
    "display:inline-block; margin: 5px; text-align:center;"
  );
  if (isNaN(elt.textContent)) {
    elt.setAttribute("style", "color:white");
  } else {
    elt.setAttribute("style", "color:grey");
  }
});

divContentBtn.append(...tab_Btn);
divContentCalculate.append(inputField, divContentBtn);
bodyContent.append(divContentCalculate);
document.body.append(title, bodyContent);

//partie fonctionnelle
btn_clear.addEventListener("click", () => {
  inputField.value = "";
});

btn_suppr.addEventListener("click", () => {
  inputField.value = inputField.value.substr(0, inputField.value.length - 1);
});
console.log(tab_btnExpression);

tab_btnExpression.forEach((elt) => {
  elt.addEventListener("click", () => {
    inputField.value += elt.textContent;
  });
});

btn_equal.addEventListener("click", () => {
  let rep;
  try {
    rep = Math.round(eval(`${inputField.value}`));
  } catch (e) {
    rep = "error !";
  }
  inputField.value = rep;
});
