import React from 'react';
import Tile from 'elements/wrapper/tile/Tile';
import Text from 'elements/text/Text';
import styles from './RecentPost.module.scss';
import Kids from 'Storage/blogImage/kids.png';
import Button from 'elements/button/Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface Props {
  imageSrc?: string;
  date: string;
  creator: string;
  title: string;
  desc: string;
}

const RecentPost = ({
  imageSrc = '',
  date = 'Tuesday 13 May, 2022',
  creator = 'By John Hunau Deo',
  title = 'Church was doing what he often did when dropped An oracle',
  desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor.',
}: Props) => {
  const { pathname } = useLocation();
  return (
    <Tile className={styles.display}>
      <div>
        <img src={imageSrc === '' ? Kids : imageSrc} />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.head}>
          <Text heading={'h6'} className={styles.headText}>
            {date}
          </Text>
          <Text heading={'h6'} className={styles.headText}>
            {creator}
          </Text>
        </div>
        <Text heading={'h4'} className={styles.title}>
          {title}
        </Text>
        <Text heading={'h6'} className={styles.desc}>
          {desc}
        </Text>
        <Link to={`${pathname}/${title.replaceAll(' ', '_')}`}>
          <Button primary={true}>Read More</Button>
        </Link>
      </div>
    </Tile>
  );
};

export default RecentPost;
