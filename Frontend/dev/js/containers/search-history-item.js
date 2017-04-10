import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router';

import '../../styles/search-history.sass';

const SearchHistoryItem = React.createClass ({
  handleClick(e, searchQuery, count) {
    e.preventDefault();
    console.log("In search|"+"Word: " + searchQuery + ", Count: " + count);
    this.props.generatePapers(searchQuery);
    this.setState({showDownloadButton: true});
  },
  render() {
    const {query, count} = this.props;
    return (
      <div>
        <tbody>
          <td className="searchItem">
              <a onClick={(e) => this.handleClick(e, query, count)} className="song-result">
                {query}
              </a>
          </td>
        </tbody>
      </div>
    );
  }
});

export default SearchHistoryItem;