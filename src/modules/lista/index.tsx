import Item from './item/item';
import styles from './lista.module.scss'

export default function Lista(){
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '01:00:00'
    },{
        tarefa:'Javascript',
        tempo: '01:30:00'
    }]
    return(
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) =>(
                   <Item 
                   key={index}
                   {...item}
                   />
                ))}
            </ul>
        </aside>
    );
}