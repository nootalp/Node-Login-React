import styles from "./Frase.module.css";

function Hello(props) {
  return (
    /* Referencie com styles.{nome da classe} */
    <div className={styles.phraseContent}>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}

export default Hello;
