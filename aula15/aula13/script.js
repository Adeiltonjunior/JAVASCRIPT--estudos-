function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca-m.jpg') // criança
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.jpg') // jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.jpg') // adulto
            } else {
                img.setAttribute('src', 'idoso-m.jpg') // idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca-f.jpg') // criança
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f.jpg') // jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta-f.jpg') // adulto
            } else {
                img.setAttribute('src', 'idosa-f.jpg') // idoso
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // Adiciona a imagem ao resultado
    }
}
