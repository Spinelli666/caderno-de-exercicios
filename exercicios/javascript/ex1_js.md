### Arquivo HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horas do Dia</title>
    <link rel="stylesheet" href="style_ex01.css">
</head>
<body onload="carregar()">
    <header>
        <h1>Hora do Dia</h1>
    </header>
    <section>
        <div id="msg">
            Testando...
        </div>
        <div id="msg1">
            <p id="frase">Frase do Dia</p>
        </div>
    </section>
    <footer>
        <p>&copy; CursoemVideo</p>
    </footer>
    <script src="script_ex01.js"></script>
</body>
</html>
```

### Arquivo CSS

```css
body {
    background: rgb(70,142,236);
    font: normal 15pt Arial;
}

header {
    color: white;
    text-align: center;
}

section {
    background: white;
    border-radius: 10px;
    padding: 15px;
    width: 500px;
    margin: auto;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.363);
}

div {
    text-align: center;
    padding: 5px;
}

footer {
    color: white;
    text-align: center;
    font-style: italic;
}
```

### Arquivo JS

```js
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
```