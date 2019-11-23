import React, { Component } from "react";
import PropTypes from "prop-types";

class AddQuote extends Component {
  state = {
    quote: []
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("Submitting", this.state.quote);
    this.props.addQuote(this.state.quote);
    this.setState({ quote: [] });
  };

  handleChange = event => {
    this.setState({
      quote: event.target.value
    });
  };

  render() {
    return (
      <div className="add-quote">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Search Quote
            <input
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.quote}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

AddQuote.propTypes = {
  addQuote: PropTypes.func.isRequired
};

export default AddQuote;
