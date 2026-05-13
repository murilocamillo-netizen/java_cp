// https://github.com/viniciusmansur/Exercicios-JavaScript.git
// //================================================================================


// //📚 AULA 02 E 03
// //📌 A) Cálculo do IMC

// // === ENTRADA ===
// let peso = Number(prompt("Digite seu peso em kg:"));
// let altura = Number(prompt("Digite sua altura em metros:"));

// // === PROCESSAMENTO ===
// let imc = peso / (altura * altura);

// // === SAÍDA ===
// alert(`Seu IMC é: ${imc.toFixed(2)}`);

// //Obs: o toFixed(2) é usado para limitar o número de casas decimais a 2,
// //tornando a saída mais legível.

// //Explicação:
// //- let peso = Number(prompt(...)) → pede o peso e converte de texto para número
// //- let altura = Number(prompt(...)) → pede a altura e converte para número
// //- let imc = peso / (altura * altura) → calcula o IMC (peso dividido pela altura ao quadrado)
// //- alert() → exibe o resultado na tela
// //- toFixed(2) → limita o resultado a 2 casas decimais



// //================================================================================
// //================================================================================

// //📚 AULA 02 E 03
// //📌 B) Calculadora com validações completas

// // === ENTRADA ===
// let n1 = prompt("Digite o primeiro número");
// let n2 = prompt("Digite o segundo número");
// let op = prompt("Operação: +, -, * ou /");

// // === VALIDAÇÃO DE CANCELAMENTO ===
// if (n1 === null || n2 === null || op === null) {
//   alert("Operação cancelada pelo usuário.");
// }
// // === VALIDAÇÃO DE CAMPOS VAZIOS ===
// else if (n1 === "" || n2 === "" || op === "") {
//   alert("Preencha todos os campos!");
// }
// // === VALIDAÇÃO DE TIPO ===
// else if (isNaN(n1) || isNaN(n2)) {
//   alert("Digite apenas números!");
// }
// // === VALIDAÇÃO DA OPERAÇÃO ===
// else if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
//   alert("Operação inválida! Use +, -, * ou /");
// }
// // === PROCESSAMENTO E SAÍDA ===
// else {
//   n1 = Number(n1);
//   n2 = Number(n2);
//   let resultado;

//   if (op === "+") {
//     resultado = n1 + n2;
//   } else if (op === "-") {
//     resultado = n1 - n2;
//   } else if (op === "*") {
//     resultado = n1 * n2;
//   } else if (op === "/") {
//     if (n2 === 0) {
//       alert("Não é possível dividir por zero!");
//     } else {
//       resultado = n1 / n2;
//     }
//   }

//   if (resultado !== undefined) {
//     alert("Resultado: " + resultado);
//   }
// }

// //Explicação:
// //- prompt() coleta os dados como texto
// //- null → usuário clicou em "Cancelar"
// //- === "" → campo vazio
// //- isNaN() → verifica se não é número (NaN = Not a Number)
// //- op !== "+" && op !== "-" → verifica se operação é válida
// //- Number() converte texto para número
// //- resultado !== undefined → só mostra se houve resultado
// //- Divisão por zero tem validação específica

// //================================================================================
// //================================================================================


// //📚 AULA 02 E 03
// //📌 C) Conversão metros para centímetros

// // === ENTRADA ===
// let metros = Number(prompt("Digite a distância em metros:"));

// // === PROCESSAMENTO ===
// let centimetros = metros * 100;

// // === SAÍDA ===
// alert(`${metros}m equivale a ${centimetros}cm`);

// //Explicação:
// //- metros = Number(prompt(...)) → pede valor em metros e converte para número
// //- centimetros = metros * 100 → cada metro tem 100 centímetros
// //- alert() → exibe o resultado formatado

// //================================================================================
// //================================================================================


// //📚 AULA 02 E 03
// //📌 D) Cálculo de preço por peso

// // === ENTRADA ===
// let peso = Number(prompt("Digite o peso do produto em gramas:"));

// // === PROCESSAMENTO ===
// let preco = (peso / 100) * 5;

// // === SAÍDA ===
// alert(`O preço do produto é: R$${preco.toFixed(2)}`);

// //Explicação:
// //- peso = Number(prompt(...)) → pede peso em gramas e converte para número
// //- (peso / 100) * 5 → regra: a cada 100g custa R$5
// //- toFixed(2) → formata para 2 casas decimais (reais)



// //================================================================================
// //================================================================================



// //📚 AULA 02 E 03
// //📌 E) Erro de tipagem e correção

// /* 
//     1. Código somar com erro de tipagem
// */

// // let numero1 = prompt("Digite o primeiro número")
// // let numero2 = prompt("Digite o segundo número")

// // let resultado = numero1 + numero2

// // alert(O resultado da soma é: ${resultado})

// /*
//     2. Código corrigido para somar corretamente
// */
// let numero1 = parseFloat(prompt("Digite o primeiro número"))
// let numero2 = parseFloat(prompt("Digite o segundo número"))
// let operacao = prompt("Digite a operação desejada (+, -, *, /):")

// if(operacao === "+") {
//     let resultado = numero1 + numero2
//     alert(O resultado da soma é: ${resultado})
// }
// else if(operacao === "-") {
//     let resultado = numero1 - numero2
//     alert(O resultado da subtração é: ${resultado})
// }
// else if(operacao === "*") {
//     let resultado = numero1 * numero2
//     alert(O resultado da multiplicação é: ${resultado})
// }
// else if(operacao === "/") {
//     if(numero2 !== 0) {
//         let resultado = numero1 / numero2
//         alert(O resultado da divisão é: ${resultado})
//     } else {
//         alert("Erro: Divisão por zero não é permitida.")
//     }
// }
// else{
//     alert("Operação inválida. Por favor, escolha entre +, -, *, /.")
// }

