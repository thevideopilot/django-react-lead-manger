import React, { Fragment, useEffect } from "react";
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alerts = ({ error }) => {
  const alert = useAlert();

  useEffect(() => {
    alert.show("mounted");
  });

  return <Fragment />;
};

const mapStateToProps = (state) => ({
  error: state.errors,
});

Alerts.propTypes = {
  error: propTypes.object.isRequired,
};

export default connect(mapStateToProps)(Alerts);
