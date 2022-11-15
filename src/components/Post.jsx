import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Nice one!'
    ]);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });


    function handleCrateNewComment(event) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event) {
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)
        setComments(commentsWithoutDeletedOne);
    }

    

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') return <p key={line.content}>{line.content}</p>;
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
                )}
            </div>

            <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
                <strong>Send your feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Type your comment here"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    required
                />

                <footer>
                    <button type="submit" >
                        Publish
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => (
                    <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />)
                )}
            </div>


        </article >


    )
}