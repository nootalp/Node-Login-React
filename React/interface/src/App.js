import "./App.css";
// import Event from "./components/Click";
import Form from "./components/Form";

// import Hello from "./components/HelloWorld";
// import Item from "./components/Item";
// import List from "./components/List";

// const name = capitalize("Gabriel Gomes Tatsch");

// function abbreviation(C) {
//   return /^([A-Z]\.)+$/.test(C);
//   // '+' diz respeito a uma ou mais ocorrências do padrão anterior;
//   // '$' é uma ancoragem que indica o final de uma string;
// }
// function capitalize(text) {
//   let prep = ["da", "do", "das", "dos", "a", "e", "de"];
//   return (
//     text
//       .split(" ") // Break the string in " " matches;
//       .map((word) => {
//         // Match for each occurence;
//         if (abbreviation(word)) {
//           return word;
//         }
//         word = word.toLowerCase();
//         if (prep.includes(word)) {
//           return word;
//         }
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       })
//       // Join the break words again;
//       .join(" ")
//   );
// }

// function split(name) {
//   let prep = ["da", "do", "das", "dos", "a", "e", "de", "di"];
//   const part = name
//     .split(" ") // Break the string in " " matches;
//     .map((word) => {
//       // Match for each occurence;
//       if (abbreviation(word)) {
//         return word;
//       }
//       word = word.toLowerCase();
//       // Reconhece o array preposições
//       if (prep.includes(word)) {
//         return word;
//       }
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//   return `${part[0]}`;
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, {name}.</h1>
//       <Hello name={split(name)} />
//       <Item mark="Renault" age={1980} />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
