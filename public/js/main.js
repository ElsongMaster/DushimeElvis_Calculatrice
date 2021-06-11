let tab_Btn = [];
let funct_create_btn = () => {
  let btn_Calculatrice = [
    "C",
    "suppr",
    "%",

    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "x",
    "1",
    "2",
    "3",
    "0",
    "-",
    ".",
    "+",
    "=",
  ];
  // let btn_operator = ["%",'+','=','x', "÷"];
  let btn;
  let text;
  let divLine;
  for (let i = 0; i < btn_Calculatrice.length; i++) {
    btn = document.createElement("button");

    text = document.createTextNode(`${btn_Calculatrice[i]}`);
    btn.appendChild(text);

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

document.body.append(divContentCalculate);
