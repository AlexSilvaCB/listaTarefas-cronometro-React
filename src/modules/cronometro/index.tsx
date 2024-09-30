import { Itarefa } from "@/Itypes/Itarefas";
import Botao from "../botao";
import styles from "./cronometro.module.scss"
import Relogio from "./relogio";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "@/common/utils/time";

interface Props{
    selecionado: Itarefa | undefined, finalizarTarefa:() => void
}

export default function Cronometro({selecionado, finalizarTarefa}:Props){
    const [tempo, setTempo] = useState<number>()

    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado?.tempo))
        }
    }, [selecionado]);

    function regressiva(contador: number = 0){
        setTimeout(()=> {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000)
    }
   
    return(
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={styles.relogioWrapper}>
              <Relogio tempo={tempo} />
            </div>
            <Botao texto={"Iniciar"} onClick={()=> regressiva(tempo)} />
        </div>
    );
}