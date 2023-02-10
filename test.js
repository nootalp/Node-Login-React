function divide(name) {
  return name.split(" ");
}

const nome = "Gabriel Gomes Tatsch";
const parts = divide(nome);

console.log(parts[2]);
