let nombre = document.getElementById("name");
let correo = document.getElementById("mail");
let consulta = document.getElementById("msg");
let boton = document.getElementById("enviar");

let enviarConsulta = () => {
  boton.addEventListener("click", () => {
    let gracias = document.createElement("p");
    gracias.classList.add("gracias");
    let nom = nombre.value;
    let cor: string = correo.value;
    let con: string = consulta.value;
    console.log("Su nombre es : " + nom);
    console.log("Su correo es : " + cor);
    console.log("Su consulta es : " + con);
    alert("Gracias " + nom + " por su consulta");
    console.log("Gracias " + nom + " por su consulta");
    let resete = document.getElementById("form");
    resete.reset();
  });
};

enviarConsulta();
