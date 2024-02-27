import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

  //comments é uma váriavel e setComments é uma função
  const [comments, setComments] = useState(['Post muito bacana ein?'])

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true

  })

  function handleCreateNewComment(event) {
    if (event.target.comment.value == '') {
      return
    }
    //pra página não recarregar
    event.preventDefault()
    //pega o valor do textarea
    const newCommentText = event.target.comment.value
    //seta um novo valor e salva ele na váriavel comments ...comments é pra armazenar todos os valores anterires
    setComments([...comments, newCommentText]);
    //limpa o input
    setNewCommentText('');
  }

  //essa função faz o textarea escutar/refletir o que está acontecendo
  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value);
  }

  //função onde vou passar a propiedade pro elemento filho 'comment'
  //então inicio ela com um parametro comentário porque é oq eu vou querer apagar
  function deleteComment(commentToDelete) {
    //imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
    const commentsWithoutDeletedOne = comments.filter(comment => {
      //mantem na lista os comentários diferentes do que eu quero deletar
      return comment !== commentToDelete
    })
    //aqui eu passo a função setComments() com o parametro comment
    setComments(commentsWithoutDeletedOne)

  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>João Marcelo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>

      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type == 'link') {
            return <p key={line.content}><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  );
}
