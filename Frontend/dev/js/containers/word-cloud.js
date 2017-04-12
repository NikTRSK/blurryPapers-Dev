import { TagCloud } from "react-tagcloud";
import React, {Component} from 'react';
import '../../styles/wordcloud.sass';

const WordCloud = React.createClass ({
  render() {
    if (this.props.paperData.length > 0) {
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
                      tags={this.props.paperData[0]}
                      onClick={
                        (tag) => {
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
    } else {
      return (<div/>)
    }
  }
});

export default WordCloud;
