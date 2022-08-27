import React, { ReactNode } from 'react';
import styles from './Tile.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
}

const defaultProps = {
  className: '',
};

const Tile = ({ children, className }: Props) => {
  return <div className={`${styles.tile} ${className}`}>{children}</div>;
};

Tile.defaultProps = defaultProps;

export default Tile;
