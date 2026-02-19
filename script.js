function login() {
    let name = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);


    let result = document.getElementById("result2");

    if (idade <= 65 && idade >= 18) {

        result.innerHTML = `Falaa ai ${name} Bora Aprender? <br> você está na área de aprendizado da "DevTask" <br> Abaixo temos mais informações sobre. <br> Para selecionar seu curso  apenas clique em aprender <br>na parte do seu curso denominado. `;
        document.getElementById("result1").innerHTML = "Dados Confirmados";
        document.body.style.overflow = "auto";


    } else if ((!name && !idade) || (idade && !name)) {
        document.body.style.overflow = "hidden";
        alert("Falaa ai meu amigo , Peço que coloque os dados completos para liberar os conteudos!");

    } else if (idade < 18 && idade > 10) {

        result.innerHTML = `Fala Gafanhotinho!! pronto para começar sua jornada? <br> Você está na parte de aprender da "DevTask" <br> se quiser ver mais sobre , só ver ai no "Curso da DevTask"`;
        document.getElementById("result1").innerHTML =
            "Dados confirmados Pequeno Gafanhoto !!";
        document.body.style.overflow = "auto";


    } else {
        document.body.style.overflow = "hidden";
        alert("Cara coloque seus dados VERDADEIROS!");

    }





}
let c = 1

while (c <= 10) {
    console.log(c)
    c++

}

do {

    let c = 1
    console.log(c)
    c++
} while (c <= 10)