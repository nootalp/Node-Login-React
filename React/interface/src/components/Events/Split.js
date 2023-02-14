function Split() {
  function abbreviation(C) {
    return /^([A-Z]\.)+$/.test(C);
    // '+' diz respeito a uma ou mais ocorrências do padrão anterior;
    // '$' é uma ancoragem que indica o final de uma string;
  }
  function split(name) {
    let prep = ["da", "do", "das", "dos", "a", "e", "de", "di"];
    const part = name
      .split(" ") // Break the string in " " matches;
      .map((word) => {
        // Match for each occurence;
        if (abbreviation(word)) {
          return word;
        }
        word = word.toLowerCase();
        // Reconhece o array preposições
        if (prep.includes(word)) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
    return `${part[0]}`;
  }
  return (
    <div>
      <p></p>
    </div>
  );
}

export default Split;