// //Explicação:
// //- ERRO: prompt() retorna texto, então "5" + "3" = "53" (concatenação)
// //- CORREÇÃO: parseFloat() converte texto para número
// //- 5 + 3 = 8 (soma correta)
// //- !== 0 → verifica se NÃO é zero (evita divisão por zero)




// //================================================================================
// //================================================================================





// //📚 AULA 04
// //📌 A) Jogo de palpite com função

// function verificarPalpite(palpite) {
//     const numeroAleatorio = Math.floor(Math.random() * 10) + 1
    
//     if (isNaN(palpite)) {
//         return "Digite um número válido!"
//     }

//     if (palpite === numeroAleatorio) {
//         return "Acertou! O número era " + numeroAleatorio
//     }

//     return "Errou! O número era " + numeroAleatorio + " e você chutou " + palpite
// }

// const tentativa = Number(prompt("Chute um número de 1 a 10:"))
// alert(verificarPalpite(tentativa))

// //Explicação:
// //- function verificarPalpite(palpite) → declara função que recebe um palpite
// //- Math.random() → gera número entre 0 e 0.999...
// //- Math.floor() → arredonda para baixo
// //- * 10 + 1 → ajusta para faixa de 1 a 10
// //- isNaN(palpite) → valida se é número
// //- palpite === numeroAleatorio → compara com o número secreto
// //- return → devolve o resultado (a função sempre retorna algo)



// //================================================================================
// //================================================================================


// //📚 AULA 04
// //📌 B) Função tradicional vs Arrow function

// // Função tradicional
// function soma(a, b) {
//     return a + b
// }

// // Mesma função como arrow function
// const soma = (a, b) => {
//     return a + b
// }

// // Versão curta (uma linha com return implícito)
// const soma = (a, b) => a + b

// //Explicação:
// //- Função tradicional: function nome(parametros) { corpo }
// //- Arrow function: (parametros) => { corpo }
// //- Versão curta: sem {} e sem return, o resultado é implícito
// //- As três fazem a MESMA coisa: somam dois números



// //================================================================================
// //================================================================================



// //📚 AULA 04
// //📌 C) Gerador de número aleatório com arrow function

// const gerarNumeroAleatorio = () => Math.floor(Math.random() * 100)

// console.log(gerarNumeroAleatorio()) // número aleatório entre 0 e 99

// //Explicação:
// //- () => → função sem parâmetros
// //- Math.random() * 100 → número entre 0 e 99.999...
// //- Math.floor() → arredonda para baixo (inteiro entre 0 e 99)



// //================================================================================
// //================================================================================




// //📚 AULA 04
// //📌 D) Arrow function com um parâmetro (parênteses opcional)

// // Com parênteses (sempre funciona)
// const dobro = (n) => n * 2;

// // === ENTRADA ===
// let numero = Number(prompt("Digite um número:"));

// // === SAÍDA ===
// alert(`O dobro de ${numero} é ${dobro(numero)}`);

// //Explicação:
// //- const dobro = (n) => n * 2 → arrow function que retorna o dobro
// //- prompt() → coleta o número digitado pelo usuário
// //- Number() → converte texto para número
// //- dobro(numero) → executa a função passando o número digitado
// //- alert() → exibe o resultado na tela



// //================================================================================
// //================================================================================



// //📚 AULA 04
// //📌 E) Funções especializadas (separação de responsabilidades)

// // Coleta
// const coletarNome = () => {
//     return prompt("Qual seu nome?")
// }

// const coletarIdade = () => {
//     return Number(prompt("Qual sua idade?"))
// }

// // Lógica — monta a mensagem
// const montarMensagem = (nome, idade) => {
//     return "Olá, " + nome + "! Você tem " + idade + " anos."
// }

// // Exibição — só exibe
// const exibirMensagem = (mensagem) => {
//     alert(mensagem)
// }

// // Orquestradora
// const iniciar = () => {
//     const nome = coletarNome()
//     const idade = coletarIdade()
//     const mensagem = montarMensagem(nome, idade)
//     exibirMensagem(mensagem)
// }

// iniciar()

// //Explicação:
// //- Cada função faz UMA coisa específica (coletar, processar, exibir)
// //- iniciar() → orquestra (chama as funções na ordem certa)
// //- Separar responsabilidades facilita manutenção e entendimento
// //- Vantagem: se precisar mudar algo, muda só uma função



// //================================================================================
// //================================================================================


// //📚 AULA 04
// //📌 F) Função simples de soma

// function soma(num1, num2) {
//     return num1 + num2;
// }

// // === ENTRADA ===
// let numero1 = Number(prompt("Digite o primeiro número:"));
// let numero2 = Number(prompt("Digite o segundo número:"));

// // === PROCESSAMENTO ===
// let resultado = soma(numero1, numero2);

// // === SAÍDA ===
// alert(`A soma de ${numero1} + ${numero2} é ${resultado}`);

// //Explicação:
// //- function soma(num1, num2) → declara função com dois parâmetros
// //- return num1 + num2 → devolve a soma
// //- prompt() → coleta os números digitados pelo usuário
// //- Number() → converte texto para número
// //- soma(numero1, numero2) → chama a função passando os valores
// //- alert() → exibe o resultado na tela


// //================================================================================
// //================================================================================



// //📚 AULA 04
// //📌 G) Função com parâmetro padrão (default)

// function saudacao(nome, periodo = "dia") {
//     return "Bom " + periodo + ", " + nome + "!"
// }

// console.log(saudacao("Ana"))          // "Bom dia, Ana!"
// console.log(saudacao("Ana", "noite")) // "Bom noite, Ana!"

// //Explicação:
// //- periodo = "dia" → valor padrão se o segundo argumento não for passado
// //- saudacao("Ana") → usa "dia" como padrão
// //- saudacao("Ana", "noite") → "noite" substitui o padrão



// //================================================================================
// //================================================================================


// //📚 AULA 04
// //📌 H) Manipulação de strings (substituir letras)

