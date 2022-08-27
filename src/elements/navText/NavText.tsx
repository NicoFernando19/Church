import React, { ReactNode } from 'react';
import styles from './NavText.module.scss';
import PropTypes from 'prop-types';

interface Props {
  children?: ReactNode;
}

const NavText = ({ children }: Props) => {
  return <span className={`${styles.navText}`}>{children}</span>;
};

NavText.propTypes = {
  children: PropTypes.node,
};

export default NavText;
