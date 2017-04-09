import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actionCreators';
import Main from '../containers/main';


function mapStateToProps(state) {
  return {
    paperData: state.paperData,
    articleData: state.articles,
    searchHistory: state.searchHistory
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
