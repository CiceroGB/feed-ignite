import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/CiceroGB.png" alt="Profile image" />
                    <div className={styles.authorInfo}>
                        <strong>Name</strong>
                        <span>Role</span>
                    </div>
                </div>

                <time
                    title="11 de maio"
                    dateTime="2022-05-11 08:34:11"
                >
                    time
                </time>
            </header>
            <div className={styles.content}>
                <p>Content </p>
                <p>Content </p>
                <p>Content </p>
                <a href="">post</a>



            </div>
        </article >


    )
}