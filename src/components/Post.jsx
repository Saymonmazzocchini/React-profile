import { Comment } from './comment'
import styles from './Post.module.css'

/* usar {} no className quando é uma variavel  */
export function Post () {
    return (   /* parte do cabecalho */
    <article className={styles.post} >
        <header>
        <div className={styles.author} >
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/94618032?v=4" />        
        <div className={styles.authorInfo} >
            <strong>Saymon Mazzocchini</strong>
            <span> Web Developer</span>
        </div>
        </div>
            <time title="17/09/2022 às 10:42" daaTime="2022-09-17">Publicado há 1h</time>  
        </header>
                    { /* conteudo  do post*/ }
                    
        <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
        <p> 👉{' '}<a href='#'> jane.design/doctorcare </a></p>
        <p>           
            <a href='#'>#novoprojeto </a>{' '}
            <a href='#'> #nlw </a> {' '}
            <a href='#'>#rocketseat</a>{' '}
            
        </p>
        </div>
              
              {/*conteudo do comentario  */}

        <form className={styles.commentForm}>
            <strong> Deixe seu feedback</strong>
            <textarea
                placeholder='Deixe um comentario'
            />
             <footer>
                   <button type="submit">Publicar</button>
             </footer>
        </form>
        
        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
        

        
    </article>
    )
}