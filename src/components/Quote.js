import React, { Component } from "react";

class Quote extends Component {
  state = {
    color: "black",
    textDecoration: "",
    liked: 0,
    disliked: 0
  };

  likedQuote = () => {
    this.setState({ color: "pink", liked: this.state.liked + 1 });
    this.props.setLikedness(this.props.id);
  };

  dislikedQuote = () => {
    this.setState({
      color: "red",
      textDecoration: "line-through",
      disliked: this.state.disliked + 1
    });
    this.props.setLikedness(this.props.id);
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
        <button onClick={() => this.likedQuote()}>:)</button>
        <button onClick={() => this.dislikedQuote()}>:(</button>
      </div>
    );
  }
}

export default Quote;
