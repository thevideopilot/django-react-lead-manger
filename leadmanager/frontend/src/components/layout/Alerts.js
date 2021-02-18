import React, { Fragment, useEffect, useRef } from "react";
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alerts = ({ error }) => {
  const alert = useAlert();
  const mounted = useRef();

  Alerts.propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  useEffect(() => {
    if (error.msg.name) {
      alert.error(`Name: ${error.msg.name.join()}`);
    }
    if (error.msg.email) {
      alert.error(`Email: ${error.msg.email.join()}`);
    }
    if (error.msg.message) {
      alert.error(`Message: ${error.msg.message.join()}`);
    }
  }, [error]);

  // Error when I try to show alert for lead deleted
  // useEffect(() => {
  //   if (message.deleteLead) {
  //     alert.success(message.deleteLead);
  //   }
  // }, [message]);

  // useEffect(() => {
  //   if (mounted.current) {
  //     alert.error("There's an error");
  //     mounted.current = true;
  //   }
  // }, [error]);

  return <Fragment />;
};

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(Alerts);
