import React, { ReactNode } from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

interface Props {
  children?: ReactNode;
  primary?: boolean;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
}

const defaultProps: Props = {
  type: 'button',
};

const Button: React.FC<Props> = ({
  primary,
  type,
  children,
  className,
}: Props) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${
        primary ? styles.primary : styles.secondary
      } ${styles.text} ${className}`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

Button.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
