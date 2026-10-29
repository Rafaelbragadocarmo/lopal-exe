// senha
// alert("Wifi da Padaria")
// const PASSWORD = "pao123"
// let attempts = 0


// while (attempts < 3) {
//     let enter_password = prompt("coloque a senha")
//     if (enter_password == PASSWORD) {
//         alert("conectado, bom café!")
//         break


//     }else alert("errou otario")
       
//     attempts++
// }
//
// ano novo
// let count = 10
// while (count > -1) {
//     if (count === 0) {
//         alert("feliz ano novo!")
//         console.log("feliz ano novo")
//         break
//     }else
//     alert(count,"!")
//     console.log(count)
//     count--
// }
//
// cofrinho do Pedro
// const ENOUGH = 300
// let money = 0
// let time = 0


// while (money < ENOUGH) {
//     let add = Number(prompt("quanto dinheiro tu ganhou"))


//     if (add > 0) {
//     money += add


//     let remain = ENOUGH - money


//     alert(`falta ${remain}`)
   
//     time++


// }else


// alert("para de trollar a gente")
// }
//     alert(`você tem ${money} que é dinheiro suficiente, demorou ${time} semanas`)


//jogo
const NUM = 25
var guess = Number(prompt("Qual é o chute?"))
console.log(NUM)
while (guess != NUM) {
console.log(guess)
 if (guess < 1){
    var guess = Number(prompt("é entre 1 e 50 animal, chuta de novo"))
}
 else if (guess > 50 ) {
    var guess = Number(prompt("é entre 1 e 50 animal, chuta de novo"))
}
 else if (guess < NUM) {
    var guess = Number(prompt("Errou muito baixo, chuta de novo"))

 }else
    var guess = Number(prompt("Errou muita alta, chuta denovo"))
}
alert(`você acertou pege suas ${NUM} balas!`)
console.log(guess)
