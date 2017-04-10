import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router';

import '../../styles/search-history.sass';

const SearchHistoryItem = React.createClass ({
  handleSubmit(e, searchQuery, count) {
    e.preventDefault();
    console.log("Word: " + searchQuery + ", Count: " + count);
    // this.props.addToHistory(searchQuery, count);
    this.props.generatePapers(searchQuery);
    this.setState({showDownloadButton: true});
  },
  render() {
    const {query, count} = this.props;
    return (
      <div>
        <td className="searchItem">
            <Link onClick={this.handleSubmit.bind(this, query, count)} className="song-result">
              {query}
            </Link>
        </td>
      </div>
    );
  }
});

export default SearchHistoryItem;