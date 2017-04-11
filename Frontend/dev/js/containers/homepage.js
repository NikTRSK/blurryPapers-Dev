import React, {Component} from 'react';
import '../../styles/homepage.sass'
import WordCloud from './word-cloud';
import SearchHistory from './search-history';
import html2canvas from 'html2canvas';
import LoadingBar from 'react-redux-loading-bar'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {store, dispatch} from 'react-redux'


const homepage = React.createClass ({
  getInitialState: () => {
    return {
      showDownloadButton: false
    }
  },
  handleSubmit(e) {
    e.preventDefault();
    const searchQuery = this.refs.query.value;
    const count = this.refs.numArticles.value;
    console.log("Word: " + searchQuery + ", Count: " + count);
    // this.props.paperData = [];
    // store.dispatch(showLoading());
    this.props.addToHistory(searchQuery, count);
    this.props.generatePapers(searchQuery);
    this.setState({showDownloadButton: true});
  },
  generateImage(e) {
    e.preventDefault();
    const wordcoud = this.refs.wordcloud.refs.currentCloud;
    html2canvas(wordcoud, {
      onrendered: function (canvas) {
        let img = canvas.toDataURL();
        window.open(img);
      }
    })
  },
  render() {
    return (
      <div className="input-group center">
        <LoadingBar/>
        {
          this.state.showDownloadButton ?
            <button id="download-image-button" className="btn btn-lg downloadButton"
                    onClick={this.generateImage}>Download Image
            </button> : null
        }
        <WordCloud ref="wordcloud" {...this.props} />
        <div className="input-group serchInput">
          <input id="search-input-box" type="text" className="form-control"
                 placeholder="Search artists..." ref="query"
          >
          </input>

          <input id="search-numitems-box" type="text" className="form-control"
                 placeholder="Count..." ref="numArticles"
          >
          </input>
        </div>
        <button id="search-button" className="btn btn-lg searchButton"
                onClick={this.handleSubmit}>
              <span className="glyphicon glyphicon-search" aria-hidden="true">
              </span> Search
        </button>
        <SearchHistory className="searchHistory" {...this.props}/>
      </div>
    );
  }
});

export default homepage;