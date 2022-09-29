import { format , formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './comment'
import styles from './Post.module.css'



/* usar {} no className quando é uma variavel  */
export function Post ( {author, publishedAt, content} ) {
  
    const [comments,setComments ] = useState([
    'Post muito bom',
]);
        //newCommenText variavel que tem o novo texto do textArea
    const [newCommenText,setNewCommenText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
       locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR ,
        addSuffix: true
                                                    // FUNCOES 
    })

                                      //retorno da textarea (NOVO COMENTARIO)

    function handleCreateNewComment(){
        event.preventDefault()
        
       setComments([...comments, newCommenText ]);
       setNewCommenText('');
    }
                                   // armazenar o que foi escrito na texteArea

    function handleNewCommentChange(){
        event.target.setCustomValidity('')
        setNewCommenText(event.target.value);   
    }

        
                                    //   função para DELETAR

    function deleteComment(commentToDelete){
       const commentsWithoutDeletedOne = comments.filter(comment =>{
            return comment != commentToDelete;
       })

       setComments(commentsWithoutDeletedOne);
    }


                                        // funcao para validar a textarea
    function handleNewCommentInvalid(){
            event.target.setCustomValidity(' Esse campo é obrigatorio!')
    }

                            /* parte do cabecalho */
   
    const isNewCommentEmpty =newCommenText.length == 0;

    return (   
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
                return <p key={line.content} >{line.content}</p>
            }else if( line.type === 'link' ){
                return <p key={line.content}  ><a href='#'>{line.content}</a></p>
            }
        })}
        </div>
              
                                                       {/*conteudo do comentario  */}

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong> Deixe seu feedback</strong>
                                                 { /* texteArea*/}
            <textarea
                name="comment"
                placeholder='Deixe um comentario'
                value={newCommenText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
              />       {/* BOTAO  */}
             <footer>
                   <button type="submit" disabled={isNewCommentEmpty}>
                    Publicar
                    </button>
             </footer>
        </form>

                                                  {/*lista de comentarios*/}
        
        <div className={styles.commentList}>
            {comments.map(comment => {
                return (
                <Comment 
                    key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment}
                    />
                )
            })}
        </div>
        

        
    </article>
    )
}