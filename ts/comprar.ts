let alfajor = document.createElement("img");
alfajor.src = "./alfajor.jpg";
alfajor?.classList.add("fotoProd");
let yerba = document.createElement("img");
yerba.src = "yerba.jpg";
yerba?.classList.add("fotoProd");
let mayonesa = document.createElement("img");
mayonesa.src = "mayonesa.jpg";
mayonesa?.classList.add("fotoProd");
let cafe = document.createElement("img");
cafe.src = "cafe.jpg";
cafe?.classList.add("fotoProd");
let coca = document.createElement("img");
coca.src = "coca.jpg";
coca?.classList.add("fotoProd");
let harina = document.createElement("img");
harina.src = "harina.jpg";
harina?.classList.add("fotoProd");
let fotos: any[] = [mayonesa, cafe, alfajor, harina, yerba, coca];
let boton1 = document.createElement("button");
boton1.innerText = "Agregar";
let boton2 = document.createElement("button");
boton2.innerText = "Agregar";
let boton3 = document.createElement("button");
boton3.innerText = "Agregar";
let boton4 = document.createElement("button");
boton4.innerText = "Agregar";
let boton5 = document.createElement("button");
boton5.innerText = "Agregar";
let boton6 = document.createElement("button");
boton6.innerText = "Agregar";
let btnComprar = document.getElementById("comprar");
let botones: any[] = [boton1, boton2, boton3, boton4, boton5, boton6];

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
let divProducto = document.getElementById("productos");
divProducto?.classList.add("itemProducto");
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
    let btns = document.createElement("button");

    btns = botones[i];

    divElementos.appendChild(divProducto);
    divProducto.appendChild(imgs);
    divProducto.appendChild(nombreProducto);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(digaCantidad);
    divProducto.appendChild(cantidad);
    divProducto.appendChild(btns);
  }
};

function comprarProductos(): void {
  let sumaTotal: number = 0;
  let descuento: number = 0;
  let totalDescuento: number = 0;
  for (let i: number = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
      let suma: number = 0;
      let cantidad = document.getElementById("cantidad" + [i]);
      let cantidadSeleccionada = Number(cantidad.value);

      if (cantidadSeleccionada < 0 || cantidadSeleccionada > stock[i]) {
        alert("no contamos con la cantidad seleccionada");
      } else {
        suma = suma + precio[i] * cantidadSeleccionada;
        console.log(
          "agrego " + cantidadSeleccionada + " unidad/es de " + lista[i],
          "el precio unitario es $" + precio[i]
        );
        console.log(" la suma total de " + lista[i] + " es de $" + suma);
        let divCompra = document.getElementById("compra");

        divCompra.classList.add("naranja");

        let productoCompra = document.createElement("p");
        productoCompra.innerHTML =
          "Producto: " +
          lista[i] +
          " Precio unitario: $" +
          precio[i] +
          " Cantidad: " +
          cantidadSeleccionada +
          " Precio total: $" +
          suma;
        sumaTotal = sumaTotal + precio[i] * cantidadSeleccionada;
        descuento = sumaTotal * 0.15;
        totalDescuento = sumaTotal - descuento;
        console.log(descuento);
        console.log(totalDescuento);
        //console.log(sumaTotal);
        let divSumaTotal = document.getElementById("sumaTotal");
        divSumaTotal?.innerHTML = "El precio total es de: $" + sumaTotal;
        divCompra.appendChild(productoCompra);
      }
    });
  }
}

window.onload = cargarProductos();
window.onload = comprarProductos();
