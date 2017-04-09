import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router';

import '../../styles/search-history.sass';

const SearchHistoryItem = React.createClass ({
  render() {
    const {query, count} = this.props;
    return (
      <div>
        <tr className="rowStyle">
          {/*<td className="songColumnStyle">*/}
            <Link to="/" className="song-result">
              {/*{query}*/}"test"
            </Link>
          {/*</td>*/}
          {/*<td className="song-result-count countColumnStyle">{count}</td>*/}
        </tr>
      </div>
    );
  }
});

export default SearchHistoryItem;