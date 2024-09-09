import Botao from "../botao";
import styles from  "./formulario.module.scss"

export default function Formulario(){
    return(
        <form className={styles.novaTarefa}>
            <div className={styles.inputContainer}>
                <label htmlFor="tarefa">
                    Adicionar um novo estudo
                </label>
                <input type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar"
                        required />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input type="time" 
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required/>
            </div>
            <div>
                <Botao texto={'Adicionar'} />
            </div>

        </form>
    );
}