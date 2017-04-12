import React, {Component} from 'react';
import SearchHistoryItem from './search-history-item';

import '../../styles/search-history.sass';

const SearchHistory = React.createClass ({
  render() {
    if (this.props.searchHistory.length > 0) {
      return (
        <div className="search-history">
          <h2 id="search-list-title" className="searchListTitle">Search History</h2>
          {
            this.props.searchHistory.map((item) => {
              return (
                <SearchHistoryItem {...this.props} key={item.query} query={item.query} count={item.count}/>
              )
            })
          }
        </div>
      );
    }
    else {
      return(<div/>)
    }
  }
});

export default SearchHistory;