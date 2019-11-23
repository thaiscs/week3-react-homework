import React, { Component } from "react";
import Quote from "./Quote";

class QuoteSearcher extends Component {
  state = {
    quotes: [],
    fetching: false,
    likedness: false
  };

  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/strong")
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        this.setState({ quotes: json.results, fetching: true });
      })
      .catch(console.error);
  }

  // CALLBACK PROPS
  setLikedness = id => {
    this.setState({
      quotes: this.state.quotes.map(quote =>
        quote.id === id ? { ...quote, likedness: true } : quote
      )
    });
  };

  render() {
    if (!this.state.fetching) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h1> QUOTES </h1>
        <div className="quotes">
          {this.state.quotes.map(quote => (
            // console.log(quote);
            <Quote
              quoteText={quote.quoteText}
              quoteAuthor={quote.quoteAuthor}
              key={quote._id}
              id={quote._id}
              setLikedness={this.setLikedness}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default QuoteSearcher;
