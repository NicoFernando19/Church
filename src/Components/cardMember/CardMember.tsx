import Text from 'elements/text/Text';
import React from 'react';
import styles from './CardMember.module.scss';

interface Props {
  image: string;
  name: string;
  position: string;
  facebookLink: string;
  twitterLink: string;
  linkedInLink: string;
}

const CardMember = ({
  image = '#',
  name = 'Santos Payne',
  position = 'Pastor, Church',
  facebookLink = '#',
  twitterLink = '#',
  linkedInLink = '#',
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.cardImage} ${image}`}></div>
      <Text heading={'h5'} className={styles.name}>
        {name}
      </Text>
      <Text heading={'h6'} className={styles.position}>
        {position}
      </Text>
      <div className={styles.socialMedia}>
        <a
          href={facebookLink}
          target='_blank'
          rel='noreferrer'
          className={`${styles.socmed} ${styles.facebook}`}
        ></a>
        <a
          href={twitterLink}
          target='_blank'
          rel='noreferrer'
          className={`${styles.socmed} ${styles.twitter}`}
        ></a>
        <a
          href={linkedInLink}
          target='_blank'
          rel='noreferrer'
          className={`${styles.socmed} ${styles.linkedin}`}
        ></a>
      </div>
    </div>
  );
};

export default CardMember;
