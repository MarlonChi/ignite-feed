import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import * as styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post muito bacana!"]);
  const [comment, setComment] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH':'mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, comment]);

    setComment("");
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeleteOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                👉 <a href="">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            comment={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
