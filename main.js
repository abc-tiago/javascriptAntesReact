import { soma, sub, PI } from "./lib/math";
import somaUnique from "./lib/sum";
import * as math from "./lib/math";
import { soma as somaa } from "./lib/math";

console.log(soma(10, 1));
console.log(sub(10, 1));
console.log(PI);
console.log(somaUnique(1, 2));
console.log(math.soma(1, 2));
console.log(somaa(1, 2));

// document.body.innerText = "teste";
// const idade = null;
// document.body.innerText = "Sua idade é " + (idade ?? "Não informado");

/* objects */
// const user = {
//   nome: "tiago",
//   nickname: "lironnick",
//   idade: 29,
//   address: {
//     street: "Rua teste",
//     number: 176,
//   },
// };

// document.body.innerText = Object.keys(user);
// document.body.innerText = Object.values(user);
// document.body.innerText = JSON.stringify(user);
// document.body.innerText = JSON.stringify(Object.entries(user));

// const address = user.address;
// document.body.innerText = JSON.stringify(address);

// const { address, idade: age, nickname = "Henrique" } = user;
// document.body.innerText = JSON.stringify({ address, age, nickname });

// function mostraIdade(user) {
//   return user.idade;
// }

// function mostraIdade({ idade }) {
//   return idade;
// }

// document.body.innerText = mostraIdade(user);

// const { name, ...rest } = user;

// const array = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// const [fisrt, , trird, ...rest] = array;
// document.body.innerText = JSON.stringify({ fisrt, trird, rest });

// const name = "Tiago";
// const age = 28;
// const user = {
//   name,
//   age,
// };
// document.body.innerText = JSON.stringify(user);

// const user = {
//   nome: "tiago",
//   nickname: "lironnick",
//   idade: 29,
//   address: {
//     street: "Rua teste",
//     number: 176,
//     zip: {
//       code: "31620000",
//       city: "Belo horizonte",
//     },
//     showFullAddress() {
//       return "ok";
//     },
//   },
// };

// document.body.innerText = user.address?.zip?.code ?? "nao informado";
// document.body.innerText = user.address?.showFullAddress?.() ?? "nao informado";

/* ARRAYS */
// const key = "street";
// document.body.innerText = user.address[key];

const array = [1, 2, 3, 5, 6, 7, 8, 9, 10, "2"];

// for (const i of array) {
//   document.body.innerText += i;
// }

// array.forEach((item) => {
//   document.body.innerText += item;
// });

// const novoArray = array.map((item) => {
//   return item * 2;
// });

// const novoArray = array.map((item) => {
//   /* somento par */
//   if (item % 2 === 0) {
//     return item * 10;
//   }
//   return item;
// });

/* somento par */
// const novoArray = array.filter((item) => item % 2 === 0);
/* somento impares */
// const novoArray = array.filter((item) => item % 2 !== 0);

// const novoArray = array
// .filter((item) => item % 2 === 0)
// .map((item) => item + 100);

// const todosItensSaoNumeros = array.every((item) => typeof item === "number");
// const peloMenosUmItemNumero = array.some((item) => typeof item !== "number");

// const primeiroAcharPar = array.find((item) => item % 2 === 0);
// const primeiroAcharParIndex = array.findIndex((item) => item % 2 === 0);
// const some = array.reduce((acc, item) => {
//   // document.body.innerText += acc + "," + item + "---";
//   return acc + item;
// }, 0);

// document.body.innerText = JSON.stringify(some);

/* TEMPLETE LIRERAIS */

// const nome = "tiago";
// const message = "Bem-vindo, " + nome;
// const message = `Bem-vindo ${nome ?? "OPS"}`;

// document.body.innerText = message;

/* PROMISES */

// const somaDoisnumeros = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// };

// somaDoisnumeros(1, 3)
//   .then((soma) => {
//     document.body.innerText = soma;
//   })
//   .catch((err) => {
//     console.err(err);
//   });

// document.body.innerText = "OPS";

// fetch("https://api.github.com/users/abc-tiago")
//   .then((response) => {
//     response.json().then((body) => {
//       console.log(body);
//     });
//   })
//   .catch((err) => console.error(err));

// fetch("https://api.github.com/users/abc-tiago")
//   .then((response) => {
//     return response.json();
//   })
//   .then((body) => {
//     console.log(body);
//   })
//   .catch((err) => console.error(err))
//   .finally(() => {
//     console.log("foiii");
//   });

// async function buscaDadosNoGithub() {
//   try {
//     const response = await fetch("https://api.github.com/users/abc-tiago");
//     const body = await response.json();
//     console.log(body);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     console.log("foiiii");
//   }
// }

// buscaDadosNoGithub();

async function buscaDadosNoGithub() {
  try {
    const response = await fetch("https://api.github.com/users/abc-tiago");
    const body = await response.json();
    return body.name;
  } catch (err) {
    console.error(err);
  } finally {
    console.log("foiiii");
  }
}

buscaDadosNoGithub().then((nome) => {
  console.log(nome);
});
