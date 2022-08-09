import { PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=50"       />
           
            <div className={styles.profile}>
                <img className={styles.avatar}src="https://github.com/CiceroGB.png" alt="Profile image" />
                <strong>Cicero Brunelli</strong>
                <span>Full Stack Developer</span>
            </div>
            <footer>
                <a>
                <PencilLine  size={20} />
                    Edit your profile
                </a>
            </footer>
        </aside>
    )
}