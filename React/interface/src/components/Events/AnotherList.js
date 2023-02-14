function AnotherList({ itens, title }) {
  return (
    <>
      {/* Para cada um dos elementos de um array à escolha, será imprimido o item
      estudado em uma tag "p"; */}
      <h3>{title}</h3>
      {/* Quando se puxa elementos de um array, deve-se referenciar
      cada elemento com um ID, que pode vir diretamente do backend. 
      Neste caso, usarei só um exemplo; */}
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Don't have items.</p>
      )}
    </>
  );
}

export default AnotherList;
