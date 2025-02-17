//Exercício 1: Arrow Function com um parâmetro
javascript
Copiar
const dobro = x => x * 2;
console.log(dobro(7));  // 14
console.log(dobro(15)); // 

//Exercício 2: Arrow Function com múltiplos parâmetros
javascript
Copiar
const dividir = (a, b) => a / b;
console.log(dividir(10, 2));  // 5
console.log(dividir(9, 3));   // 

//Exercício 3: Arrow Function com múltiplas linhas
javascript
Copiar
const mensagemBoasVindas = nome => {
    return `Seja bem-vindo, ${nome}!`;
};
console.log(mensagemBoasVindas("Carlos")); // "Seja bem-vindo, Carlos!"
console.log(mensagemBoasVindas("Ana"));    // "Seja bem-vindo, Ana!"


//Exercício 4: Higher-Order Function personalizada
javascript
Copiar
const executarOperacao = (a, b, operacao) => operacao(a, b);

console.log(executarOperacao(6, 3, (a, b) => a - b));  // 3
console.log(executarOperacao(4, 5, (a, b) => a * b));  // 

//Exercício 5: map() – Transformação de um array
javascript
Copiar
const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(preco => preco * 0.9);
console.log(precosComDesconto); // [90, 180, 270, 360]

//Exercício 6: filter() – Filtrando valores em um array
javascript
Copiar
const idades = [12, 25, 17, 30, 14, 19];
const menoresDeIdade = idades.filter(idade => idade < 18);
console.log(menoresDeIdade); // [12, 17, 14]

// 7: reduce() – Somando valores de um array
javascript
Copiar
const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((total, num) => total * num, 1);
console.log(produto); // 120