// // Função tradicional
// function substituirLetra(texto) {

//     const textoMinusculo = texto.toLowerCase();

//     if (textoMinusculo.includes("a")) {

//         const textoSubstituido = textoMinusculo.replaceAll("a", "o");

//         return textoSubstituido;
//     }

//     return texto;
// }

// // === ENTRADA ===
// let textoUsuario = prompt("Digite uma palavra ou frase:");

// // === PROCESSAMENTO ===
// let resultado = substituirLetra(textoUsuario);

// // === SAÍDA ===
// alert(`Resultado: ${resultado}`);

// // Exemplos no console
// console.log(substituirLetra("Banana"));   // bonono
// console.log(substituirLetra("ABACATE"));  // obocote
// console.log(substituirLetra("Pedro"));    // Pedro


// //📌 Versão Arrow Function

// const substituirLetraArrow = (texto) => {

//     const textoMinusculo = texto.toLowerCase();

//     if (textoMinusculo.includes("a")) {

//         return textoMinusculo.replaceAll("a", "o");
//     }

//     return texto;
// }

// // Exemplo da arrow function
// console.log(substituirLetraArrow("Banana"));
// console.log(substituirLetraArrow("ABACATE"));
// console.log(substituirLetraArrow("Pedro"));

// //Explicação:
// //- toLowerCase() → converte tudo para minúsculo
// //- includes("a") → verifica se existe a letra "a"
// //- replaceAll("a", "o") → substitui todas as letras "a" por "o"
// //- return → devolve o texto alterado
// //- Arrow function → versão moderna e reduzida da função tradicional
// //- Não podemos declarar duas funções/const com o mesmo nome



// //================================================================================
// //================================================================================


// //📚 AULA 04
// //📌 I) Limpeza e formatação de strings

// // Função tradicional
// function limparEFormatar(texto) {

//     const textoLimpo = texto.trim();

//     const textoMaiusculo = textoLimpo.toUpperCase();

//     return textoMaiusculo;
// }

// // === ENTRADA ===
// let textoUsuario = prompt("Digite uma palavra ou frase:");

// // === PROCESSAMENTO ===
// let resultado = limparEFormatar(textoUsuario);

// // === SAÍDA ===
// alert(`Texto formatado: ${resultado}`);

// // Exemplos no console
// console.log(limparEFormatar("  olá mundo  ")); // OLÁ MUNDO
// console.log(limparEFormatar(" fiap "));        // FIAP


// //📌 Versão Arrow Function

// const limparEFormatarArrow = (texto) => {
//     return texto.trim().toUpperCase();
// }

// // Exemplos da arrow function
// console.log(limparEFormatarArrow("  olá mundo  "));
// console.log(limparEFormatarArrow(" fiap "));

// //Explicação:
// //- trim() → remove espaços no início e fim da string
// //- toUpperCase() → converte tudo para maiúsculo
// //- .trim().toUpperCase() → executa métodos em sequência
// //- return → devolve o texto formatado
// //- Arrow function → versão moderna da função tradicional
// //- Não podemos declarar duas funções/const com o mesmo nome



// // Código completo simples
// function limparEFormatar(texto) {

//     const textoLimpo = texto.trim();

//     const textoMaiusculo = textoLimpo.toUpperCase();

//     return textoMaiusculo;
// }

// let textoUsuario = prompt("Digite um texto:");

// let resultado = limparEFormatar(textoUsuario);

// alert(resultado);


// //================================================================================
// //================================================================================



// //📚 AULA 04
// //📌 J) Armazenando resultado de função em variável

// function saudacao(nome) {
//     return "Olá, " + nome + "!"
// }

// const mensagem = saudacao("murilo")
// console.log(mensagem) // "Olá, Maria!"

// // Chamando direto no console.log
// console.log(saudacao("Carlos")) // "Olá, Carlos!"

// //Explicação:
// //- const mensagem = saudacao("Maria") → guarda o RETURN da função na variável
// //- Depois pode usar a variável várias vezes
// //- Ou chamar a função diretamente dentro do console.log()



// //================================================================================
// //================================================================================



// //📚 AULA 05
// //📌 A) Contagem regressiva com while

// function contagemRegressiva(numero) {
//     while (numero >= 1) {
//         console.log(numero)
//         numero--
//     }
// }

// const numero = Number(prompt("Digite um número:"))
// contagemRegressiva(numero)

// //Explicação:
// //- while (numero >= 1) → repete ENQUANTO número for maior ou igual a 1
// //- console.log(numero) → mostra o número atual
// //- numero-- → diminui 1 a cada repetição (senão vira loop infinito)
// //- Quando numero chegar a 0, a condição fica falsa e o loop para



// //================================================================================
// //================================================================================



// //📚 AULA 05
// //📌 B) Contagem regressiva com múltiplas validações

// // Coleta o número do usuário
// const numero = Number(prompt("Digite um número inteiro positivo:"))

// // Valida se é um número
// if (isNaN(numero)) {
//     alert("Isso não é um número!")

// // Valida se é positivo
// } else if (numero <= 0) {
//     alert("O número deve ser positivo!")

// // Valida se é inteiro
// } else if (numero !== Math.floor(numero)) {
//     alert("O número deve ser inteiro!")

// // Se passou em todas as validações, executa a contagem
// } else {
//     let i = numero
//     while (i >= 1) {
//         console.log(i)
//         i--
//     }
//     alert("Contagem finalizada!")
// }

// //Explicação:
// //- isNaN(numero) → verifica se NÃO é número
// //- numero <= 0 → verifica se é positivo
// //- numero !== Math.floor(numero) → verifica se é inteiro (se é igual a ele mesmo arredondado)
// //- Só executa a contagem se passar em TODAS as validações



// //================================================================================
// //================================================================================



// //📚 AULA 05
// //📌 C) Jogo de adivinhação com do/while

// const numeroSecreto = Math.floor(Math.random() * 10) + 1
// let tentativas = 0
// let palpite

