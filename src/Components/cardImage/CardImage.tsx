import React from 'react';
import Text from 'Elements/Text/Text';
import styles from './CardImage.module.scss';
import PropTypes from 'prop-types';

interface Props {
  image: string;
  title: string;
  desc: string;
}

const defaultProps: Props = {
  image: styles.defaultBackground,
  title: 'Watch and listen to our sermons',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
};

const CardImage = ({ image, title, desc }: Props) => {
  return (
    <div className={`${styles.background} ${image}`}>
      <div className={styles.titleWrapper}>
        <Text heading={'h4'} className={styles.title}>
          {title}
        </Text>
        <Text className={styles.desc}>{desc}</Text>
      </div>
    </div>
  );
};

CardImage.defaultProps = defaultProps;

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default CardImage;
