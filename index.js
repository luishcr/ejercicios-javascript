
// EJERCICIO 1
document
  .querySelector("#ej1_input .ej1_btn")
  .addEventListener("click", calculaAltura);
function calculaAltura() {
  let a = Number(document.querySelector("#ej1_input .a").value);
  let b = Number(document.querySelector("#ej1_input .b").value);
  let c = Number(document.querySelector("#ej1_input .c").value);
  let h = 0;
  if (a == b) {
    h = Math.sqrt(a * a - (c * c) / 4).toFixed(2);
    document.getElementById(
      "ej1_result"
    ).innerHTML = `<br>Es un triangulo isósceles:<br> Lado 1 = ${a}<br> Lado 2 = ${b}<br> Base = ${c}<br> Altura = ${h}`;

    console.log(
      `Es un triangulo isósceles:\n lado 1 = ${a}\n lado 2 = ${b}\n base = ${c}\n altura = ${h}`
    );
  } else if (a == c) {
    h = Math.sqrt(a * a - (b * b) / 4).toFixed(2);
    document.getElementById(
      "ej1_result"
    ).innerHTML = `<br>Es un triangulo isósceles:<br> Lado 1 = ${a}<br> Lado 2 = ${c}<br> Base = ${b}<br> Altura = ${h}`;

    console.log(
      `Es un triangulo isósceles:\n lado 1 = ${a}\n lado 2 = ${c}\n base = ${b}\n altura = ${h}`
    );
  } else if (c == b) {
    h = Math.sqrt(c * c - (a * a) / 4).toFixed(2);
    document.getElementById(
      "ej1_result"
    ).innerHTML = `<br>Es un triangulo isósceles:<br> Lado 1 = ${c}<br> Lado 2 = ${b}<br> Base = ${a}<br> Altura = ${h}`;

    console.log(
      `Es un triangulo isósceles:\n lado 1 = ${c}\n lado 2 = ${b}\n base = ${a}\n altura = ${h}`
    );
  } else {
    document.getElementById("ej1_result").innerHTML =
      "<br>No es un triangulo isósceles, no puedo calcular la altura";
    console.log("No es un triangulo isósceles, no puedo calcular su altura");
  }
}

// EJERCICIO 2
document
  .querySelector("#ej2_input .ej2_btn")
  .addEventListener("click", calculaPrecio);

function calculaPrecio() {
  let inputPrice = Number(document.querySelector("#ej2_input .price").value);
  let inputCoupon = document.querySelector("#ej2_input .coupon").value;
  let coupons = [
    {
      name: "Summer2022",
      discount: 30,
    },
    {
      name: "BlackFriday2022",
      discount: 50,
    },
    {
      name: "Holiday2022",
      discount: 40,
    },
  ];
  let couponSearch = (coupon) => {
    return coupon.name === inputCoupon;
  };
  let couponValidation = coupons.find(couponSearch);

  if (!couponValidation) {
    console.log(`El cupón "${inputCoupon}" no es válido`);
    document.getElementById(
      "ej2_result"
    ).innerHTML = `El cupón "${inputCoupon}" no es válido`;
  } else {
    let discount = couponValidation.discount;
    console.log(
      `El cupón introducido le aplicará un descuento del ${discount} %`
    );
    let finalPrice = inputPrice - inputPrice * (discount / 100);
    console.log(`El precio final es ${finalPrice} €`);
    document.getElementById(
      "ej2_result"
    ).innerHTML = `El cupón introducido le aplicará un descuento del ${discount} % <br> El precio final es ${finalPrice} €`;
  }
}

// EJERCICIO 3
let lista = [];
document.querySelector(".ej3_btnNewNum").addEventListener("click", newNum);
document.querySelector(".ej3_btnMedia").addEventListener("click", calculaMedia);
document
  .querySelector(".ej3_btnMediana")
  .addEventListener("click", calculaMediana);
document.querySelector(".ej3_btnModa").addEventListener("click", calculaModa);

function newNum() {
  lista.push(Number(document.querySelector("#ej3_inputs .num").value));
  document.querySelector(
    ".ej3_NewNum"
  ).innerHTML = `Lista actual es = (${lista})`;
}

function calculaMedia() {
  let suma = 0;
  for (i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  let result = suma / lista.length;
  document.getElementById(
    "ej3_result"
  ).innerHTML = `La media aritmética de la lista es = ${result.toFixed(2)}`;
}

function calculaMediana() {}
