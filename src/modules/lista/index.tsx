import { Itarefa } from '@/Itypes/Itarefas';
import Item from './item/item';
import styles from './lista.module.scss'

export default function Lista(props:{tarefas: Itarefa[]}){
    return(
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {props.tarefas.map((item, index) =>(
                   <Item 
                   key={index}
                   {...item}
                   />
                ))}
            </ul>
        </aside>
    );
}