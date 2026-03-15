function verificar() {

    let codigoP = document.getElementById("comand").value.trim()
    const codigo = `Nome = "Maria Eduarda"
Idade = 15

print(Nome)
print(Idade)
`.trim()

    if (
        codigoP == codigo
    ) {

        document.getElementById("result1").innerHTML =
            "Parabéns , seu código está 100% certo!"


    } else if (codigoP.includes("print")
        &&
        codigoP.includes("Nome")
        &&
        codigoP.includes("Idade")) {

        document.getElementById("result1").innerHTML =
            "Seu Código está com a Lógica certa1"

    }else if(!codigoP){
        alert("Por Favor , primeiro coloque um código e depois aperte em Enter!")
    }else {

        document.getElementById("result1").innerHTML =
            "Seu código está errado, apreste mais atenção!"

    }
}

function verificar2() {

    let codigoP = document.getElementById("comand2").value.trim()
    const codigo2 = `Nota = 7

if Nota >= 6:
    print("Aprovado")
else:
    print("Reprovado")

`.trim()

    if (
        codigoP == codigo2
    ) {

        document.getElementById("result2").innerHTML =
            "Parabéns , seu código está 100% certo!"


    } else if (codigoP.includes("print")
        &&
        codigoP.includes("if")
        &&
        codigoP.includes("else")) {

        document.getElementById("result2").innerHTML =
            "Seu Código está com a Lógica certa<br> mas não está 100% certo"

    }else if(!codigoP){
        alert("Por Favor , primeiro coloque um código e depois aperte em Enter!")
    }else {

        document.getElementById("result2").innerHTML =
            "Seu código está errado, apreste mais atenção!"

    }
}

function verificar3() {

    let codigoP = document.getElementById("comand3").value.trim()
    const codigo3 = `Contador = 1

while Contador <= 10:
    print(Contador)
    Contador += 1
`.trim()

    if (
        codigoP == codigo3
    ) {

        document.getElementById("result3").innerHTML =
            "Parabéns , seu código está 100% certo!"


    } else if (codigoP.includes("print")
        &&
        codigoP.includes("Contador")
        &&
        codigoP.includes("while")
       ) {

        document.getElementById("result3").innerHTML =
            "Seu Código está com a Lógica certa<br> mas não está 100% certo"

    }else if(!codigoP){
        alert("Por Favor , primeiro coloque um código e depois aperte em Enter!")
    }else {

        document.getElementById("result3").innerHTML =
            "Seu código está errado, apreste mais atenção!"

    }
}