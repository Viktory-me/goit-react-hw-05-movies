import React from "react";
import PropTypes from "prop-types";
import { Contain } from "./Container.styled";

const Container = ({ children }) => {
  return <Contain>{children}</Contain>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
