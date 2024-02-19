import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/mateus-dev-me.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Marcelo</strong>
                            <time
                                title='03 de Fevereiro às 20:38'
                                dateTime='2024-02-03 20:38:00'>Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Rapaz, parabéns</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
