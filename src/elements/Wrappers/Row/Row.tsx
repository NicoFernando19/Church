import React, { ReactNode } from "react";
import styles from "./Row.module.scss";
import PropTypes from "prop-types";

interface Props {
  children?: ReactNode;
  className?: string;
}

const defaultProps: Props = {
  className: "",
};

const Row: React.FC<Props> = ({ children, className }: Props) => {
  return <div className={`${styles.row} ${className}`}>{children}</div>;
};

Row.defaultProps = defaultProps;

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Row;
