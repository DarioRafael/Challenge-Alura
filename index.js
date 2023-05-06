
        let botonEncriptar = document.getElementById("botonEncriptar");
        let botonDesencriptador = document.getElementById("botonDesencriptador");
        const botonCopiar = document.getElementById("botonCopiar");
        let campoTexto = document.getElementById("campoTexto");
        let textoContenedor = document.getElementById("textoContenedor");
        let botonModoOscuro = document.getElementById("botonModoOscuro");
        let palabraEscrita;

        botonModoOscuro.addEventListener("click", function() {
            document.body.classList.toggle("modoOscuro");
        });

        botonEncriptar.addEventListener("click", function () {

            palabraEscrita = campoTexto.value.toLowerCase();
            campoTexto.value = "";
            palabraEscrita = palabraEscrita.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
            textoContenedor.style.display = "block";

            if (palabraEscrita == "") {
                botonCopiar.style.display = "inline-block";
                contenedor.innerHTML = "";
                alert("ERROR: No has dado una palabra para encriptar");


            } else {
                textoContenedor.innerHTML = palabraEscrita;
                contenedor.innerHTML = "";
                botonCopiar.style.display = "block";


            }
            contenedor.appendChild(textoContenedor)
            contenedor.appendChild(botonCopiar);

        });


        botonDesencriptador.addEventListener("click", function () {

            palabraEscrita = campoTexto.value.toLowerCase();
            campoTexto.value = "";
            palabraEscrita = palabraEscrita.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
            textoContenedor.style.display = "block";

            if (palabraEscrita == "") {
                botonCopiar.style.display = "block";
                contenedor.innerHTML = "";
                alert("ERROR: No has dado una palabra para desencriptar");


            } else {
                textoContenedor.innerHTML = palabraEscrita;
                botonCopiar.style.display = "block";


            }
            contenedor.appendChild(textoContenedor)
            contenedor.appendChild(botonCopiar);

        });

        botonCopiar.addEventListener("click", function () {

            if (palabraEscrita == "") {
                alert("No hay nada para copiar...");
            } else {
                navigator.clipboard.writeText(palabraEscrita);
            }

        });



