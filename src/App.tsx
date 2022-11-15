import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/cicerogb.png',
      name: 'Cicero Brunelli',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hello everyone 👋' },
      { type: 'paragraph', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
      { type: 'link', content: 'content.info' },
    ],
    publishedAt: new Date('2022-11-03 22:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/cicerogb.png',
      name: 'Cicero Brunelli',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hello everyone 👋' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
      { type: 'link', content: 'content.info' },
    ],
    publishedAt: new Date('2022-11-10 10:00:00'),
  },
];


export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt} />
          ))}
        </main>

      </div>
    </>
  )
}