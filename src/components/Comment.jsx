import styles from './Comment.module.css'
import { Trash ,ThumbsUp} from 'phosphor-react'

export function Comment() {
    return(
        <div className={styles.comment}>
      <img  
        src="https://github.com/cicerogb.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Cicero Brunelli</strong>
              <time title="May 11 at 08:13h" dateTime="2022-05-11 08:13:00">About 1 hour ago.</time>
            </div>

            <button  title="Delete comment">
            <Trash size={24} />
            </button>
          </header>

          <p>Content</p>
        </div>

        <footer>
          <button >
          <ThumbsUp />
            Clap <span>20</span>
          </button>
        </footer>
      </div>
    </div>
    )
}