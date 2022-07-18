import Text from 'elements/text/Text';
import React from 'react';
import styles from './CardV2.module.scss';

interface Props {
  title?: string;
  desc?: string;
  speaker: string;
  date: string;
  className?: string;
}

const defaultProps = {
  title: 'WATCH AND LISTEN TO OUR SERMONS',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  speaker: 'By Mathew Johnson',
  date: 'Tuesday 13 May, 2021',
  className: '',
};

const CardV2 = ({ title, desc, speaker, date, className }: Props) => {
  return (
    <div className={`${styles.card} ${styles.bgColor} ${className}`}>
      <div className={styles.padding}>
        <Text className={styles.relation}>Relationship</Text>
        <Text heading={'h5'} className={styles.title}>
          {title}
        </Text>
        <Text heading={'h6'} className={styles.desc}>
          {desc}
        </Text>
        <Text className={styles.speaker}>{speaker}</Text>
        <Text className={styles.date}>{date}</Text>
      </div>
      <div className={styles.cardFooter}></div>
    </div>
  );
};

CardV2.defaultProps = defaultProps;

export default CardV2;
