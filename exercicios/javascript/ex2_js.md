### Arquivo HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificador de Idade</title>
    <link rel="stylesheet" href="style_ex02.css">
</head>
<body>
    <header>
        <h1>Verificador de Idade</h1>
    </header>
    <section>
        <div>
            <p>Ano de Nascimento: 
                <input type="number" name="ano" id="ano" min="1">
            </p>
            <p>Sexo:
                <input type="radio" name="radsex" id="masc" checked>
                <label for="masc">Masculino</label>
                <input type="radio" name="radsex" id="fem">
                <label for="fem">Feminino</label>
            </p>
            <p>
                <input type="button" value="Verificar" onclick="verificar()">
            </p>
        </div>
        <div id="res">
            Preencha os dados acima para ver o resultado!
        </div>
    </section>
    <footer>
        <p>&copy; CursoemVideo</p>
    </footer>
    <script src="script_ex02.js"></script>
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
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
```