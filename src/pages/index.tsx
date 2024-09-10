import Cronometro from "@/modules/cronometro";
import Formulario from "@/modules/formulario";
import Lista from "@/modules/lista";

export default function Home() {
  return (
   <div className="AppStyle" >
      <Formulario />
      <Lista />
      <Cronometro />
   </div>
  );
}
