import { Itarefa } from "@/Itypes/Itarefas";
import Cronometro from "@/modules/cronometro";
import Formulario from "@/modules/formulario";
import Lista from "@/modules/lista";
import { useState } from "react";

export default function Home() {
  const [tarefas, setTarefas]=useState<Itarefa[]>([]);
  return (
   <div className="AppStyle" >
      <Formulario setFormulario={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
   </div>
  );
}
