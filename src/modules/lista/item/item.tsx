import { Itarefa } from "@/Itypes/Itarefas";
import styles from "../lista.module.scss"

export default function Item({tarefa, tempo, selecionado, completado, id}: Itarefa){
    console.log(tarefa, tempo, selecionado, completado, id)
    return(
        <li className={styles.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    );
}