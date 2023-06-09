const textArea = document.querySelector(".textArea");
const mensagem =  document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
//console.table(matrizCodigo);

function btnEncriptar() {

    const textoEncriptado = encriptar(textArea.value);

    mensagem.value = textoEncriptado;

    textArea.value = "";
    
}

function encriptar (stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    
    stringEncriptada = stringEncriptada;

   for (let i = 0; i < matrizCodigo.length; i++) {
        
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
        
    }
    return stringEncriptada;
}




function btnDesencriptar() {

    const textoDesencriptado = desencriptar(textArea.value);

    mensagem.value = textoDesencriptado;

    textArea.value = "";
    
}

function desencriptar (stringDesencriptada) {

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringDesencriptada = stringDesencriptada;

    for (let i = 0; i < matrizCodigo.length; i++) {
        
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
        
    }
    return stringDesencriptada;
}


function copiar() {
    var copiado = document.getElementById("texto-copiar").value;
    navigator.clipboard.writeText(copiado);
    //console.log(copiado);
    alert("Texto copiado!");
}

