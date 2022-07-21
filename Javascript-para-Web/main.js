function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let cont = 0


while (cont < listaDeTeclas.length) {

    const tecla = listaDeTeclas[cont]

    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}` 


    tecla.onclick = function(){ //função anonima
        tocaSom(idAudio)
    }
    cont = cont + 1 
}