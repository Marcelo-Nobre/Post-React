import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={props.author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>João Marcelo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time
                    title='03 de Fevereiro às 20:38'
                    dateTime='2024-02-03 20:38:00'>Publicado há 1h
                </time>

            </header>
            <div className={styles.content}>
                <p>
                    <p>Fala galeraa 👋</p>

                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p><a href="#"> jane.design/doctorcare </a></p>

                    <p>
                        <a href="#">#novoprojeto</a>{' '}
                        <a href="#"> #nlw </a>{' '}
                        <a href="#"> #rocketseat</a>
                    </p>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}
