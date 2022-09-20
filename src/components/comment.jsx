import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'


export function Comment(){
    return (
    <div className={styles.comment} >
        <img src="https://avatars.githubusercontent.com/u/94618032?v=4" alt='' />           
 
    <div className={styles.commentBox}>
        <div className={styles.commentContent} >
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Saymon Mazzocchini</strong>
                     <time title="17/09/2022 às 10:42" dateTime="2022-09-17">cerca de 1h atrás</time>  
                </div>
                    <button title='Deletar comentário' >
                        <Trash size={24} />
                    </button>

                </header>

                <p>Muito bom Devon, parabéns!! 👏👏</p>
             </div>
            
             <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
        
    </div>
    )
}