import React, {Component} from 'react';
import '../../styles/homepage.sass'
import WordCloud from './word-cloud';

const homepage = React.createClass ({
  handleSubmit(e) {
    e.preventDefault();
    const searchQuery = this.refs.query.value;
    this.props.generatePapers(searchQuery);
    console.log("SUBMITING " + this.refs);
    console.log(this.refs.query.value);
  },
  render() {
    let query = this.props.query;
    return (
      <div className="input-group center">
        <WordCloud {...this.props} />
        <input id="search-input-box" type="text" className="form-control searchBox"
               placeholder="Search artists..." ref="query"
        >
        </input>

        <button id="search-button" className="btn btn-lg searchButton"
                onClick={this.handleSubmit}>
              <span className="glyphicon glyphicon-search" aria-hidden="true">
              </span> Search
        </button>
      </div>
    );
  }
});

export default homepage;
