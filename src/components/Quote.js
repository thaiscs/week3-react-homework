import React, { Component } from "react";

class Quote extends Component {
  state = {
    color: "black",
    textDecoration: ""
  };

  dislikedQuote = (color, textDecoration) => {
    // console.log("TESTING");
    this.setState({ color: color, textDecoration: textDecoration });
  };

  likedQuote = color => {
    // console.log("TESTING");
    this.setState({ color: color });
  };

  handleClick = () => {
    console.log("quoteId", this.props);
    if (this.likedQuote) {
      this.setState({ color: "pink" });
      this.props.setLikedness(this.props.id);
    }
    if (this.dislikedQuote) {
      this.setState({ color: "pink" });
      this.props.setLikedness(this.props.id);
    }
  };

  render() {
    return (
      <div className="quotes-presentation">
        <div
          style={{
            color: this.state.color,
            textDecorationLine: this.state.textDecoration
          }}
        >
          {this.props.quoteText}
        </div>
        <p>
          <strong>By: {this.props.quoteAuthor}</strong>
        </p>
        <button onClick={() => this.likedQuote("pink")}>:)</button>
        <button onClick={() => this.dislikedQuote("red", "line-through")}>
          :(
        </button>
        <button onClick={this.handleClick}>Handel Click</button>
      </div>
    );
  }
}

export default Quote;
