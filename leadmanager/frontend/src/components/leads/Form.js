import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getleads, deleteLead, addLead } from "../../actions/leads";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="max-w-md mx-auto mt-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit} className="mx-auto max-w-md">
          <div>
            <label
              for="email"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                value={name}
                name="name"
                onChange={this.onChange}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="wande"
              />
            </div>
          </div>
          <br />
          <div>
            <label
              for="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                type="text"
                value={email}
                name="email"
                onChange={this.onChange}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <br />
          <div>
            <label
              for="email"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                type="text"
                value={message}
                name="message"
                onChange={this.onChange}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Your message here"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={this.onSubmit}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Lead
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
