import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './comment.module.css'



export function Comment({content, onDeleteComment}){
    const [likeCount , setLikeCount] = useState(0) //       [[ constante para likes]] 


                                // FUNCAO PARA DELETAR COMENTARIO 
    function handleDeleteComment(){
       onDeleteComment(content);
    }

                                     // FUNCAO de contagem de likes
    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return (
    <div className={styles.comment} >
        <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/94618032?v=4" alt='' />           
 
    <div className={styles.commentBox}>
        <div className={styles.commentContent} >
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Saymon Mazzocchini</strong>
                     <time title="17/09/2022 às 10:42" dateTime="2022-09-17">cerca de 1h atrás</time>  
                </div>

                {/* DELETAR COMENTARO*/}

                    <button onClick={handleDeleteComment} title='Deletar comentário' >
                        <Trash size={24} />
                    </button>

                </header>

                <p>{content}</p>
             </div>
            
             <footer>
                <button onClick={handleLikeComment} >  {/* funcao do botao */}
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
        
    </div>
    )
}