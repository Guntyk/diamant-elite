import cn from 'classnames';
import { Container } from 'components/Container';
import styles from 'pages/Directions/Directions.scss';

export const BallroomSportDance = () => (
  <>
    <span className={cn(styles.wallpaper, styles.BallroomSportDance)} />
    <article className={styles.hero}>
      <h1 className={styles.title}>Спортивні бальні танці</h1>
    </article>
    <article className={styles.content}>
      <Container>
        <div className={styles.text}>
          <p className={styles.descr}>
            Спортивне танцювання забезпечує гармонійний розвиток розумових та
            фізичних здібностей та розвиток душі через творчість. Комунікація в
            парі, з наставниками та батьками дає можливість легко долати життєві
            труднощі. Координація допомагає діяти з максимальною ефективністю в
            будь-яких сферах. Концентрація навчає танцюриста ставити правильні
            цілі та способи досягнення їх. Бальні танці – це вдала колаборація
            спорту та мистецтва, де фізичні навантаження поєднуються з розвитком
            естетики. Вдале поєднання чоловічих та жіночих програм, сильного та
            прекрасного.
          </p>
        </div>
      </Container>
    </article>
  </>
);
