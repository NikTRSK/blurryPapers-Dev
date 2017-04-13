import React, {Component} from 'react';
import '../../styles/homepage.sass'
import WordCloud from './word-cloud';
import SearchHistory from './search-history';
import html2canvas from 'html2canvas';
import LoadingBar from 'react-redux-loading-bar'
import {store, dispatch} from 'react-redux'
import FileSaver from 'file-saver';


const homepage = React.createClass ({
  handleSubmit(e) {
    e.preventDefault();
    const searchQuery = this.refs.query.value;
    const count = this.refs.numArticles.value;
    console.log("Word: " + searchQuery + ", Count: " + count);
    this.props.addToHistory(searchQuery, count);
    this.props.generatePapers(searchQuery);
  },
  generateImage(e) {
    e.preventDefault();
    const wordcoud = this.refs.wordcloud.refs.currentCloud;
    html2canvas(wordcoud, {
      onrendered: (canvas) => {
        // Automagically saves canvas as png and downloads it
        canvas.toBlob((blob) => FileSaver.saveAs(blob, "word-cloud.png"));
      }
    })
  },
  render() {
    return (
	    <div className="container">
	      <div className="input-group center">

	        <div id="loading-bar" >
	          <LoadingBar/>
	        </div>

		      <div className="row">
		        <WordCloud ref="wordcloud" {...this.props} />
	        </div>

		      <div className="row">
			      <div className="input-group serchInput">
		          <input id="search-input-box" type="text" className="form-control"
		                 placeholder="Search artists..." ref="query">
		          </input>

		          <input id="search-numitems-box" type="text" className="form-control"
		                 placeholder="Count..." ref="numArticles">
		          </input>
	          </div>
		      </div>

		      <div className="row">
		        <button id="search-button" className="btn btn-lg searchButton"
		                onClick={this.handleSubmit}>
		              <span className="glyphicon glyphicon-search" aria-hidden="true">
		              </span> Search
		        </button>
			      {
				      (this.props.paperData.length !== 0) ?
					      <button id="download-image-button" className="btn btn-lg downloadButton"
					              onClick={this.generateImage}>
						      <span className="glyphicon glyphicon-download" aria-hidden="true">
		              </span> Download Image
					      </button> : null
			      }
		      </div>

					<div className="row">
	          <SearchHistory className="searchHistory" {...this.props}/>
					</div>

	      </div>
	    </div>
    );
  }
});

export default homepage;