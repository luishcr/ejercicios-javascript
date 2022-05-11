// DARK MODE

// Switcher Dark-mode
const btnSwitch = document.querySelector(".switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  // Dark-mode persistente
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});
//Obtener modo-actual
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}

// EJERCICIO 1
document
  .querySelector("#ej1_inputs .ej1_btn")
  .addEventListener("click", calculaAltura);
function calculaAltura() {
  let a = Number(document.querySelector("#ej1_inputs .a").value);
  let b = Number(document.querySelector("#ej1_inputs .b").value);
  let c = Number(document.querySelector("#ej1_inputs .c").value);
  let h = 0;
  if (a == b) {
    h = Math.sqrt(a * a - (c * c) / 4).toFixed(2);
    document.getElementById(
      "ej1_result"
    ).innerHTML = `<br>Es un triangulo isósceles:<br> Lado 1 = ${a}<br> Lado 2 = ${b}<br> Base = ${c}<br> Altura = ${h}`;
  } else if (a == c) {
    h = Math.sqrt(a * a - (b * b) / 4).toFixed(2);
    document.getElementById(
      "ej1_result"
    ).innerHTML = `<br>Es un triangulo isósceles:<br> Lado 1 = ${a}<br> Lado 2 = ${c}<br> Base = ${b}<br> Altura = ${h}`;
  } else if (c == b) {
    h = Math.sqrt(c * c - (a * a) / 4).toFixed(2);
    document.getElementById(
      "ej1_result"
    ).innerHTML = `<br>Es un triangulo isósceles:<br> Lado 1 = ${c}<br> Lado 2 = ${b}<br> Base = ${a}<br> Altura = ${h}`;
  } else {
    document.getElementById("ej1_result").innerHTML =
      "<br>No es un triangulo isósceles, no puedo calcular la altura";
  }
}

// EJERCICIO 2
const coupons = [];

document
  .querySelector("#ej2_inputs .ej2_btnNewCoupon")
  .addEventListener("click", newCoupon);
document
  .querySelector("#ej2_inputs .ej2_btnDelCoupon")
  .addEventListener("click", delCoupon);
document
  .querySelector("#ej2_inputs .ej2_btn")
  .addEventListener("click", calculaPrecio);

function newCoupon() {
  coupons.push({
    name: document.querySelector("#ej2_inputs .coupon-name").value,
    discount: Number(
      document.querySelector("#ej2_inputs .coupon-discount").value
    ),
  });

  let nombreCuponesActuales = coupons.map((coupon) => coupon.name);

  document.querySelector(
    "#ej2_inputs .coupons-list"
  ).innerHTML = `'${nombreCuponesActuales}'`;
}

function delCoupon() {
  coupons.pop();
  let nombreCuponesActuales = coupons.map((coupon) => coupon.name);

  if (coupons.length == 0) {
    document.querySelector(
      "#ej2_inputs .coupons-list"
    ).innerHTML = `No hay cupones disponibles.`;
  } else {
    document.querySelector(
      "#ej2_inputs .coupons-list"
    ).innerHTML = `'${nombreCuponesActuales}'`;
  }
}

// Calcula el precio del producto segun cupón y descuento introducido
function calculaPrecio() {
  let inputPrice = Number(document.querySelector("#ej2_inputs .price").value);
  let inputCoupon = document.querySelector("#ej2_inputs .coupon").value;

  //Función para buscar cupón en una lista de cupones, devuelve true si coincide su nombre con el introducido por el usuario
  let couponSearch = (coupon) => {
    return coupon.name === inputCoupon;
  };
  // Valida que el nombre del cupón se encuentra en la lista de cupones
  let couponValidation = coupons.find(couponSearch);

  // Si existe el cupón obtenemos el descuento y calculamos precio final
  if (!couponValidation) {
    document.getElementById(
      "ej2_result"
    ).innerHTML = `El cupón "${inputCoupon}" no es válido`;
  } else {
    let discount = couponValidation.discount;
    let finalPrice = inputPrice - inputPrice * (discount / 100);
    document.getElementById(
      "ej2_result"
    ).innerHTML = `El cupón introducido le aplicará un descuento del ${discount} % <br> El precio final es ${finalPrice.toFixed(
      2
    )} €`;
  }
}

// EJERCICIO 3
let lista = [];
document.querySelector(".ej3_btnNewNum").addEventListener("click", newNum);
document.querySelector(".ej3_delLastNum").addEventListener("click", delNum);
document.querySelector(".ej3_btnMedia").addEventListener("click", calculaMedia);
document
  .querySelector(".ej3_btnMediana")
  .addEventListener("click", calculaMediana);
document.querySelector(".ej3_btnModa").addEventListener("click", calculaModa);

function newNum() {
  lista.push(Number(document.querySelector("#ej3_inputs .num").value));
  document.querySelector(
    ".ej3_NumList"
  ).innerHTML = `Lista actual es = (${lista})`;
}
function delNum() {
  lista.pop();
  if (lista.length == 0) {
    document.querySelector(".ej3_NumList").innerHTML = `La lista está vacía`;
  } else {
    document.querySelector(
      ".ej3_NumList"
    ).innerHTML = `Lista actual es = (${lista})`;
  }
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

function calculaMediana() {
  let listaOrdenada = lista.sort((a, b) => a - b);
  let mediana;

  if (listaOrdenada.length % 2 == 0) {
    mediana = lista[parseInt(listaOrdenada.length / 2)];
  } else {
    mediana = lista[parseInt(listaOrdenada.length / 2)];
  }

  document.getElementById(
    "ej3_result"
  ).innerHTML = `La lista ordenada es: (${listaOrdenada}) <br>
  La mediana es = ${mediana}`;
}
