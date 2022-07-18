import React from 'react';
import Text from 'elements/text/Text';
import Container from 'elements/wrapper/container/Container';
import Row from 'elements/wrapper/row/Row';
import styles from './Form.module.scss';
import Input from 'elements/input/Input';
import Button from 'elements/button/Button';

const Form = () => {
  return (
    <Container className={styles.padding}>
      <Row className={styles.rowHeader}>
        <Text heading={'h5'} className={styles.headPage}>
          Contact Form:
        </Text>
      </Row>
      <Row className={styles.row}>
        <div className={styles.leftSide}>
          <form>
            <Input
              type={'text'}
              className={styles.input}
              placeholder={'Your Full Name'}
            ></Input>
            <Input
              type={'text'}
              className={styles.input}
              placeholder={'Your Email'}
            ></Input>
            <Input
              type={'text'}
              className={styles.input}
              placeholder={'Query Related'}
            ></Input>
            <textarea
              className={`${styles.input} ${styles.textArea}`}
              id='message'
              name='message'
              placeholder='Message'
            ></textarea>
            <Button primary={true} className={styles.button}>
              Send Message
            </Button>
          </form>
        </div>
        <div className={styles.rightSide}>
          <Text className={styles.header}>Address</Text>
          <Text heading={'h5'} className={styles.subHeader}>
            NH 234 Public Square San Francisco 65368
          </Text>
          <Text className={styles.header}>Contact Details</Text>
          <Text heading={'h5'} className={styles.subHeader}>
            (480) 555-0103
            <br />
            finsweet@example.com
          </Text>
          <Text className={styles.header}>Find us here</Text>
          <div className={styles.socialMedia}>
            <a
              href='#'
              target='_blank'
              rel='noreferrer'
              className={`${styles.socmed} ${styles.facebook}`}
            ></a>
            <a
              href='#'
              target='_blank'
              rel='noreferrer'
              className={`${styles.socmed} ${styles.twitter}`}
            ></a>
            <a
              href='#'
              target='_blank'
              rel='noreferrer'
              className={`${styles.socmed} ${styles.linkedin}`}
            ></a>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Form;
