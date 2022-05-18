/*-------------------*/
/*     DARK MODE     */
/*-------------------*/

// Switcher Dark-mode
const btnSwitch = document.querySelector(".switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  // Persistent Dark-mode
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

// Get actual-mode
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}

/*-------------------*/
/*     EXERCISE 1    */
/*-------------------*/

const e1BtnCalc = document.querySelector("#e1 .btn__calc-height");
e1BtnCalc.addEventListener("click", () => {
  const a = document.querySelector(".input__a").value;
  const b = document.querySelector(".input__b").value;
  const c = document.querySelector(".input__c").value;
  let h = 0;
  const inputError = document.querySelector("#e1 .error");
  if (a === "" || b === "" || c === "") {
    inputError.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Debes introducir tres números`;
    setTimeout(() => {
      inputError.innerHTML = "";
    }, 3000);
  } else {
    if (a === b && c < (2 * a || 2 * b)) {
      h = Math.sqrt(a * a - (c * c) / 4).toFixed(2);
      document.querySelector(
        "#e1 .result"
      ).innerHTML = `<br>Es un triangulo isósceles:<br> Lado 1 = ${a}<br> Lado 2 = ${b}<br> Base = ${c}<br> Altura = ${h}`;
    } else if (a === c && b < (2 * a || 2 * c)) {
      h = Math.sqrt(a * a - (b * b) / 4).toFixed(2);
      document.querySelector(
        "#e1 .result"
      ).innerHTML = `<br>Es un triangulo isósceles:<br> Lado 1 = ${a}<br> Lado 2 = ${c}<br> Base = ${b}<br> Altura = ${h}`;
    } else if (c === b && a < (2 * c || 2 * b)) {
      h = Math.sqrt(c * c - (a * a) / 4).toFixed(2);
      document.querySelector(
        "#e1 .result"
      ).innerHTML = `<br>Es un triangulo isósceles:<br> Lado 1 = ${c}<br> Lado 2 = ${b}<br> Base = ${a}<br> Altura = ${h}`;
    } else {
      document.querySelector("#e1 .result").innerHTML =
        "<br>No es un triangulo isósceles";
    }
  }
});

//  Show/hide code animation
const e1BtnShowCode = document.querySelector("#e1 .btn__showcode");
e1BtnShowCode.addEventListener("click", () => {
  const showCode = document.querySelector("#e1 .code");
  showCode.classList.toggle("code__show");
  if (showCode.className === "code code__show") {
    showCode.innerHTML = `<pre>const e1BtnCalc = document.querySelector("#e1 .btn__calc");
e1BtnCalc.addEventListener("click", () => {
  let a = document.querySelector(".input__a").value;
  let b = document.querySelector(".input__b").value;
  let c = document.querySelector(".input__c").value;
  let h = 0;
  if (a === "" || b === "" || c === "") {
    document.querySelector(
      "#e1 .result"
    ).innerHTML = \`Debes introducir tres números\`;
  } else {
    if (a === b && c < (2 * a || 2 * b)) {
      h = Math.sqrt(a * a - (c * c) / 4).toFixed(2);
      document.querySelector(
        "#e1 .result"
      ).innerHTML = \`Es un triangulo isósceles: Lado 1 = \${a} Lado 2 = \${b} Base = \${c} Altura = \${h}\`;
    } else if (a === c && b < (2 * a || 2 * c)) {
      h = Math.sqrt(a * a - (b * b) / 4).toFixed(2);
      document.querySelector(
        "#e1 .result"
      ).innerHTML = \`Es un triangulo isósceles: Lado 1 = \${a} Lado 2 = \${c} Base = \${b} Altura = \${h}\`;
    } else if (c === b && a < (2 * c || 2 * b)) {
      h = Math.sqrt(c * c - (a * a) / 4).toFixed(2);
      document.querySelector(
        "#e1 .result"
      ).innerHTML = \`Es un triangulo isósceles: Lado 1 = \${c} Lado 2 = \${b} Base = \${a} Altura = \${h}\`;
    } else {
      document.querySelector("#e1 .result").innerHTML =
        "No es un triangulo isósceles";
    }
  }
});</pre> `;
    e1BtnShowCode.innerHTML = `<button type="button" class="hvr-icon-up hvr-icon">
        Ocultar código
        <i class="fas fa-angle-up hvr-icon-up hvr-icon"></i>
      </button>`;
  } else {
    showCode.innerHTML = "";
    e1BtnShowCode.innerHTML = `<button type="button" class="hvr-icon-down hvr-icon2">
    Mostrar Código
    <i class="fas fa-angle-down hvr-icon-down hvr-icon2"></i>
  </button>`;
  }
});

/*-------------------*/
/*     EXERCISE 2    */
/*-------------------*/

const coupons = [];
const btnAddCoupon = document.querySelector("#e2 .btn__add-coupon");
const btnDelCoupon = document.querySelector("#e2 .btn__del-coupon");
const btnCalcPrice = document.querySelector("#e2 .btn__calc-price");

btnAddCoupon.addEventListener("click", () => {
  const inputCouponName = document.querySelector(
    "#e2 .input__coupon-name"
  ).value;
  const inputDiscountValue = document.querySelector(
    "#e2 .input__coupon-discount"
  ).value;
  const couponsList = document.querySelector("#e2 .coupons-list");
  const couponInfo = document.querySelector("#e2 .info");

  if (
    inputCouponName === "" ||
    inputDiscountValue < 1 ||
    inputDiscountValue > 99
  ) {
    couponInfo.innerHTML = `<i class="fa-solid fa-circle-info"></i> Introduce nombre y número entre 1 - 99`;
    setTimeout(() => {
      couponInfo.innerHTML = "";
    }, 3000);
  } else {
    coupons.push({
      name: inputCouponName,
      discount: Number(inputDiscountValue),
    });

    const allCouponsNames = coupons.map((coupon) => coupon.name);
    couponsList.innerHTML = `'${allCouponsNames}'`;
  }
});

btnDelCoupon.addEventListener("click", () => {
  coupons.pop();
  const allCouponsNames = coupons.map((coupon) => coupon.name);

  if (coupons.length == 0) {
    document.querySelector(
      "#e2 .coupons-list"
    ).innerHTML = `No hay cupones disponibles.`;
  } else {
    document.querySelector(
      "#e2 .coupons-list"
    ).innerHTML = `'${allCouponsNames}'`;
  }
});

btnCalcPrice.addEventListener("click", () => {
  const inputPrice = Number(document.querySelector("#e2 .input__price").value);
  const inputCoupon = document.querySelector("#e2 .input__coupon").value;
  const couponError = document.querySelector("#e2 .error");

  //Función para buscar cupón en una lista de cupones, devuelve true si coincide su nombre con el introducido por el usuario
  let couponSearch = (coupon) => {
    return coupon.name === inputCoupon;
  };
  // Valida que el nombre del cupón se encuentra en la lista de cupones
  let couponValidation = coupons.find(couponSearch);

  // Si existe el cupón obtenemos el descuento y calculamos precio final
  if (!couponValidation) {
    couponError.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> El cupón "${inputCoupon}" no existe`;
    setTimeout(() => {
      couponError.innerHTML = "";
    }, 3000);
  } else {
    let discount = couponValidation.discount;
    let finalPrice = inputPrice - inputPrice * (discount / 100);
    document.querySelector(
      "#e2 .result"
    ).innerHTML = `El cupón introducido le aplicará un descuento del ${discount} % <br> El precio final es ${finalPrice.toFixed(
      2
    )} €`;
  }
});

//  Show/hide code animation
const e2BtnShowCode = document.querySelector("#e2 .btn__showcode");
e2BtnShowCode.addEventListener("click", () => {
  const showCode = document.querySelector("#e2 .code");
  showCode.classList.toggle("code__show");
  if (showCode.className === "code code__show") {
    showCode.innerHTML = `<pre>const coupons = [];
const btnAddCoupon = document.querySelector("#e2 .btn__add-coupon");
const btnDelCoupon = document.querySelector("#e2 .btn__del-coupon");
const btnCalcPrice = document.querySelector("#e2 .btn__calc-price");

btnAddCoupon.addEventListener("click", () => {
  const inputCouponName = document.querySelector(
    "#e2 .input__coupon-name"
  ).value;
  const inputDiscountValue = document.querySelector(
    "#e2 .input__coupon-discount"
  ).value;
  const couponsList = document.querySelector("#e2 .coupons-list");
  const couponInfo = document.querySelector("#e2 .info");

  if (
    inputCouponName === "" ||
    inputDiscountValue < 1 ||
    inputDiscountValue > 99
  ) {
    couponInfo.innerHTML = \`<i class="fa-solid fa-circle-info"></i> Introduce nombre y número entre 1 - 99\`;
    setTimeout(() => {
      couponInfo.innerHTML = "";
    }, 3000);
  } else {
    coupons.push({
      name: inputCouponName,
      discount: Number(inputDiscountValue),
    });

    const allCouponsNames = coupons.map((coupon) => coupon.name);
    couponsList.innerHTML = \`'\${allCouponsNames}'\`;
  }
});

btnDelCoupon.addEventListener("click", () => {
  coupons.pop();
  const allCouponsNames = coupons.map((coupon) => coupon.name);

  if (coupons.length == 0) {
    document.querySelector(
      "#e2 .coupons-list"
    ).innerHTML = \`No hay cupones disponibles.\`;
  } else {
    document.querySelector(
      "#e2 .coupons-list"
    ).innerHTML = \`'\${allCouponsNames}'\`;
  }
});

btnCalcPrice.addEventListener("click", () => {
  const inputPrice = Number(document.querySelector("#e2 .input__price").value);
  const inputCoupon = document.querySelector("#e2 .input__coupon").value;
  const couponError = document.querySelector("#e2 .error");

  let couponSearch = (coupon) => {
    return coupon.name === inputCoupon;
  };
  let couponValidation = coupons.find(couponSearch);

  if (!couponValidation) {
    couponError.innerHTML = \`<i class="fa-solid fa-triangle-exclamation"></i> El cupón "\${inputCoupon}" no existe\`;
    setTimeout(() => {
      couponError.innerHTML = "";
    }, 3000);
  } else {
    let discount = couponValidation.discount;
    let finalPrice = inputPrice - inputPrice * (discount / 100);
    document.querySelector(
      "#e2 .result"
    ).innerHTML = \`El cupón introducido le aplicará un descuento del \${discount} %. 
      El precio final es \${finalPrice.toFixed(2)} €\`;
  }
});
</pre> `;
    e2BtnShowCode.innerHTML = `<button type="button" class="hvr-icon-up hvr-icon">
        Ocultar código
        <i class="fas fa-angle-up hvr-icon-up hvr-icon"></i>
      </button>`;
  } else {
    showCode.innerHTML = "";
    e2BtnShowCode.innerHTML = `<button type="button" class="hvr-icon-down hvr-icon2">
    Mostrar Código
    <i class="fas fa-angle-down hvr-icon-down hvr-icon2"></i>
  </button>`;
  }
});

/*-------------------*/
/*     EXERCISE 3    */
/*-------------------*/
const numbersList = [];
const btnAddNumber = document.querySelector("#e3 .btn__add-number");
const btnDelNumber = document.querySelector("#e3 .btn__del-number");
const btnCalcMedia = document.querySelector("#e3 .btn__calc-media");
const btnCalcMediana = document.querySelector("#e3 .btn__calc-mediana");
const btnCalcModa = document.querySelector("#e3 .btn__calc-moda");
const showNumberList = document.querySelector("#e3 .show-number-list");

btnAddNumber.addEventListener("click", () => {
  numbersList.push(
    Number(document.querySelector("#e3 .input__add-number").value)
  );
  showNumberList.innerHTML = `Lista actual es = (${numbersList})`;
});

btnDelNumber.addEventListener("click", () => {
  numbersList.pop();
  if (numbersList.length == 0) {
    showNumberList.innerHTML = `La lista está vacía`;
  } else {
    showNumberList.innerHTML = `Lista actual es = (${numbersList})`;
  }
});

btnCalcMedia.addEventListener("click", () => {
  let suma = 0;
  for (i = 0; i < numbersList.length; i++) {
    suma += numbersList[i];
  }
  let result = suma / numbersList.length;
  document.querySelector(
    "#e3 .result"
  ).innerHTML = `La media aritmética de la lista es = ${result.toFixed(2)}`;
});

btnCalcMediana.addEventListener("click", () => {
  let listaOrdenada = numbersList.sort((a, b) => a - b);
  let mediana;

  if (listaOrdenada.length % 2 == 0) {
    mediana = numbersList[parseInt(listaOrdenada.length / 2)];
  } else {
    mediana = numbersList[parseInt(listaOrdenada.length / 2)];
  }

  document.querySelector(
    "#e3 .result"
  ).innerHTML = `La lista ordenada es: (${listaOrdenada}) <br>
  La mediana es = ${mediana}`;
});

btnCalcModa.addEventListener("click", () => {});

//  Show/hide code animation
const e3BtnShowCode = document.querySelector("#e3 .btn__showcode");
e3BtnShowCode.addEventListener("click", () => {
  const showCode = document.querySelector("#e3 .code");
  showCode.classList.toggle("code__show");
  if (showCode.className === "code code__show") {
    showCode.innerHTML = `<pre>const numbersList = [];
const btnAddNumber = document.querySelector("#e3 .btn__add-number");
const btnDelNumber = document.querySelector("#e3 .btn__del-number");
const btnCalcMedia = document.querySelector("#e3 .btn__calc-media");
const btnCalcMediana = document.querySelector("#e3 .btn__calc-mediana");
const btnCalcModa = document.querySelector("#e3 .btn__calc-moda");
const showNumberList = document.querySelector("#e3 .show-number-list");

btnAddNumber.addEventListener("click", () => {
  numbersList.push(
    Number(document.querySelector("#e3 .input__add-number").value)
  );
  showNumberList.innerHTML = \`Lista actual es = (\${numbersList})\`;
});

btnDelNumber.addEventListener("click", () => {
  numbersList.pop();
  if (numbersList.length == 0) {
    showNumberList.innerHTML = \`La lista está vacía\`;
  } else {
    showNumberList.innerHTML = \`Lista actual es = (\${numbersList})\`;
  }
});

btnCalcMedia.addEventListener("click", () => {
  let suma = 0;
  for (i = 0; i < numbersList.length; i++) {
    suma += numbersList[i];
  }
  let result = suma / numbersList.length;
  document.querySelector(
    "#e3 .result"
  ).innerHTML = \`La media aritmética de la lista es = \${result.toFixed(2)}\`;
});

btnCalcMediana.addEventListener("click", () => {
  let listaOrdenada = numbersList.sort((a, b) => a - b);
  let mediana;

  if (listaOrdenada.length % 2 == 0) {
    mediana = numbersList[parseInt(listaOrdenada.length / 2)];
  } else {
    mediana = numbersList[parseInt(listaOrdenada.length / 2)];
  }

  document.querySelector(
    "#e3 .result"
  ).innerHTML = \`La lista ordenada es: (\${listaOrdenada}) <br>
  La mediana es = \${mediana}\`;
});

btnCalcModa.addEventListener("click", () => {});</pre>`;
    e3BtnShowCode.innerHTML = `<button type="button" class="hvr-icon-up hvr-icon">
        Ocultar código
        <i class="fas fa-angle-up hvr-icon-up hvr-icon"></i>
      </button>`;
  } else {
    showCode.innerHTML = "";
    e3BtnShowCode.innerHTML = `<button type="button" class="hvr-icon-down hvr-icon2">
    Mostrar Código
    <i class="fas fa-angle-down hvr-icon-down hvr-icon2"></i>
  </button>`;
  }
});
