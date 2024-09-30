import { Itarefa } from '@/Itypes/Itarefas';
import Item from './item';
import styles from './lista.module.scss'

interface Props{
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

export default function Lista({tarefas, selecionaTarefa}: Props){
    return(
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) =>(
                   <Item 
                   selecionaTarefa={selecionaTarefa}
                   key={item.id}
                   {...item}
                   />
                ))}
            </ul>
        </aside>
    );
}