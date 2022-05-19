// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não divisível por 3 ou 5 => ebtrada
// Não é um numero => 'Nã'é um número'

const resultado = fizzBuzz();
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada === 'number') {
        if ((entrada % 3 === 0) && (entrada % 5 === 0)) {
            console.log('FizzBuzz')
        }
        else if (entrada % 3 === 0) {
            console.log('Fizz')
        }
        else if (entrada % 5 === 0) {
            console.log('Buzz')
        }
    }
    else {
        console.log('Não é um número')
    }
}