// do {
//     palpite = Number(prompt("Chute um número de 1 a 10:"))
//     tentativas++

//     if (isNaN(palpite) || palpite < 1 || palpite > 10) {
//         alert("Digite um número válido entre 1 e 10!")
//     } else if (palpite < numeroSecreto) {
//         alert("Muito baixo! Tente um número maior.")
//     } else if (palpite > numeroSecreto) {
//         alert("Muito alto! Tente um número menor.")
//     }

// } while (palpite !== numeroSecreto)

// // LINHA CORRIGIDA 👇
// alert(`Parabéns! Você acertou em ${tentativas} tentativas! O número era ${numeroSecreto}`)

// //Explicação:
// //- do { } while (condição) → executa o código PRIMEIRO, DEPOIS testa
// //- Garante que o usuário chute pelo menos uma vez
// //- tentativas++ → conta quantas tentativas foram feitas
// //- palpite !== numeroSecreto → repete ENQUANTO o palpite for DIFERENTE do número secreto
// //- Quando acerta, a condição fica falsa e o loop termina



// //================================================================================
// //================================================================================



// //📚 AULA 05
// //📌 D) Encontrar divisores de um número com for

// const numero = Number(prompt("Digite um número:"))

// if (isNaN(numero) || numero <= 0) {
//     alert("Digite um número válido maior que zero!")
// } else {
//     let divisores = ""

//     for (let i = 1; i <= numero; i++) {
//         if (numero % i === 0) {
//             divisores = divisores + `${i}\n`  // ✅ CORRIGIDO
//         }
//     }

//     alert(`Divisores de ${numero}:\n\n${divisores}`)  // ✅ CORRIGIDO
// }
// //Explicação:
// // - for (let i = 1; i <= numero; i++) → i vai de 1 até o número
// // - numero % i === 0 → resto da divisão é zero? Se sim, é divisor
// // - divisores = divisores + ${i}\n → vai acumulando os divisores com quebra de linha
// // - No final, mostra todos os divisores encontrados



// //================================================================================
// //================================================================================



// // 📚 AULA 05
// // 📌 E) Tabuada com for

// const numero = Number(prompt("Digite um número para ver a tabuada:"))

// if (isNaN(numero)) {
//     alert("Digite um número válido!")
// } else {
//     let tabuada = `Tabuada do ${numero}\n\n`

//     for (let i = 1; i <= 10; i++) {
//         tabuada = tabuada + `${numero} x ${i} = ${numero * i}\n`
//     }

//     alert(tabuada)
// }

// // Explicação:
// // - for (let i = 1; i <= 10; i++) → i vai de 1 até 10
// // - tabuada = tabuada + ... → vai construindo a string linha por linha
// // - numero * i → calcula o resultado da multiplicação
// // - No final, exibe a tabuada completa




// //================================================================================
// //================================================================================


// //📚 AULA 05
// //📌 F) Cadastro com validação de múltiplos campos usando do/while
// let nome

// do {
//     nome = prompt("Digite seu nome:")

//     if (!nome || nome.length <= 3) {
//         alert("O nome deve ter mais de 3 caracteres!")
//     }
// } while (!nome || nome.length <= 3)

// let idade

// do {
//     idade = Number(prompt("Digite sua idade:"))

//     if (isNaN(idade) || idade < 0 || idade > 150) {
//         alert("A idade deve ser um número entre 0 e 150!")
//     }
// } while (isNaN(idade) || idade < 0 || idade > 150)

// let salario

// do {
//     salario = Number(prompt("Digite seu salário:"))

//     if (isNaN(salario) || salario <= 0) {
//         alert("O salário deve ser um número maior que zero!")
//     }
// } while (isNaN(salario) || salario <= 0)

// let genero

// do {
//     genero = prompt("Digite seu gênero (f ou m):").toLowerCase()

//     if (genero !== "f" && genero !== "m") {
//         alert("Digite apenas 'f' ou 'm'!")
//     }
// } while (genero !== "f" && genero !== "m")

// let estadoCivil

// do {
//     estadoCivil = prompt("Digite seu estado civil (s, c, v ou d):").toLowerCase()

//     if (estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" && estadoCivil !== "d") {
//         alert("Digite apenas 's', 'c', 'v' ou 'd'!")
//     }
// } while (estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" && estadoCivil !== "d")

// // CORREÇÃO AQUI 👇
// alert(`Cadastro realizado!\n\n
// Nome: ${nome}\n
// Idade: ${idade}\n
// Salário: R$ ${salario.toFixed(2)}\n
// Gênero: ${genero === "f" ? "Feminino" : "Masculino"}\n
// Estado Civil: ${estadoCivil === "s" ? "Solteiro" : estadoCivil === "c" ? "Casado" : estadoCivil === "v" ? "Viúvo" : "Divorciado"}`)



// // //Explicação:
// // //- Cada campo tem seu próprio do/while para validar até estar correto
// // //- !nome → verifica se o campo está vazio (null ou string vazia)
// // //- nome.length <= 3 → verifica tamanho mínimo
// // //- genero !== "f" && genero !== "m" → só aceita f ou m
// // //- Só passa para o próximo campo quando o atual estiver válido
// // //- toLowerCase() → converte para minúsculo para facilitar comparação
// // //- ${genero === "f" ? "Feminino" : "Masculino"} → operador ternário (if de uma linha)
// // //- Ao final, exibe todos os dados cadastrados



// //================================================================================
// //==============================================================================


// // par - Versão para console
// const numero = Number(prompt("Digite um número:"))

// if (isNaN(numero) || numero <= 0) {
//     console.log("Digite um número válido maior que zero!")
// } else {
//     console.log(`Números pares de 1 até ${numero}:`)
//     console.log("-----------------------------")
    
//     for (let i = 2; i <= numero; i += 2) {
//         console.log(i)
//     }
// }




