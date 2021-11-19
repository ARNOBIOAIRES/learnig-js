/*  
descomente para ver o código
explicação até a linha 70



// function declaration
//hosting = içamento, puxar para cima em function declaration

function sayHi ()  {
    console.log('oi')
}


// function expression

const showFood = function () {
  console.log("pizza")
}

sayHi()
sayHi()

showFood()
showFood()
showFood()


// Argumentos, parâmetros e default parâmetros
//atribuindo parâmetros default (name = 'estroncio')

const myFunc = function (name, lastName) {
  console.log(`Oi, ${name} ${lastName}`)
}

myFunc('Arnobio', 'Aires')





//função retornar um valor, obter o resultado

const double = function (number) {
  const doubleResult = number * 2
  return doubleResult
}
const result = double(6)
console.log(result)

// a função double pode ser simplificada, usando apenas o return
//sem criar uma constante, conforme abaixo:

const double2 = function (number) {
  return number *2
}
const result2 = double2(100)
console.log(result2)

//o parametro value pode receber um valor resultante de uma outra 
//função, desde que esteja armazenado em uma variável
//nesse exemplo o parametro value, foi preenchido com a variável result2

const showResult = function (value) {
  return `O resultado é: ${value}`
  }
  console.log(showResult(result2))


*/








/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
/* 
function multiplay (firstNumber = 0, secondNumber = 0) {
  return `O resultado da multiplicação entre o numbero1 e o numbero2 é: ${firstNumber * secondNumber}`

}
const result = multiplay(5, 10)
console.log(result) */

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/
/* 
const division = function (firstNumber = 0, secondNumber = 0) {
  return `O resultado da divisão entre o numbero1 e o numbero2 é: ${firstNumber / secondNumber}`

}

const resultDiv = division(500, 2)
console.log(resultDiv) */


/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função não receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/

/* function showMessage (value = 'passe um valor como argumento') {
  console.log(value)
}

for (let i = 0; i < 7; i++) {
  showMessage( `Esta é a ${i + 1}ª vez que essa string é exibida.`) 

} */


//a versão abaixo é mais didática
/* 

function showMessage (value = 'passe um valor como argumento') {
  return value
}


for (let i = 0; i < 7; i++) {
  let counter = i + 1
 console.log(showMessage( `Esta é a ${counter}ª vez que essa string é exibida.`))

} */


/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/


/* 

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']


const transformToUpperCase = function(array = []) {
  let newArray = []

  for(let i = 0; i < array.length; i++) {
    newArray.push(array[i].toUpperCase())
  }
return newArray

}

const show = transformToUpperCase(millennialWords)
console.log(show)

 */





/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

/* const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]

let PositiveNumber = 0
let NegativeNumber = 0


const isPositiveNumber = function(number = 0) {
  return number >= 1
}


for (let i = 0; i < randomNumbers.length; i++) 

{
  if (isPositiveNumber(randomNumbers[i])) {
    PositiveNumber++
  } else {
    NegativeNumber++
  }
}




const newResult2 =  `O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${PositiveNumber}  positivos e ${NegativeNumber}  negativos."`

console.log(newResult2) 



 */
/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/
/* 
const oddNumber = [83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42, 101, 102]



const getOddNumbers = function (numbers = []) {
  let newArray = []

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 !== 0) {
      newArray.push(numbers[i])
    }
  
  }
  return newArray
}

console.log(getOddNumbers(oddNumber))
 */
 

  //- Forme uma frase com o array abaixo e exiba-a no console.

const arrayTheFunctions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]

// Obsevarção interessante: Na resolução deste exercício, não criamos uma função, apenas invocamos todas as funções contidas no array.
// Referenciando os dois parenteses (), junto com a iteração do indice do array [i], ficando [i]().
let sentence = ''

for (let i = 0; i < arrayTheFunctions.length; i++) {
  sentence += `${arrayTheFunctions[i]()} ` /// duas observações importantes: a função está sendo chamada dentro do for, e outra coisa legal,
                                          /// dentro da interpolação um espaço, para separar as palavras   que as funções retornam
}
console.log(sentence)  