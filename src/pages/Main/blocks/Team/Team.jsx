import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderOptions } from 'pages/Main/blocks/Team/sliderOptions';
import { team } from 'constants/team';
import { Container } from 'components/Container';
import { Employee } from 'pages/Main/blocks/Team/Employee';
import styles from 'pages/Main/blocks/Team/Team.scss';

import 'swiper/css';

export const Team = () => {
  return (
    <article className={styles.team}>
      <Container>
        <h4 className={styles.title}>Наша команда</h4>
        <div className={styles.slider}>
          <button className={cn(styles.btn, styles.prev)} id='btnPrev' />
          <Swiper className={styles.teamList} {...sliderOptions}>
            {team.map((employee) => (
              <SwiperSlide className={styles.employee} key={employee.id}>
                <Employee employee={employee} />
              </SwiperSlide>
            ))}
            <div id='pagination' className={styles.pagination}></div>
          </Swiper>
          <button className={cn(styles.btn, styles.next)} id='btnNext' />
        </div>
      </Container>
    </article>
  );
};