// // impar
// const numero = Number(prompt("Digite um número:"))

// if (isNaN(numero) || numero <= 0) {
//     alert("Digite um número válido maior que zero!")
// } else {
//     let impares = `Números ímpares de 1 até ${numero}:\n\n`
    
//     for (let i = 1; i <= numero; i += 2) {
//         impares = impares + `${i}\n`
//     }
    
//     alert(impares)
// }



// function ehPalindromo(palavra) {
//   const texto = palavra.toLowerCase().replace(/\s+/g, '');
//   const invertido = texto.split('').reverse().join('');

//   return texto === invertido;
// }

// // INPUT do usuário
// const palavra = prompt("Digite uma palavra:");

// // Verifica e mostra resultado
// if (ehPalindromo(palavra)) {
//   alert("É um palíndromo!");
// } else {
//   alert("Não é um palíndromo!");
// }



// numero primo se nao for mostra os divisores
// function verificarPrimo(numero) {
//     let divisores = [];

//     if (numero <= 1) {
//         console.log(numero + " não é primo.");
//         return;
//     }

//     for (let i = 2; i < numero; i++) {
//         if (numero % i === 0) {
//             divisores.push(i);
//         }
//     }

//     if (divisores.length === 0) {
//         console.log(numero + " é primo.");
//     } else {
//         console.log(numero + " não é primo.");
//         console.log("Divisores encontrados: " + divisores.join(", "));
//     }
// }

// // Exemplo de uso
// let numero = Number(prompt("Digite um número:"));
// verificarPrimo(numero);



// // é numero primo ou nao
// function ehPrimo(numero) {
//     if (numero <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//         if (numero % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// let numero = Number(prompt("Digite um número:"));

// alert(
//     ehPrimo(numero)
//         ? `${numero} é primo`
//         : `${numero} não é primo`
// );








// //================================================================================
// //📚 QUESTÃO 1 - PROVA
// //📌 Programa de validação de senha

// // === ENUNCIADO ===
// // Crie um programa que solicita ao usuário que cadastre uma senha.
// // A senha deve atender aos seguintes critérios:
// // - Ter no mínimo 8 caracteres
// // - Conter pelo menos um número
// // - Conter pelo menos uma letra maiúscula
// // - Não pode ser igual a "admin" ou "123456"
// //
// // O programa deve repetir a solicitação até que a senha seja válida,
// // informando a cada erro qual critério não foi atendido.

// // === RESOLUÇÃO ===

// function validarSenha(senha) {
//     // Verifica se está vazia ou é null
//     if (!senha) {
//         return "Senha não pode estar vazia!"
//     }
    
//     // Verifica tamanho mínimo
//     if (senha.length < 8) {
//         return "A senha deve ter no mínimo 8 caracteres!"
//     }
    
//     // Verifica se contém número
//     let temNumero = false
//     for (let i = 0; i < senha.length; i++) {
//         if (senha[i] >= "0" && senha[i] <= "9") {
//             temNumero = true
//             break
//         }
//     }
//     if (!temNumero) {
//         return "A senha deve conter pelo menos um número!"
//     }
    
//     // Verifica se contém letra maiúscula
//     let temMaiuscula = false
//     for (let i = 0; i < senha.length; i++) {
//         if (senha[i] >= "A" && senha[i] <= "Z") {
//             temMaiuscula = true
//             break
//         }
//     }
//     if (!temMaiuscula) {
//         return "A senha deve conter pelo menos uma letra maiúscula!"
//     }
    
//     // Verifica senhas proibidas
//     if (senha === "admin" || senha === "123456") {
//         return "Esta senha é muito fraca! Escolha outra."
//     }
    
//     return null // Senha válida
// }

// // === PROGRAMA PRINCIPAL ===
// let senha
// let erro

// do {
//     senha = prompt("Cadastre sua senha:")
    
//     if (senha === null) {
//         alert("Operação cancelada!")
//         break
//     }
    
//     erro = validarSenha(senha)
    
//     if (erro) {
//         alert(erro)
//     }
    
// } while (erro !== null && senha !== null)

// if (senha !== null) {
//     alert("✅ Senha cadastrada com sucesso!")
// }

// // === EXPLICAÇÃO ===
// // - function validarSenha(senha) → função que testa todos os critérios
// // - !senha → verifica se a senha está vazia ou é null
// // - senha.length < 8 → verifica tamanho mínimo
// // - for com if (senha[i] >= "0" && senha[i] <= "9") → percorre cada caractere procurando número
// // - for com if (senha[i] >= "A" && senha[i] <= "Z") → percorre procurando letra maiúscula
// // - senha === "admin" || senha === "123456" → verifica senhas comuns proibidas
// // - return null → indica que a senha é válida
// // - do/while → repete até a senha ser válida ou o usuário cancelar



// //================================================================================
// //================================================================================

// //================================================================================
//📚 QUESTÃO 2 - PROVA
//📌 Calculadora de média com validação de notas

// === ENUNCIADO ===
// Desenvolva um programa que calcula a média de um aluno.
// O programa deve:
// 1. Solicitar quantas notas serão inseridas
// 2. Para cada nota, solicitar o valor (de 0 a 10)
// 3. Validar se cada nota está dentro do intervalo permitido
// 4. Calcular e exibir a média final
// 5. Exibir o conceito baseado na média:
//    - A: média >= 9
//    - B: média >= 7 e < 9
//    - C: média >= 5 e < 7
//    - D: média >= 3 e < 5
//    - E: média < 3

// === RESOLUÇÃO ===

// Função para validar nota
function validarNota(nota) {
    if (isNaN(nota)) {
        return "Digite um número válido!"
    }
    if (nota < 0 || nota > 10) {
        return "A nota deve estar entre 0 e 10!"
    }
    return null // Nota válida
}

// Função para obter conceito
function obterConceito(media) {
    if (media >= 9) return "A"
    if (media >= 7) return "B"
    if (media >= 5) return "C"
    if (media >= 3) return "D"
    return "E"
}

