import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getleads, deleteLead } from "../../actions/leads";

export class Leads extends Component {
  static PropTypes = {
    leads: PropTypes.array.isRequired,
    getleads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getleads();
  }

  render() {
    return (
      <>
        <div className="max-w-md mx-auto">
          <h2>Leads</h2>
          <table className="table-auto mt-3 border-collapse border border-green-800">
            <thead>
              <tr className="bg-blue-200">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {this.props.leads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button
                      onClick={this.props.deleteLead.bind(this, lead.id)}
                      className="rounded-sm bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  leads: state.leadsReducer.leads,
});

export default connect(mapStateToProps, { getleads, deleteLead })(Leads);
