import styles from './sidebar.module.css'
import {Avatar} from './Avatar'
import { PencilLine } from 'phosphor-react'

export function Sidebar(){
    return (
    <aside className={styles.Sidebar}>
         <img className={styles.cover} 
         src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" 
         />
    
    <div className={styles.profile}>
       <Avatar src="https://avatars.githubusercontent.com/u/94618032?v=4" />
        <strong>Saymon Mazzocchini</strong>
        <span>Web Developer</span>
    </div>

        <footer>
          
        <a href="#" >
        <PencilLine size={20}/> Editar seu perfil</a>
         </footer>
    </aside>
    );
}