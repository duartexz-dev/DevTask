
let vidas = 3

function certo1() {
    let bodyB1 = document.getElementById("btn-certo1")
    let resposta1 = document.getElementById("res1")
    let bodyB2 = document.getElementById("btn-errado2")

    bodyB1.style.backgroundColor = "lime"
    bodyB1.style.color = "black"
    resposta1.innerHTML = "Acertouu!"
    bodyB2.style.backgroundColor = "red"
    bodyB2.style.color = "white"

}
function errado1() {
    let bodyB2 = document.getElementById("btn-errado2")
    let resposta1 = document.getElementById("res1")
    let bodyB1 = document.getElementById("btn-certo1")

    bodyB2.style.backgroundColor = "red"
    bodyB2.style.color = "white"
    resposta1.innerHTML = "Errouu!"
    bodyB1.style.backgroundColor = "lime"
    bodyB1.style.color = "black"

    vidas--
    vidasWin()

}
function certo2() {
    let bodyB1 = document.getElementById("btn-certo3")
    let resposta1 = document.getElementById("res2")
    let bodyB2 = document.getElementById("btn-errado4")

    bodyB1.style.backgroundColor = "lime"
    bodyB1.style.color = "black"
    resposta1.innerHTML = "Acertouu!"
    bodyB2.style.backgroundColor = "red"
    bodyB2.style.color = "white"

}
function errado2() {
    let bodyB2 = document.getElementById("btn-errado4")
    let resposta1 = document.getElementById("res2")
    let bodyB1 = document.getElementById("btn-certo3")

    bodyB2.style.backgroundColor = "red"
    bodyB2.style.color = "white"
    resposta1.innerHTML = "Errouu!"
    bodyB1.style.backgroundColor = "lime"
    bodyB1.style.color = "black"

    vidas--
    vidasWin()

}
function certo3() {
    let bodyB2 = document.getElementById("btn-errado5")
    let resposta1 = document.getElementById("res3")
    let bodyB1 = document.getElementById("btn-certo6")

    bodyB1.style.backgroundColor = "lime"
    bodyB2.style.color = "black"
    resposta1.innerHTML = "Acertouu!"
    bodyB2.style.backgroundColor = "red"
    bodyB2.style.color = "white"

}
function errado3() {
    let bodyB2 = document.getElementById("btn-errado5")
    let resposta1 = document.getElementById("res3")
    let bodyB1 = document.getElementById("btn-certo6")

    bodyB2.style.backgroundColor = "red"
    bodyB2.style.color = "white"
    resposta1.innerHTML = "Errouu!"
    bodyB1.style.backgroundColor = "lime"
    bodyB1.style.color = "black"

    vidas--
    vidasWin()

}
function certo4() {
    let bodyB1 = document.getElementById("btn-certo7")
    let resposta1 = document.getElementById("res4")
    let bodyB2 = document.getElementById("btn-errado8")

    bodyB1.style.backgroundColor = "lime"
    bodyB1.style.color = "black"
    resposta1.innerHTML = "Acertouu!"
    bodyB2.style.backgroundColor = "red"
    bodyB2.style.color = "white"

}
function errado4() {
    let bodyB2 = document.getElementById("btn-errado8")
    let resposta1 = document.getElementById("res4")
    let bodyB1 = document.getElementById("btn-certo7")

    bodyB2.style.backgroundColor = "red"
    bodyB2.style.color = "white"
    resposta1.innerHTML = "Errouu!"
    bodyB1.style.backgroundColor = "lime"
    bodyB1.style.color = "black"

    vidas--
    vidasWin()


}
function certo5() {
    let bodyB1 = document.getElementById("btn-certo9")
    let resposta1 = document.getElementById("res5")
    let bodyB2 = document.getElementById("btn-errado10")

    bodyB1.style.backgroundColor = "lime"
    bodyB1.style.color = "black"
    resposta1.innerHTML = "Acertouu!"
    bodyB2.style.backgroundColor = "red"
    bodyB2.style.color = "white"




}
function errado5() {
    let bodyB2 = document.getElementById("btn-errado10")
    let resposta1 = document.getElementById("res5")
    let bodyB1 = document.getElementById("btn-certo9")

    bodyB2.style.backgroundColor = "red"
    bodyB2.style.color = "white"
    resposta1.innerHTML = "Errouu!"
    bodyB1.style.backgroundColor = "lime"
    bodyB1.style.color = "black"
    vidas--
    vidasWin()


}
function certo6() {
    let bodyB2 = document.getElementById("btn-errado11")
    let resposta1 = document.getElementById("res6")
    let bodyB1 = document.getElementById("btn-certo12")

    bodyB1.style.backgroundColor = "lime"
    bodyB2.style.color = "black"
    resposta1.innerHTML = "Acertouu!"
    bodyB2.style.backgroundColor = "red"
    bodyB2.style.color = "white"

}
function errado6() {
    let bodyB2 = document.getElementById("btn-errado11")
    let resposta1 = document.getElementById("res6")
    let bodyB1 = document.getElementById("btn-certo12")

    bodyB2.style.backgroundColor = "red"
    bodyB2.style.color = "white"
    resposta1.innerHTML = "Errouu!"
    bodyB1.style.backgroundColor = "lime"
    bodyB1.style.color = "black"

    vidas--
    vidasWin()




}

//O sistema de vidas eu tive a ideia e a estrutura, o CHAT melhorou//

function vidasWin() {
    let res = document.getElementById("result")
    //abaixo tem uma linha de código feita com ia//
    let overlay = document.getElementById("overlay")


    if (vidas > 0 && vidas < 3) {
        res.innerHTML = `Parabéns você ganhou com ${vidas} vidas`
    } else if (vidas === 3) {
        res.innerHTML = `Parabéns!!!, você ganhou invicto com <br> ${vidas} vidas , você ja pode ir para o próximo nivel!!!`
    } else {
        res.innerHTML = "💀 Estude mais ."

        //abaixo tem um código feito 100% com IA//
        overlay.classList.add("active")
    }
}

