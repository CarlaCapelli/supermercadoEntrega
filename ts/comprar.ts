let alfajor = document.createElement("img");
alfajor.src = "./alfajor.jpeg";
alfajor?.classList.add("fotoProd");
let yerba = document.createElement("img");
yerba.src = "yerba.jpeg";
yerba?.classList.add("fotoProd");
let mayonesa = document.createElement("img");
mayonesa.src = "mayonesa.jpeg";
mayonesa?.classList.add("fotoProd");
let cafe = document.createElement("img");
cafe.src = "cafe.jpeg";
cafe?.classList.add("fotoProd");
let coca = document.createElement("img");
coca.src = "coca.jpeg";
coca?.classList.add("fotoProd");
let harina = document.createElement("img");
harina.src = "harina.jpeg";
harina?.classList.add("fotoProd");
let fotos: any[] = [mayonesa, cafe, alfajor, harina, yerba, coca];

let lista: string[] = [
  "Mayonesa",
  "Cafe",
  "Alfajor",
  "Harina",
  "Yerba",
  "Coca-Cola"
];
let precio: number[] = [250, 696, 80, 125, 350, 190];
let stock: number[] = [15, 10, 40, 22, 13, 18];
let divElementos = document.getElementById("elementos");

let cargarProductos = () => {
  for (let i: number = 0; i < lista.length; i++) {
    let divProducto = document.createElement("div");
    divProducto.classList.add("blanco");
    let imgs = document.createElement("img");
    imgs = fotos[i];
    let nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = lista[i];
    let precioProducto = document.createElement("p");
    precioProducto.innerHTML = "$" + precio[i];
    let digaCantidad = document.createElement("p");
    digaCantidad.innerHTML = "Cantidad:";
    let cantidad = document.createElement("input");
    cantidad.id = "cantidad" + [i];
    cantidad.type = "number";
    cantidad.max = String(stock[i]);
    cantidad.min = "0";

    let btn = document.createElement("button");
    btn.innerText = "Agregar";
    btn.id = "boton" + [i];
    let btnComprar = document.getElementById("comprar");
    //Lo puse aca para no tener que volver a llamar todos los elementos abajo

    btnComprar?.addEventListener("click", function () {
      //No se como hacer para que no se vean todas las cosas de una
      //si le pongo solo a divElementos la clase las cosas se ven igual
      divElementos.classList.toggle("desaparece");
      divProducto.classList.toggle("desaparece");
      nombreProducto.classList.toggle("desaparece");
      digaCantidad.classList.toggle("desaparece");
      cantidad.classList.toggle("desaparece");
      btn.classList.toggle("desaparece");
      let titu = document.getElementById("titulo");
      titu?.classList.add("desaparece");
      btnComprar.classList.add("desaparece");
      let btnPagar = document.getElementById("pagar");
      btnPagar?.classList.remove("desaparece");
    });

    divElementos.appendChild(divProducto);
    divProducto.appendChild(imgs);
    divProducto.appendChild(nombreProducto);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(digaCantidad);
    divProducto.appendChild(cantidad);
    divProducto.appendChild(btn);
  }
};

let comprarProductos = () => {
  let sumaTotal: number = 0;
  let descuento: number = 0;
  let totalDescuento: number = 0;
  for (let i: number = 0; i < lista.length; i++) {
    let bot = document.getElementById("boton" + [i]);
    bot.addEventListener("click", () => {
      let suma: number = 0;
      let cantidad = document.getElementById("cantidad" + [i]);
      let cantidadSeleccionada = Number(cantidad.value);

      if (cantidadSeleccionada < 0 || cantidadSeleccionada > stock[i]) {
        alert("no contamos con la cantidad seleccionada");
      } else {
        suma = suma + precio[i] * cantidadSeleccionada;
        console.log(
          "Agrego " + cantidadSeleccionada + " unidad/es de " + lista[i],
          "el precio unitario es $" + precio[i]
        );
        console.log("La suma total de " + lista[i] + " es de $" + suma);
        let divCompra = document.getElementById("compra");

        divCompra.classList.add("naranja");

        let productoCompra = document.createElement("p");

        productoCompra.innerHTML =
          "Producto: " +
          lista[i] +
          " Precio/u: $" +
          precio[i] +
          " x " +
          cantidadSeleccionada +
          " = $" +
          suma;
        sumaTotal = sumaTotal + precio[i] * cantidadSeleccionada;
        descuento = sumaTotal * 0.15;
        totalDescuento = sumaTotal - descuento;

        let divSumaTotal = document.getElementById("sumaTotal");
        let divSumaTotalDesc = document.getElementById("sumaTotalDescuento");
        divSumaTotal?.innerHTML = "El precio total es de: $" + sumaTotal;
        divSumaTotalDesc?.innerHTML =
          "El precio total con descuento es de: $" + totalDescuento;
        divCompra.appendChild(productoCompra);

        if (sumaTotal > 0) {
          let btnComprar = document.getElementById("comprar");

          btnComprar.classList.remove("desaparece");
        }
      }
    });
  }

  let btnPagar = document.getElementById("pagar");
  btnPagar.addEventListener("click", () => {
    console.log("El total de su compra es :$" + sumaTotal);
    console.log("El total de su compracon descuento es :$" + totalDescuento);
    console.log("Gracias por su compra");
    let gracias = document.getElementById("gracias");
    gracias?.classList.remove("desaparece");
    gracias?.classList.add("gracias");
    let divSumaTotal = document.getElementById("sumaTotal");
    let divSumaTotalDesc = document.getElementById("sumaTotalDescuento");
    divSumaTotal.classList.add("desaparece");
    divSumaTotalDesc.classList.add("desaparece");
    let divCompra = document.getElementById("compra");
    divCompra.classList.add("desaparece");
    btnPagar?.classList.add("desaparece");
  });
};

cargarProductos();
comprarProductos();
