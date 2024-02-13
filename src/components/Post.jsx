import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import * as styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/MarlonChi.png" />
          <div className={styles.authorInfo}>
            <strong>Marlon Chiodelli</strong>
            <span>WebDeveloper</span>
          </div>
        </div>
        <time title="12 de Fevereiro as 15:40" dateTime="2024-02-21 15:40:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#rocketseat</a>{" "}
          <a href="">#nlw</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
