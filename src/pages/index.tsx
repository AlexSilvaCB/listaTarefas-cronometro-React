import { Itarefa } from "@/Itypes/Itarefas";
import Cronometro from "@/modules/cronometro";
import Formulario from "@/modules/formulario";
import Lista from "@/modules/lista";
import { useState } from "react";

export default function Home() {
  const [tarefas, setTarefas]=useState<Itarefa[]>([]);
  const [selecionado, setSelecionado]=useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
  })))
  }

  function finalizarTarefa(){
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado:true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
   <div className="AppStyle" >
      <Formulario setFormulario={setTarefas} />
      <Lista 
      tarefas={tarefas} 
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
      selecionado={selecionado} 
      finalizarTarefa={finalizarTarefa}
      />
   </div>
  );
}
