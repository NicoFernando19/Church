import Form from 'Components/ContactSections/Form/Form';
import Header from 'Components/ContactSections/Header/Header';
import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.background}>
      <Header />
      <Form />
    </div>
  );
};

export default Contact;
