import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { shuffleArray } from 'helpers/shuffleArray';
import { sliderOptions } from 'pages/Main/blocks/Testimonials/sliderOptions';
import { testimonials } from 'constants/testimonials';
import { Container } from 'components/Container';
import person from 'assets/images/feedback/user.webp';
import styles from 'pages/Main/blocks/Testimonials/Testimonials.scss';

export const Testimonials = () => {
  const [shuffledTestimonials, setShuffledTestimonials] = useState([]);
  const [isOverflowing, setIsOverflowing] = useState({});

  const descriptionRefs = useRef([]);

  useEffect(() => {
    const shuffled = shuffleArray([...testimonials]);
    setShuffledTestimonials(shuffled);
  }, []);

  useEffect(() => {
    if (shuffledTestimonials.length > 0) {
      descriptionRefs.current.forEach((descRef, index) => {
        if (descRef) {
          const isTextOverflowing = descRef.scrollHeight > descRef.clientHeight;
          setIsOverflowing((prevState) => ({
            ...prevState,
            [index]: isTextOverflowing,
          }));
        }
      });
    }
  }, [shuffledTestimonials]);

  const handleShowMore = (index) => {
    console.log(`Show more for testimonial ${index}`);
  };

  return (
    <section className={styles.feedback}>
      <Container>
        <h4 className={styles.title}>Відгуки</h4>
        <div className={styles.slider}>
          <button className={cn(styles.btn, styles.prev)} id='btnPrevReview' />
          <Swiper className={styles.testimonials} {...sliderOptions}>
            {shuffledTestimonials.map(({ id, name, role, text, photo }, index) => (
              <SwiperSlide key={id}>
                <div className={styles.review}>
                  <img src={photo ?? person} className={styles.photo} alt={name} />
                  <div className={styles.content}>
                    <div className={styles.info}>
                      <p className={styles.name}>{name}</p>
                      <p className={styles.role}>{role}</p>
                    </div>
                    <div className={styles.description} ref={(el) => (descriptionRefs.current[index] = el)}>
                      {text}
                    </div>
                    {isOverflowing[index] && (
                      <button onClick={() => handleShowMore(index)} className={styles.moreBtn}>
                        Більше
                      </button>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div id='paginationReview' className={styles.pagination}></div>
          </Swiper>
          <button className={cn(styles.btn, styles.next)} id='btnNextReview' />
        </div>
      </Container>
    </section>
  );
};
