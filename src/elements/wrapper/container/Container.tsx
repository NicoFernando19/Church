import React, { ReactNode } from "react";
import styles from "./Container.module.scss";
import PropTypes from "prop-types";

interface Props {
  children?: ReactNode;
  className?: string;
}

const defaultProps: Props = {
  className: "",
};

const Container = ({ children, className }: Props) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

Container.defaultProps = defaultProps;

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;
