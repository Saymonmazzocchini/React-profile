import {Post} from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/sidebar';

import styles from './App.module.css';
import './global.css';

const posts =[    //poste 1
  {
    id:1,
    author: {
        avatarUrl:'https://github.diego3g.png',
        nome: 'Diego Fernandes',
        role: 'CTO @ Rocketseat'
    },
    content:[
      {type:'paragraph', content: 'Fala galeraa 👋'},
      {type:'paragraph',  content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
       publishedAt: new Date('2022-09-23 10:50'),        
  },
         //poste 2
 {        
  id:2,
  author: {
      avatarUrl:'https://github.maykbrito.png',
      nome: 'Mayk Brito',
      role: 'Educator @Rocketseat'
  },
  content: [
    {type:'paragrafo', content: 'Fala galeraa 👋'},
    {type:'paragrafo',  content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
    {type: 'link', content: 'jane.design/doctorcare'},
  ],
     publishedAt: new Date('2022-09-15 10:50'),        
   },
];

export function App() {
  return (
    <div>
      <Header />
      
    <div className={styles.wrapper}>
         <Sidebar />
    <main>   
      {posts.map(post =>{
        return (<
          Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
          />)
      }) }
    </main>
    </div>
  </div>
  )
}

