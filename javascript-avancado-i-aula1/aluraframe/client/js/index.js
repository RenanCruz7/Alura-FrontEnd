var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

var tbody = document.querySelector('table tbody')

document.querySelector('.form').addEventListener('submit', function(event){ // adiciono um evento quando é feito o envio dos dados
    
    event.preventDefault() // previne que a pagina seja recarregada após o envio dos dados
    var tr = document.createElement('tr')

    campos.forEach(function(campo){ // neste trecho de codigo é executado uma iteração sobre os valores de campos 
        var td = document.createElement('td')
        td.textContent = campo.value // e é onde se cria a nossa tabela dinamicamente 
        tr.appendChild(td)
    })
    var tdVolume = document.createElement('td') // criação da celula do volume
    tdVolume.textContent = campos[1].value * campos[2].value 

    tr.appendChild(tdVolume)

    tbody.appendChild(tr) // adicionando a nossa tr ao nosso tbody no HTML

    campos[0].value = ''
    campos[1].value = 1
    campos[2].value = 0

    campos[0].focus()
})