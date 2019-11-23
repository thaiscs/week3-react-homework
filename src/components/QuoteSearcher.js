import React, { Component } from "react";
import Quote from "./Quote";
import AddQuote from "./AddQuote";

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
        this.setState({ quotes: json.results, fetching: true });
      })
      .catch(console.error);
  }

  addQuote = quote => {
    // console.log("Hi from addQuote:", quote);

    fetch(
      `https://quote-garden.herokuapp.com/quotes/search/${encodeURIComponent(
        quote
      )}`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...this.state,
          quotes: json.results
        });
      })
      .catch(console.error);
  };

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
        <div className="searchBtn">
          <AddQuote addQuote={this.addQuote} />
        </div>
        <h1> QUOTES </h1>
        <div className="quotes">
          {this.state.quotes.map(quote => (
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