// Função para exibir situação
function exibirSituacao(media, conceito) {
    let situacao
    
    if (media >= 7) {
        situacao = "APROVADO"
    } else if (media >= 5) {
        situacao = "RECUPERAÇÃO"
    } else {
        situacao = "REPROVADO"
    }
    
    return `Média: ${media.toFixed(2)}\nConceito: ${conceito}\nSituação: ${situacao}`
}

// === PROGRAMA PRINCIPAL ===
let quantidade

// Valida quantidade de notas
do {
    quantidade = Number(prompt("Quantas notas serão inseridas?"))
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Digite um número positivo válido!")
    }
} while (isNaN(quantidade) || quantidade <= 0)

let somaNotas = 0
let notasValidas = 0

// Coleta e valida cada nota
for (let i = 1; i <= quantidade; i++) {
    let nota
    let erro
    
    do {
        nota = Number(prompt(`Digite a ${i}ª nota (0 a 10):`))
        erro = validarNota(nota)
        
        if (erro) {
            alert(erro)
        }
    } while (erro !== null)
    
    somaNotas = somaNotas + nota
    notasValidas++
}

// Calcula média
let media = somaNotas / notasValidas

// Obtém conceito
let conceito = obterConceito(media)

// Exibe resultado
alert(exibirSituacao(media, conceito))

// === EXPLICAÇÃO ===
// - validarNota(nota) → verifica se é número e se está entre 0 e 10
// - obterConceito(media) → retorna letra baseada na média
// - exibirSituacao() → retorna string formatada com média, conceito e situação
// - do/while para quantidade → valida entrada do número de notas
// - for com do/while interno → valida cada nota individualmente
// - somaNotas = somaNotas + nota → acumula para calcular média
// - toFixed(2) → formata média com 2 casas decimais



//================================================================================
//================================================================================



// //================================================================================
// //📚 QUESTÃO 3 - PROVA
// //📌 Jogo de par ou ímpar com placar

// // === ENUNCIADO ===
// // Crie um jogo de "Par ou Ímpar" contra o computador.
// // O programa deve:
// // 1. Perguntar ao usuário se ele quer par ou ímpar
// // 2. Solicitar um número de 0 a 5
// // 3. Gerar um número aleatório para o computador (0 a 5)
// // 4. Somar os dois números e determinar quem venceu
// // 5. Manter um placar (usuário x computador)
// // 6. Perguntar se quer jogar novamente
// // 7. Exibir o placar final quando o usuário encerrar

// // === RESOLUÇÃO ===

// // Função para gerar número aleatório
// const gerarNumeroComputador = () => Math.floor(Math.random() * 6) // 0 a 5

// // Função para verificar se o número é válido
// function validarNumero(numero) {
//     if (isNaN(numero)) {
//         return "Digite um número válido!"
//     }
//     if (numero < 0 || numero > 5) {
//         return "Digite um número entre 0 e 5!"
//     }
//     return null
// }

// // Função para determinar o vencedor
// function determinarVencedor(soma, escolhaUsuario) {
//     const ehPar = soma % 2 === 0
    
//     if (ehPar && escolhaUsuario === "par") {
//         return "usuario"
//     } else if (!ehPar && escolhaUsuario === "impar") {
//         return "usuario"
//     } else {
//         return "computador"
//     }
// }

// // Função para exibir resultado da rodada
// function exibirRodada(numUsuario, numComputador, soma, vencedor) {
//     return `
// Seu número: ${numUsuario}
// Número do computador: ${numComputador}
// Soma: ${soma} (${soma % 2 === 0 ? "PAR" : "ÍMPAR"})
// Vencedor: ${vencedor === "usuario" ? "Você!" : "Computador!"}`
// }

// // === PROGRAMA PRINCIPAL ===
// let placarUsuario = 0
// let placarComputador = 0
// let continuar = true

// alert("🎮 JOGO DE PAR OU ÍMPAR 🎮\nRegras:\n- Escolha PAR ou ÍMPAR\n- Digite um número de 0 a 5\n- Ganha quem acertar!")

// do {
//     // Escolha do usuário (par ou ímpar)
//     let escolhaUsuario
//     do {
//         escolhaUsuario = prompt("Escolha: PAR ou ÍMPAR?").toLowerCase()
        
//         if (escolhaUsuario !== "par" && escolhaUsuario !== "impar") {
//             alert("Digite apenas 'par' ou 'impar'!")
//         }
//     } while (escolhaUsuario !== "par" && escolhaUsuario !== "impar")
    
//     // Número do usuário
//     let numeroUsuario
//     let erro
    
//     do {
//         numeroUsuario = Number(prompt("Digite um número de 0 a 5:"))
//         erro = validarNumero(numeroUsuario)
        
//         if (erro) {
//             alert(erro)
//         }
//     } while (erro !== null)
    
//     // Número do computador
//     let numeroComputador = gerarNumeroComputador()
    
//     // Calcula soma
//     let soma = numeroUsuario + numeroComputador
    
//     // Determina vencedor
//     let vencedor = determinarVencedor(soma, escolhaUsuario)
    
//     // Atualiza placar
//     if (vencedor === "usuario") {
//         placarUsuario++
//     } else {
//         placarComputador++
//     }
    
//     // Exibe resultado da rodada
//     alert(exibirRodada(numeroUsuario, numeroComputador, soma, vencedor))
//     alert(`PLACAR: Você ${placarUsuario} x ${placarComputador} Computador`)
    
//     // Pergunta se quer continuar
//     let resposta
//     do {
//         resposta = prompt("Deseja jogar novamente? (SIM ou NÃO)").toLowerCase()
        
//         if (resposta !== "sim" && resposta !== "não") {
//             alert("Digite 'sim' ou 'não'!")
//         }
//     } while (resposta !== "sim" && resposta !== "não")
    
