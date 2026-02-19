function verificar() {

    let codigoP = document.getElementById("comand").value.trim()
    const codigo = `let Name = "Amanda"
let Idade = 18

console.log(Name)
console.log(Idade)

`.trim()

    if (
        codigoP == codigo
    ) {

        document.getElementById("result1").innerHTML =
            "Parabéns , seu código está 100% certo!"


    } else if (codigoP.includes("console.log")
        &&
        codigoP.includes("Name")
        &&
        codigoP.includes("Idade")) {

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
    const codigo2 = `let Nota = 7
if(Nota >= 6){
console.log("Aprovado")
}else{
console.log("Reprovado")
}

`.trim()

    if (
        codigoP == codigo2
    ) {

        document.getElementById("result2").innerHTML =
            "Parabéns , seu código está 100% certo!"


    } else if (codigoP.includes("console.log")
        &&
        codigoP.includes("if")
        &&
        codigoP.includes("else")) {

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
    const codigo3 = ` let Contador = 1
while(Contador <= 10){
console.log(Contador)
Contador++
}
`.trim()

    if (
        codigoP == codigo3
    ) {

        document.getElementById("result3").innerHTML =
            "Parabéns , seu código está 100% certo!"


    } else if (codigoP.includes("console.log")
        &&
        codigoP.includes("Contador")
        &&
        codigoP.includes("while")
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


