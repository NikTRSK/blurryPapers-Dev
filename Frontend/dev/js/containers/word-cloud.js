import { TagCloud } from "react-tagcloud";
import React, {Component} from 'react';
import { Link } from 'react-router'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {selectUser} from '../actions/index'

const WordCloud = React.createClass ({
  render() {
    return (
      <div>
        <div id="myModal" className="modal" ref="myModal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" id="closeModal" ref="closeModal">×</span>
            </div>
          </div>
        </div>

        <div className="word-cloud" id="word-cloud" ref="currentCloud">
          <TagCloud minSize={8}
                    maxSize={90}
                    tags={this.props.paperData}
                    onClick={
                      (tag) => {
                        this.props.getPapers(tag.value, tag.count);
                          this.props.history.push({
                            pathname: `/paperlist/${tag.value}`
                          });
                      }
                    }
          >
          </TagCloud>
        </div>
      </div>
    );
  }
});

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
// function matchDispatchToProps(dispatch){
//   return bindActionCreators({selectUser: selectUser}, dispatch);
// }

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default WordCloud;
