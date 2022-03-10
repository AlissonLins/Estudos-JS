let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number)(n) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    }else { 
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
    window.alert('Adicione os valores antes de tentar finalizar!')
} else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = [0]
    let media = [0]
    for(let pos in valores){
        soma += valores [pos]
        if(valores[pos]> maior)
        maior = valores[pos]
        if (valores[pos]< menor)
        menor = valores[pos]
    }
    media = soma / tot
   res.innerHTML = ''
   res.innerHTML == `<p>Ao todos, existem ${tot} números cadastrados</p>`
   res.innerHTML == `<p>O maior valor informado foi: ${tot}.</p>`
   res.innerHTML == `<p>O menor valor informado foi: ${tot}.</p>`
   res.innerHTML == `<p>Somando todos os valores, temos: ${tot}.</p>`
   res.innerHTML == `<p>A média dos valores informados é ${tot}.</p>`
  } 
}