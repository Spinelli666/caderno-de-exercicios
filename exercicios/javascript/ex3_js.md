### Arquivo HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Super Contador</title>
    <link rel="stylesheet" href="style_ex03.css">
</head>
<body>
    <header>
        <h1>Vamos contar</h1>
    </header>
    <section>
        <div id="dados">
            <p>Início: <input type="number" name="inicio" id="txti"></p>
            <p>Fim: <input type="number" name="fim" id="txtf"></p>
            <p>Passo: <input type="number" name="passo" id="txtp"></p>
            <p><input type="button" value="Contar" onclick="contar()"></p>
        </div>
        <div id="res">
            Preparando a contagem...
        </div>
    </section>
    <footer>
        <p>&copy; CursoemVideo</p>
    </footer>
    <script src="script_ex03.js"></script>
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
function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
```