//     if (resposta === "não") {
//         continuar = false
//     }
    
// } while (continuar)

// // Exibe placar final
// let mensagemFinal = `
// 🏆 PLACAR FINAL 🏆
// Você: ${placarUsuario}
// Computador: ${placarComputador}
// `

// if (placarUsuario > placarComputador) {
//     mensagemFinal += "\n🎉 PARABÉNS! VOCÊ VENCEU! 🎉"
// } else if (placarUsuario < placarComputador) {
//     mensagemFinal += "\n💻 O COMPUTADOR VENCEU! 💻"
// } else {
//     mensagemFinal += "\n🤝 EMPATE! 🤝"
// }

// alert(mensagemFinal)

// // === EXPLICAÇÃO ===
// // - gerarNumeroComputador = () => Math.floor(Math.random() * 6) → arrow function que gera número de 0 a 5
// // - validarNumero() → verifica se é número e está entre 0 e 5
// // - determinarVencedor() → verifica se soma é par ou ímpar e compara com a escolha
// // - soma % 2 === 0 → verifica se o número é par (resto da divisão por 2 é zero)
// // - do/while principal → mantém o jogo rodando
// // - placarUsuario++ e placarComputador++ → incrementa o placar do vencedor
// // - toLowerCase() → converte resposta para minúsculo para facilitar comparação



// //================================================================================
// //================================================================================



// //================================================================================
// //📚 QUESTÃO 4 - PROVA
// //📌 Sistema de tabuada interativa

// // === ENUNCIADO ===
// // Crie um programa que gera tabuadas personalizadas.
// // O programa deve:
// // 1. Perguntar qual número o usuário quer ver a tabuada
// // 2. Perguntar o início da tabuada (padrão 1)
// // 3. Perguntar o fim da tabuada (padrão 10)
// // 4. Exibir a tabuada completa no formato: "N x I = RESULTADO"
// // 5. Perguntar se quer ver outra tabuada
// // 6. Quando encerrar, exibir quantas tabuadas foram geradas

// // === RESOLUÇÃO ===

// // Função para validar número
// function validarNumero(numero, campo) {
//     if (isNaN(numero)) {
//         return `${campo} deve ser um número válido!`
//     }
//     return null
// }

// // Função para validar intervalo
// function validarIntervalo(inicio, fim) {
//     if (inicio > fim) {
//         return "O início não pode ser maior que o fim!"
//     }
//     return null
// }

// // Arrow function para gerar tabuada
// const gerarTabuada = (numero, inicio, fim) => {
//     let resultado = `📊 TABUADA DO ${numero} 📊\n\n`
//     resultado = resultado + `De ${inicio} até ${fim}\n`
//     resultado = resultado + `=================\n\n`
    
//     for (let i = inicio; i <= fim; i++) {
//         const multiplicacao = numero * i
//         resultado = resultado + `${numero} x ${i} = ${multiplicacao}\n`
//     }
    
//     return resultado
// }

// // Função para exibir tabuada formatada
// function exibirTabuada(numero, inicio, fim) {
//     let tabuada = `\n`
    
//     for (let i = inicio; i <= fim; i++) {
//         tabuada = tabuada + `${numero} x ${i} = ${numero * i}\n`
//     }
    
//     return tabuada
// }

// // === PROGRAMA PRINCIPAL ===
// let quantidadeTabuadas = 0
// let continuar = true

// alert("📐 SISTEMA DE TABUADA INTERATIVA 📐")

// do {
//     // Coleta e valida o número
//     let numero
//     let erroNumero
    
//     do {
//         numero = Number(prompt("Digite o número para ver a tabuada:"))
//         erroNumero = validarNumero(numero, "O número")
        
//         if (erroNumero) {
//             alert(erroNumero)
//         }
//     } while (erroNumero !== null)
    
//     // Coleta início (com valor padrão)
//     let inicio = 1
//     let respostaInicio = prompt("Digite o início da tabuada (padrão = 1):")
    
//     if (respostaInicio !== null && respostaInicio !== "") {
//         inicio = Number(respostaInicio)
//         if (isNaN(inicio)) {
//             alert("Valor inválido! Usando padrão = 1")
//             inicio = 1
//         }
//     }
    
//     // Coleta fim (com valor padrão)
//     let fim = 10
//     let respostaFim = prompt("Digite o fim da tabuada (padrão = 10):")
    
//     if (respostaFim !== null && respostaFim !== "") {
//         fim = Number(respostaFim)
//         if (isNaN(fim)) {
//             alert("Valor inválido! Usando padrão = 10")
//             fim = 10
//         }
//     }
    
//     // Valida intervalo
//     let erroIntervalo = validarIntervalo(inicio, fim)
    
//     if (erroIntervalo) {
//         alert(erroIntervalo)
//         alert("Invertendo os valores...")
//         let temp = inicio
//         inicio = fim
//         fim = temp
//         alert(`Ajustado: início = ${inicio}, fim = ${fim}`)
//     }
    
//     // Gera e exibe a tabuada
//     const tabuadaCompleta = gerarTabuada(numero, inicio, fim)
//     alert(tabuadaCompleta)
    
//     // Incrementa contador
//     quantidadeTabuadas++
    
//     // Pergunta se quer continuar
//     let resposta
//     do {
//         resposta = prompt("Deseja ver outra tabuada? (SIM ou NÃO)").toLowerCase()
        
//         if (resposta !== "sim" && resposta !== "não") {
//             alert("Digite 'sim' ou 'não'!")
//         }
//     } while (resposta !== "sim" && resposta !== "não")
    
//     if (resposta === "não") {
//         continuar = false
//     }
    
// } while (continuar)

// // Exibe resumo final
// alert(`📊 RESUMO FINAL 📊\n\nTabuadas geradas: ${quantidadeTabuadas}\nObrigado por usar o sistema!`)

