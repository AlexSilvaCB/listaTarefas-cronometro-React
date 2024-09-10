import Botao from "../botao";
import styles from "./cronometro.module.scss"
import Relogio from "./relogio";

export default function Cronometro(){
    return(
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={styles.relogioWrapper}>
              <Relogio />
            </div>
            <Botao texto={"Iniciar"} />
        </div>
    );
}