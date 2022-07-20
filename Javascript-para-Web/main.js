function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let cont = 0


while (cont < listaDeTeclas.length) {
    listaDeTeclas[cont].onclick = tocaSom

    cont = cont + 1 
}