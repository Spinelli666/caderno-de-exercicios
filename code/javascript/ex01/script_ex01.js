function carregar() {
    var msg = document.querySelector('#msg')
    var f = document.querySelector('#frase')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        f.innerHTML = 'Bom dia!'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        f.innerHTML = 'Boa tarde!'
        document.body.style.background = '#b9846f'
    } else {
        f.innerHTML = 'Boa noite!'
        document.body.style.background = '#515154'
    }
}