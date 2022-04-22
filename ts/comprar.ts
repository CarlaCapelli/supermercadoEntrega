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
function cargarProductos() {
  for (let i: number = 0; i < lista.length; i++) {
    let divProducto = document.createElement("div");
    divProducto.classList.add("blanco");
    let imgs = document.createElement("img");
    imgs = fotos[i];
    let nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = lista[i];
    let precioProducto = document.createElement("p");
    precioProducto.innerHTML = "$" + precio[i];

    let cantidad = document.createElement("input");
    cantidad.type = "number";
    cantidad.max = String(stock[i]);
    cantidad.min = "0";

    divProducto.appendChild(imgs);
    divProducto.appendChild(nombreProducto);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(cantidad);
    divElementos.appendChild(divProducto);
  }
}

window.onload = cargarProductos();
