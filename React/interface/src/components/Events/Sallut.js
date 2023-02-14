import React, { useState, useEffect } from "react";
// displayMessage segura o valor vazio presente em useState(""),
// e setDisplayMessage atualiza os dados de displayMessage;
// A cada intervalo de 80 milissegundos,
// o estado "displayMessage" é atualizado com uma parte da string "text" que foi definida no início do useEffect.
function Sallut({ name }) {
  const [displayMessage, setDisplayMessage] = useState("");
  //    O useEffect recebe dois parâmetros: o primeiro é uma função de efeito (ou efeito colateral),
  // e o segundo é um array de dependências.
  //    A função de efeito é a função que será executada sempre que o componente for montado (renderizado pela primeira vez),
  // atualizado (re-renderizado) ou desmontado. Essa função pode realizar tarefas como alterar o DOM,
  // fazer chamadas de rede, manipular dados, etc.
  //    Já o array de dependências é uma lista opcional de valores que o useEffect deve observar. Se um valor na lista mudar,
  // o efeito é disparado novamente. Se o array estiver vazio, o efeito será executado apenas uma vez, quando o componente for montado.
  // Por exemplo, o useEffect(() => {...}, [name]) executa a função de efeito sempre que a propriedade "name" for alterada,
  // o que faz com que o componente seja re-renderizado. Se a propriedade "name" não mudar, a função de efeito não é executada novamente.
  useEffect(() => {
    let i = 0;
    const text = `Hello ${name ? capitalize(name.trim()) : ""}, how are you?`;

    const typing = setInterval(() => {
      setDisplayMessage(text.slice(0, i));
      i++;
      if (i === text.length + 1) {
        clearInterval(typing);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [name]);
  // Em resumo, o primeiro parâmetro é a função de efeito que será executada, e o segundo parâmetro é a lista
  // de dependências que o useEffect deve observar para saber quando o efeito deve ser disparado novamente.

  return (
    <div className="sallut-container">
      {name ? <p>{displayMessage}</p> : null}
    </div>
  );
}

function capitalize(text) {
  let prep = ["da", "do", "das", "dos", "a", "e", "de"];
  return text
    .split(" ")
    .map((word) => {
      if (/^([A-Z]\.)+$/.test(word)) {
        return word;
      }
      word = word.toLowerCase();
      if (prep.includes(word)) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export default Sallut;
