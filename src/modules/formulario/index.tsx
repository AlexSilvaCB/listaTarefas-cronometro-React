import { useState } from "react";
import Botao from "../botao";
import styles from  "./formulario.module.scss"
import { Itarefa } from "@/Itypes/Itarefas";
import { v4 as uuidv4 } from "uuid";

interface Props {
    setFormulario: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

export default function Formulario({ setFormulario }: Props){
    const [tState, setState]=useState(
        {
            tarefa:"",
            tempo:"00:00"
        }
    )

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault()
        setFormulario(tarefasAntigas => 
            [...tarefasAntigas, 
                {
                    ...tState, 
                    selecionado:false, 
                    completado:false,
                    id: uuidv4()
                }])
        setState({
            tarefa: "",
            tempo:"00:00"
        })
    }

    return(
        <form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={styles.inputContainer}>
                <label htmlFor="tarefa">
                    Adicionar um novo estudo
                </label>
                <input type="text"
                        name="tarefa"
                        value={tState.tarefa}
                        onChange={evento => setState({...tState, tarefa: evento.target.value})}
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
                        value={tState.tempo}
                        onChange={evento => setState({ ...tState, tempo: evento.target.value})}
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required/>
            </div>
                <Botao texto={'Adicionar'} type="submit" />
        </form>
    );
}