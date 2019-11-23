import React, { Component } from "react";

class Quote extends Component {
  render() {
    return (
      <div className="quotes-presentation">
        {this.props.quoteText}
        <p>
          <strong>By: {this.props.quoteAuthor}</strong>
        </p>
      </div>
    );
  }
}

export default Quote;
