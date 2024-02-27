import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0)

  //criando função pra deletar comentário
  //essa função vai herdar o elemento do componente Post onDeleteComment() e boto como argumento o conteudo
  function handleDeleteComment() {
    //passo a propiedade com o conteudo do comentário (content)
    onDeleteComment(content)
  }

  //função pra contar os likes
  function handleLikeComment() {
    //o state retorna o valor mais atual de setLikeCount
    setLikeCount((state) => {
      return state + 1
    })
  }

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

            <button onClick={handleDeleteComment}
              title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
