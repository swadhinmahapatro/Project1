import React from "react";
import PropTypes from "prop-types";

export default function Welcome(props) {
  return (
    <div>
      <h1>
        welcome {props.name} codeNo. {props.code}
      </h1>
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.number.isRequired
};
Welcome.defaultProps = {
  name: "swadhin",
  code: 23,
};
