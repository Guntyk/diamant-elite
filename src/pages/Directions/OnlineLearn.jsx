import cn from 'classnames';
import { Container } from 'components/Container';
import styles from 'pages/Directions/Directions.scss';

export const OnlineLearn = () => (
  <>
    <span className={cn(styles.wallpaper, styles.online)} />
    <article className={styles.hero}>
      <h1 className={styles.title}>Онлайн навчання</h1>
    </article>
    <article className={styles.content}>
      <Container>
        <div className={styles.text}>
          <p className={styles.descr}>
            Сучасність подарувала нам чудову можливість навчатися, не виходячи з
            домівки. Оглядаючись на власний досвід, ми точно можемо сказати, що
            танцювальні тренування онлайн розвивають в учнях кмітливість,
            просторову орієнтацію та концентрацію, не кажучи вже про танцювальні
            навички. Онлайн заняття допомогли всім нашим учням розширити свій
            кругозір, свідомо відпрацювати та деталізувати координацію різних
            частин тіла. А ще - це зручно та весело! Тому, приєднуйся, наші
            тренери-професіонали допоможуть тобі навчитися танцювати там, де
            тобі зручно!
          </p>
        </div>
      </Container>
    </article>
  </>
);
