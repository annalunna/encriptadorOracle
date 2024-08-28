const textArea = document.querySelector(".texto_usuario");
const mensaje = document.querySelector(".mensaje");
const dibujo = document.querySelector(".contenedor_dibujo");
const parrafo =document.querySelector(".contenedor_parrafo");
const btnCopiar = document.querySelector(".bt_copiar");

/* La letra "e" es convertida para "enter"
   La letra "i" es convertida para "imes"
   La letra "a" es convertida para "ai"
   La letra "o" es convertida para "ober"
   La letra "u" es convertida para "ufat" */

   function btEncriptar(){
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado;
        textArea.value = "";
        dibujo.remove();
        parrafo.remove();
        btnCopiar.style.display="block";

   }

   function encriptar(stringEncriptado){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptado = stringEncriptado.toLowerCase();

        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptado.includes(matrizCodigo[i][0])){
                stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }

        }
        return stringEncriptado;
   }


   function btDesencriptar(){
        const textoEncriptado = desencriptar(textArea.value)
        mensaje.value = textoEncriptado;
        textArea.value = "";
    
   }

   function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

         for(let i = 0; i < matrizCodigo.length; i++){
             if(stringDesencriptado.includes(matrizCodigo[i][1])){
                stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
             }
        }
         return stringDesencriptado;
   }

   function btCopiar(){
        const textoCopiar = copiar(mensaje.value);
        textArea.value = textoCopiar;
        mensaje.value = "";
}

   function copiar(textoCopiado) {
      var texto = document.getElementById("texto_encriptado").value; 
      navigator.clipboard.writeText(texto).then(function () {
      textoCopiado = document.getElementById("texto")
      textoCopiado.textContent = texto;
    }).catch(function (err) {
      texto.textContent = 'Error al copiar texto: ' + err;
    });
    return textoCopiado;

  }
  
   