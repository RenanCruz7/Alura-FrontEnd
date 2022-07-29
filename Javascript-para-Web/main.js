function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio)

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play()
    }
    else{
        alert('Elemento nao encontrado')
    }
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

    tecla.onkeydown = function(evento){ //tecla pressionada coloca a class ativa ao elemento
        console.log(evento.code)
        if (evento.code == 'Space' ||  evento.code == "Enter"){
        tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function(){ // inverso de onkeydown
        tecla.classList.remove('ativa')
    }
}