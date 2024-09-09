 import styles from "./botao.module.scss"
 
 export default function Botao(props:{texto:string}){
    return(
        <button className={styles.botao}>
            {props.texto}
        </button>
    );
 }