import { useState } from 'react';
import cn from 'classnames';
import { Container } from 'components/Container';
import { Button } from 'components/Button';
import styles from 'pages/Main/blocks/Feedback/Feedback.scss';

export const Feedback = () => {
  const [errors, setErrors] = useState({ nameError: false, phoneError: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;

    if (!name || !phone) {
      setErrors({ nameError: !name, phoneError: !phone });
      return;
    }

    const message = {
      name,
      phone,
    };

    console.log(message);

    // chatIds.forEach((chatId) => {
    //   axios.post('https://api.telegram.org/bot5603004166:AAFen05We0DnU5I5p5xcdENooDn-MRBYlxQ/sendMessage', {
    //     chat_id: chatId,
    //     text: message,
    //   });
    // });
  };

  return (
    <section className={styles.form}>
      <Container>
        <div className={styles.send}>
          <form onSubmit={handleSubmit}>
            <input
              className={cn(styles.input, { [styles.invalid]: errors.nameError })}
              name='name'
              placeholder="Ім'я"
            />
            <input
              className={cn(styles.input, { [styles.invalid]: errors.phoneError })}
              type='tel'
              inputMode='numeric'
              name='phone'
              placeholder='Номер телефону'
            />
            <Button type='submit' className={styles.btn}>
              Надіслати
            </Button>
          </form>
          <div className={styles.text}>
            <h4 className={styles.title}>Зворотній зв'язок</h4>
            <p className={styles.subtitle}>Ми передзвонимо та детально відповімо на усі ваші запитання</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
