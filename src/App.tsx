import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/helen-andrade.png',
      name: 'Helen Andrade',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Hello, world! 👋'},
      {type: 'paragraph', content: 'Projeto realizado utilizando o ReactJs'},
      {type: 'link', content: '👉 programador.com'}
    ],
    publishedAt: new Date('2023-11-25 19:40:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/viniciusmazon.png',
      name: 'Vinicius Mazon',
      role: 'Web Developer Full'
    },
    content: [
      {type: 'paragraph', content: 'Hello, world! 👋'},
      {type: 'paragraph', content: 'Projeto realizado utilizando o ReactJs'},
      {type: 'link', content: '👉 programador.com'}
    ],
    publishedAt: new Date('2023-11-21 11:25:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}