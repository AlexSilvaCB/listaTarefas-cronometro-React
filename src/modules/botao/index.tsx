 import styles from "./botao.module.scss"

 interface Props{
    texto:string,
    type?: "button" | "submit" | "reset" | undefined, onClick?:()=> void
 }
 
 export default function Botao({texto, type, onClick}: Props){
    return(
        <button onClick={onClick} type={type} className={styles.botao}>
            {texto}
        </button>
    );
 }