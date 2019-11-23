import React, { Component } from "react";

class Quote extends Component {
  render() {
    return (
      <div className="quotes-presentation">
        {this.props.quoteText}
        <p>By: {this.props.quoteAuthor}</p>
      </div>
    );
  }
}

export default Quote;
