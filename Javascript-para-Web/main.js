function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')

/*while (cont < listaDeTeclas.length) {

    const tecla = listaDeTeclas[cont]

    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}` 


    tecla.onclick = function(){ //função anonima
        tocaSom(idAudio)
    }
    cont = cont + 1 
}
*/

for(let cont = 0; cont < listaDeTeclas.length; cont++){
    const tecla = listaDeTeclas[cont]

    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}` 


    tecla.onclick = function(){ //função anonima
        tocaSom(idAudio)
    }
    tecla.onkeydown = function(){ //tecla pressionada coloca a class ativa ao elemento
        tecla.classList.add('ativa')
    }
    tecla.onkeyup = function(){ // inverso de onkeydown
        tecla.classList.remove('ativa')
    }
}