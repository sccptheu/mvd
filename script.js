
document.getElementById("revelarCarta").addEventListener("click", function () {
    const carta = document.getElementById("cartaTexto");
    const texto = "Eu te amo muito, meu amor.\nCriei esse site exclusivamente para você,\nEntão você pode dizer que tem um site só seu na internet.\nEu te amooo!";
    let i = 0;
    carta.style.display = "block";
    const p = document.getElementById("textoDigitado");
    p.innerHTML = "";

    const intervalo = setInterval(() => {
        if (i < texto.length) {
            p.innerHTML += texto[i] === "\n" ? "<br>" : texto[i];
            i++;
        } else {
            clearInterval(intervalo);
        }
    }, 50);
});
