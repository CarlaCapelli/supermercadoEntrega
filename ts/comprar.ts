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

function cargarProductos() {
  for (let i: number = 0; i < lista.length; i++) {
    let divProducto = document.createElement("div");
    divProducto.classList.add("blanco");
    let nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = lista[i];
    let precioProducto = document.createElement("p");
    precioProducto.innerHTML = precio[i];

    divProducto.appendChild(nombreProducto);
    divProducto.appendChild(precioProducto);
    divElementos.appendChild(divProducto);
  }
}

window.onload = cargarProductos();
