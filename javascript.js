









/*

                    //array[]

        //Declaração de array
let arr = ["maria","pedro","paulo"]
        //Add ao final do array 
arr.push("roberto")
        //Add ao inicio
arr.unshift("ana")
        //tira o ultimo registro
arr.pop()
        //Tira o primeiro registro
arr.shift()
        //Deleta a posição de array desejado deixando vazio
delete arr[1]
console.log(arr)

                    //.math

let nunber = 32.213;
        //Converte para intero menor
console.log(Math.floor(nunber))
        //Converte para inteiro mair
console.log(Math.ceil(nunber))
        //Aredonda o numero para o maior float
console.log(Math.round(nunber))
        //Pega o maior valor
console.log(Math.max(123,123123,21434,234,34432,56,4564754))
        //Pega o menor valor
console.log(Math.min(12,3.43,324,2312,2))
        // Pega um valor random
console.log(parseFloat(Math.random(12,102)))

                    //toString()

let nunber = 123.32;
        //converte uma variavel para string
console.log(nunber.toString() + 12)
        //Retorna o type do obj
console.log(typeof nunber)
        //Determina a quantidade de cassas descimais
console.log(nunber.toFixed(1))
        //Valida se é um numero inteiro
console.log(Number.isInteger(nunber))
        //Validade se é um isNaN
console.log(Number.isNaN(nunber))

                    //inderHTML

let nome = prompt("Digite seu nome")
        //Joga no html
document.body.innerHTML = `<p style="background: red; ">${nome}</p>`

                   // formatação de string

let texto = "O rato roeo a ropa do rei de roma"

        //Coloca aspas no texto 
console.log("\" texto \" ")
        //Acha o valor da string da posição dezejada
console.log(texto.charAt(4))
        //concatena as string
console.log(texto.concat(" A rainha com raiva roeu o resto "))
console.log(`texto  ${texto} texto`)
        // acha aposição das strings  lastIndexOf faz o mesmo so que de trais para frente
console.log(texto.indexOf("roeo"))
console.log(texto.lastIndexOf("rei"))
        //Converte os valores das string
console.log(texto.replace("rato","mato"))
        //Acha o tamanho da string
console.log(texto.length)
        //Da inicia e fim da string
console.log(texto.slice(3,9))
        //Separa a string em um vetor com o caracter dezejado como padrão de inicio e fim 
console.log(texto.split(" "))
        //Converte string para minusculo
console.log(texto.toLocaleLowerCase())
        //Converte a string para maiuscula
console.log(texto.toLocaleUpperCase())

                   // modal alert

        //window.prompt() = declara um alert com input de tipo de texto 
        //comfim() = declara um alert com 2 opção de check retornando true ou false 

let n1 = window.prompt("Digite um numero")
let n2 = window.prompt("Digite o segundo numero")

            // parseFloat() = converte para int
            // Number() = Tbm faz essa conversão 

n1=parseFloat(n1)
n2=parseFloat(n2)

let n3 = n1 +n2

console.log(n3)

                    //log do console

console.log("Olá")

*/