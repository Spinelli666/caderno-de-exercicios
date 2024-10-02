### Arquivo HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabuada</title>
    <link rel="stylesheet" href="style_ex04.css">
</head>
<body>
    <header>
        <h1>Tabuada</h1>
    </header>
    <section>
        <div id="dados">
            <p>Número: <input type="number" name="num" id="txtn"></p>
            <input type="button" value="Gerar Tabuada" onclick="tabuada()">
        </div>
        <div>
            <select name="tabuada" id="seltab" size="10">
                
            </select>
        </div>
    </section>
    <footer>
        <p>&copy; CursoemVideo</p>
    </footer>
    <script src="script_ex04.js"></script>
</body>
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
function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
```