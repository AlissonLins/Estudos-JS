function contar() {
    var início = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var resultado = document.getElementById('resultado')

    if (início.value.length == 0 || fim.value.length ==0 || passo.value.length ==0) {
        resultado.innerHTML = 'Impossível Contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else{
        resultado.innerHTML = "Contando: <br>"
        var i = Number(início.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1 
        }
        if (início < fim)
        // Contagem Crescente
            for(var c = i; c <= f; c +=p) {
            resultado.innerHTML += ` ${c} \u{1F449} ` 
        }
    } else {
        // Contagem Regressiva
        for(var c = i; c <= f; c += p) {
            resultado.innerHTML += `${c} \u{1F449}`
         }
        }
    }
    resultado.innerHTML += ` \u{1F3c1}`
}