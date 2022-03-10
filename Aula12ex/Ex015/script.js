function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length ==0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'Bebê-M.png' )
            } else if (idade < 20) {
                // Joven
                img.setAttribute('src', 'Jovem-M.png' )
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'Adulto-M.png' )
            } else if {
                // Idoso
                img.setAttribute('src', 'Idoso-M.png' )
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'Bebê-F.png' )
            } else if (idade < 20) {
                // Joven
                img.setAttribute('src', 'Jovem-F.png' )
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'Adulto-F.png' )
            } else if {
                // Idoso
                img.setAttribute('src', 'Idoso-F.png' )
            }
        }
        res.Style.TextAlign = 'Center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}