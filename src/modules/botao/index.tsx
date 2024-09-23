 import styles from "./botao.module.scss"
 
 export default function Botao(props:{texto:string, type?: "button" | "submit" | "reset" | undefined}){
    const {type = "button"} = props
    return(
        <button type={type} className={styles.botao}>
            {props.texto}
        </button>
    );
 }