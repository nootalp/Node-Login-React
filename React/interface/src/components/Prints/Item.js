import PropTypes from "prop-types";

// Coloque as propriedades que serão retornadas em linha;
function Item({ mark, age }) {
  return (
    <>
      <li>
        {mark} - {age}
      </li>
    </>
  );
}
// Defina um tipo de propriedade para mark e age;
// .isRequired é uma propriedade que deve ser inserida;
Item.propTypes = {
  mark: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

Item.defaultProps = {
  mark: "The mark was missing.",
  age: 0,
};

export default Item;
