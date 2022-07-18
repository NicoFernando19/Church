import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.module.scss';
import Text from 'elements/text/Text';
import Button from 'elements/button/Button';

interface Props {
  title?: string;
  desc?: string;
  date?: string;
  month?: string;
  time?: string;
  address?: string;
  image?: string;
  button: boolean;
  className?: string;
}

const defaultProps: Props = {
  title: 'Watch and Listen to our Sermons',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  date: '20',
  month: 'July',
  time: 'Friday 23:39 IST Saturday 11:20 ISD',
  address: 'No 233 Main St. New York, United States',
  image: styles.angelImage,
  button: true,
  className: '',
};

const Event = ({
  title,
  desc,
  date,
  month,
  time,
  address,
  image,
  button = true,
  className,
}: Props) => {
  return (
    <div className={`${styles.event} ${className}`}>
      <div className={styles.card}>
        <div className={styles.padding}>
          <Text heading={'h5'} className={styles.date}>
            {date}
          </Text>
          <div className={styles.header}>
            <Text className={styles.upcomingText}>Upcoming Event</Text>
            <Text heading={'h6'} className={styles.month}>
              {month}
            </Text>
          </div>
          <Text heading={'h5'} className={styles.title}>
            {title}
          </Text>
          <Text heading={'h6'} className={styles.desc}>
            {desc}
          </Text>
          <div className={styles.timeWrapper}>
            <div className={styles.timeIcon}></div>
            <Text heading={'h6'} className={styles.time}>
              {time}
            </Text>
          </div>
          <div className={styles.addressWrapper}>
            <div className={styles.addressIcon}></div>
            <Text heading={'h6'} className={styles.address}>
              {address}
            </Text>
          </div>
          <div className={button ? styles.dBlock : styles.dNone}>
            <Button>Register</Button>
          </div>
        </div>
        <div className={button ? '' : styles.cardFooter}></div>
      </div>
      <div
        className={`${styles.image} ${image ? image : styles.angelImage}`}
      ></div>
    </div>
  );
};

Event.defaultProps = defaultProps;

Event.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  date: PropTypes.string,
  month: PropTypes.string,
  time: PropTypes.string,
  address: PropTypes.string,
  image: PropTypes.string,
};

export default Event;
