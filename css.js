function verificar() {

    let codigoP = document.getElementById("comand").value.trim()
    const codigo = `
<details>
<summary>
text-btn
</summary>
<ol>
<li>
lista1
</li>
</ol>
</details>
`.trim()

    if (
        codigoP == codigo
    ) {

        document.getElementById("result1").innerHTML =
            "Parabéns , seu código está 100% certo!"


    } else if (codigoP.includes("<h1>")
        &&
        codigoP.includes("</h1>")
        &&
        codigoP.includes("<p>")
        &&
        codigoP.includes("</p>")
        &&
        codigoP.includes("<h2>")
        &&
        codigoP.includes("</h2>")
    ) {

        document.getElementById("result1").innerHTML =
            "Seu Código está com a Lógica certa1"

    } else if (!codigoP) {
        alert("Por Favor , primeiro coloque um código e depois aperte em Enter!")
    } else {

        document.getElementById("result1").innerHTML =
            "Seu código está errado, apreste mais atenção!"

    }
}




function verificar2() {

    let codigoP = document.getElementById("comand2").value.trim()
    const codigo2 = `
<input type="text" name="nome"
placeholder="Diga seu Nome">

<input type="number" name="nome"
placeholder="Diga sua Idade">
`.trim()

    if (
        codigoP == codigo2
    ) {

        document.getElementById("result2").innerHTML =
            "Parabéns , seu código está 100% certo!"


    } else if (codigoP.includes("input")
        &&
        codigoP.includes("placeholder")
        &&
        codigoP.includes("type=")) {

        document.getElementById("result2").innerHTML =
            "Seu Código está com a Lógica certa<br> mas não está 100% certo"

    } else if (!codigoP) {
        alert("Por Favor , primeiro coloque um código e depois aperte em Enter!")
    } else {

        document.getElementById("result2").innerHTML =
            "Seu código está errado, apreste mais atenção!"

    }
}

function verificar3() {

    let codigoP = document.getElementById("comand3").value.trim()
    const codigo3 = ` <p>
<h1>Titulo</h1>
<h2>sub Titulo</h1>

texto

</p>
`.trim()

    if (
        codigoP == codigo3
    ) {

        document.getElementById("result3").innerHTML =
            "Parabéns , seu código está 100% certo!"


    } else if (codigoP.includes("<h1>Titulo</h1>")
        &&
        codigoP.includes("<h2>sub Titulo</h1>")
        &&
        codigoP.includes("texto")
    ) {

        document.getElementById("result3").innerHTML =
            "Seu Código está com a Lógica certa<br> mas não está 100% certo"

    } else if (!codigoP) {
        alert("Por Favor , primeiro coloque um código e depois aperte em Enter!")
    } else {

        document.getElementById("result3").innerHTML =
            "Seu código está errado, apreste mais atenção!"

    }
}

