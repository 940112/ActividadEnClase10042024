console.log("Hola soy la axtividad de hoy 1/04/2024");
const edadInput = document.getElementById("edadInput");
console.log(edadInput);

const mensaje = document.
    getElementById("mensajeEdad");
console.log(mensaje);




function verificarEdad() {
    console.log("entro a mi funcion verificar edad");


    let edad = edadInput.value;
    console.log(edad);



    if (edad >= 18) {
        console.log("Eres mayor de edad");
        mensaje.textContent = "Eres mayor de edad";

    } else {
        console.log("Eres menor de edad");

        mensaje.textContent = "Eres menor de edad";
    }




}
