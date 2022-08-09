import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </main>

      </div>
    </>
  )
}