// // === EXPLICAÇÃO ===
// // - validarNumero() → verifica se a entrada é um número válido
// // - validarIntervalo() → verifica se início é menor ou igual ao fim
// // - const gerarTabuada = () => {} → arrow function que monta a string da tabuada
// // - for (let i = inicio; i <= fim; i++) → laço que gera cada linha da tabuada
// // - numero * i → calcula o resultado da multiplicação
// // - prompt com valor padrão → se usuário não digitar nada, usa valor definido
// // - Inversão automática → se início > fim, o programa troca os valores
// // - quantidadeTabuadas++ → conta quantas tabuadas foram geradas



// //================================================================================
// //================================================================================



// //================================================================================
// //📚 QUESTÃO 5 - PROVA
// //📌 Analisador de números com estatísticas

// // === ENUNCIADO ===
// // Desenvolva um programa que analisa uma lista de números informados pelo usuário.
// // O programa deve:
// // 1. Solicitar quantos números serão analisados
// // 2. Coletar cada número (validar se é número)
// // 3. Ao final, exibir:
// //    - O maior número
// //    - O menor número
// //    - A soma de todos os números
// //    - A média aritmética
// //    - Quantos números são pares
// //    - Quantos números são ímpares
// //    - Quantos números são positivos
// //    - Quantos números são negativos (considere zero como neutro)

// // === RESOLUÇÃO ===

// // Função para validar número
// function validarNumero(valor) {
//     if (isNaN(valor)) {
//         return false
//     }
//     return true
// }

// // Arrow function para verificar se é par
// const ehPar = (numero) => numero % 2 === 0

// // Arrow function para verificar sinal
// const verificarSinal = (numero) => {
//     if (numero > 0) return "positivo"
//     if (numero < 0) return "negativo"
//     return "neutro"
// }

// // Função para atualizar estatísticas
// function atualizarEstatisticas(numero, estatisticas) {
//     // Maior e menor
//     if (numero > estatisticas.maior) {
//         estatisticas.maior = numero
//     }
//     if (numero < estatisticas.menor) {
//         estatisticas.menor = numero
//     }
    
//     // Soma
//     estatisticas.soma = estatisticas.soma + numero
    
//     // Pares e ímpares
//     if (ehPar(numero)) {
//         estatisticas.pares++
//     } else {
//         estatisticas.impares++
//     }
    
//     // Positivos, negativos e neutros
//     const sinal = verificarSinal(numero)
//     if (sinal === "positivo") {
//         estatisticas.positivos++
//     } else if (sinal === "negativo") {
//         estatisticas.negativos++
//     } else {
//         estatisticas.neutros++
//     }
// }

// // Função para exibir relatório
// function exibirRelatorio(estatisticas) {
//     const media = estatisticas.soma / estatisticas.total
    
//     return `
// 📊 RELATÓRIO FINAL 📊
// ========================
// 
// 🔢 Total de números: ${estatisticas.total}
// 
// 📈 Maior número: ${estatisticas.maior}
// 📉 Menor número: ${estatisticas.menor}
// 
// ➕ Soma total: ${estatisticas.soma}
// 📊 Média: ${media.toFixed(2)}
// 
// 🔵 Números pares: ${estatisticas.pares}
// 🟠 Números ímpares: ${estatisticas.impares}
// 
// ✅ Positivos: ${estatisticas.positivos}
// ❌ Negativos: ${estatisticas.negativos}
// ⚪ Neutros (zero): ${estatisticas.neutros}
// `
// }

// // === PROGRAMA PRINCIPAL ===
// let quantidade

// alert("📊 ANALISADOR DE NÚMEROS 📊")

// // Valida quantidade de números
// do {
//     quantidade = Number(prompt("Quantos números você quer analisar?"))
    
//     if (isNaN(quantidade) || quantidade <= 0) {
//         alert("Digite um número inteiro positivo!")
//     }
// } while (isNaN(quantidade) || quantidade <= 0)

// // Inicializa objeto de estatísticas
// let estatisticas = {
//     total: quantidade,
//     maior: -Infinity,  // Começa com o menor valor possível
//     menor: Infinity,   // Começa com o maior valor possível
//     soma: 0,
//     pares: 0,
//     impares: 0,
//     positivos: 0,
//     negativos: 0,
//     neutros: 0
// }

// // Coleta e analisa cada número
// for (let i = 1; i <= quantidade; i++) {
//     let numero
//     let valido = false
    
//     do {
//         let entrada = prompt(`Digite o ${i}º número:`)
        
//         if (entrada === null) {
//             alert("Programa cancelado!")
//             break
//         }
        
//         numero = Number(entrada)
//         valido = validarNumero(numero)
        
//         if (!valido) {
//             alert("Digite um número válido!")
//         }
        
//     } while (!valido)
    
//     if (entrada === null) {
//         break // Sai do programa se cancelar
//     }
    
//     // Atualiza estatísticas com o número válido
//     atualizarEstatisticas(numero, estatisticas)
// }

// // Exibe relatório final
// if (estatisticas.total > 0) {
//     const relatorio = exibirRelatorio(estatisticas)
//     alert(relatorio)
//     console.log(relatorio) // Também exibe no console para referência
// }

// // === EXPLICAÇÃO ===
// // - validarNumero() → verifica se o valor é um número válido
// // - ehPar = (numero) => numero % 2 === 0 → arrow function que retorna true se for par
// // - verificarSinal() → retorna "positivo", "negativo" ou "neutro"
// // - objeto estatisticas → armazena todos os valores calculados
// // - -Infinity e Infinity → valores especiais para garantir que qualquer número será maior/menor
// // - atualizarEstatisticas() → atualiza todas as métricas com cada novo número
// // - media = soma / total → calcula a média aritmética
// // - toFixed(2) → formata média com 2 casas decimais
// // - for com do/while interno → garante que cada número é válido antes de prosseguir
// // - objeto com propriedades → organização limpa dos dados estatísticos

// //================================================================================
// //================================================================================