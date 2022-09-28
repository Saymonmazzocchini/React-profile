import { format , formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './comment'
import styles from './Post.module.css'



/* usar {} no className quando é uma variavel  */
export function Post ( {author, publishedAt, content} ) {
  
    const [comments,setComments ] = useState([
    1,
    2,
    
]);


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
       locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR ,
        addSuffix: true

    })

    function handleCreateNewComment(){
        event.preventDefault()

        setComments([...comments,comments.length +1 ]);
    }


    return (   /* parte do cabecalho */
    <article className={styles.post} >
        <header>
        <div className={styles.author} >
            <Avatar src={author.avatarUrl}/>        
        <div className={styles.authorInfo} >
            <strong>{author.nome}</strong>
            <span>{author.role}</span>
        </div>
        </div>
            <time title={publishedDateFormatted} daTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow }
            </time>  
        </header>
                    { /* conteudo  do post*/ }
                    
        <div className={styles.content}>
        {content.map(line =>{
            if( line.type ==='paragraph' ){
                return <p>{line.content}</p>
            }else if( line.type === 'link' ){
                return <p><a href='#'>{line.content}</a></p>
            }
        })}
        </div>
              
              {/*conteudo do comentario  */}

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong> Deixe seu feedback</strong>

            <textarea
                placeholder='Deixe um comentario'
            />
             <footer>
                   <button type="submit">Publicar</button>
             </footer>
        </form>
        
        <div className={styles.commentList}>
            {comments.map(comment => {
                return <Comment />
            })}
        </div>
        

        
    </article>
    )
}