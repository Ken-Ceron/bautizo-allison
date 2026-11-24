const cancion = document.querySelector("#cancion");
const botonMusica = document.querySelector("#boton-musica");
const textoMusica = document.querySelector("#texto-musica");

botonMusica.addEventListener("click", () => {
    if (cancion.paused) {
        cancion.play();
        botonMusica.textContent = "❚❚";
        textoMusica.textContent = "Haz clic para pausar";
    } else {
        cancion.pause();
        botonMusica.textContent = "▶";
        textoMusica.textContent = "Haz clic para reproducir";
    }
});

/// Cuenta Regresiva

const fechaBautizo = new Date("2027-02-13T12:00:00-06:00");

function actualizarContador(){
    const ahora = new Date();
    const diferencia = Math.max(0, fechaBautizo - ahora);
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);

const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

const segundos = Math.floor((diferencia / 1000) % 60);

document.querySelector("#dias").textContent = String(dias).padStart(2, "0");
document.querySelector("#horas").textContent = String(horas).padStart(2, "0");
document.querySelector("#minutos").textContent = String(minutos).padStart(2, "0");
document.querySelector("#segundos").textContent = String(segundos).padStart(2, "0");
}
actualizarContador();
setInterval(actualizarContador, 1000);