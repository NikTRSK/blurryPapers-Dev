import React from 'react';
import ArticleItem from '../components/article-item';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { fetchArticles } from "../actions/actionCreators";
import '../../../dev/styles/article-list.sass';
import FileSaver from "file-saver";
import { IndexLink } from "react-router";
import { Button, Glyphicon, MenuItem, ButtonToolbar, Dropdown } from "react-bootstrap";
const jsPDF = require('jspdf');

export default class ArticleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sortType: 0
		};
	}

	/* Automatically fetch articles */
	// TODO: Rewrite fetch articles to take parameter and use as query parameter.
	componentWillMount() {
		this.props.fetchArticles();
	}

	/*
	* This function is passed to each article and is called when their checkbox if checked.
	* It adds a key-value pair to ArticleList's state (key=article doi, value=checkbox status)
	* This way, when we want to generate a new word cloud based on checked articles we can look
	* at our current state to see what dois are checked and create a query from that.
	* */
	checkArticle(doi,value) {
		var newState = {};
		newState[doi] = value;
		this.setState(newState);
	}

	/* Generates query for checked articles */
	// TODO: Replace Smith w/ doiquery
	generateWCFromSelected() {
		console.log(this.state);
		var doiQuery = ``;
		var numArticles = 0;
		const curState = this.state;
		for (var key in curState) {
			if (curState.hasOwnProperty(key)) {
				if (curState[key] === true) {
					numArticles += 1;
					doiQuery += `${key} `
				}
			}
		}
		this.props.addToHistory("Smith", numArticles);
		this.props.generatePapers("Smith");
		//this.props.addToHistory(doiQuery, numArticles);
		//this.props.generatePapers(doiQuery);
	}

	/*
	* Returns articles list sorted depending on the current state of sort type.
	* 0: Title
	* 1: Author
	* 2: Conference
	* 3: Frequency
	* */
	sortedArticles() {
		let articles = [];
		if (this.props.articleData.articles) {
			articles = this.props.articleData.articles;
		}
		switch (this.state.sortType) {
			case 0:
				return [...articles].sort((a,b) => a.title > b.title);
			case 1:
				return [...articles].sort((a,b) => a.authors[0] > b.authors[0]);
			case 2:
				return [...articles].sort((a,b) => a.conferences[0] > b.conferences[0]);
			case 3:
				return [...articles].sort((a,b) => a.frequency < b.frequency);
		}
		return [];
	}

	/* Generates and saves a txt of the article list */
	listToTXT() {
		const { articles } = this.props.articleData;
		const articleArray =	articles.map((article,i) => {
			const authors = article.authors.join();
			const conferences = article.conferences.join();
			return `${i+1}: ${article.title}\nAuthors: ${authors}\nConferences: ${conferences}\n`;
		});
		var blob = new Blob(articleArray, {type: "text/plain;charset=utf-8"});
		FileSaver.saveAs(blob, "article-list.txt");
	}

	/* Generates and saves a pdf of the article list */
	listToPDF() {
		var doc = new jsPDF();
		const { articles } = this.props.articleData;
		doc.setFontSize(10);
		// write articles
		articles.forEach((article,i) => {
			const startY = 3*i*8+10;
			const authors = article.authors.join();
			const conferences = article.conferences.join();
			doc.setFontStyle("bold");
			doc.text((i+1) + ". " + article.title, 10, startY);
			doc.setFontStyle("normal");
			doc.text("Authors: " + authors, 10, startY+8);
			doc.text("Conferences: " + conferences, 10, startY+16);
		});
		doc.save('article-list.pdf');
	}

	render() {
		const { word } = this.props.params;
		const articles = this.sortedArticles();
		const mappedArticles = articles.map((article,i) =>
			<li>
				<ArticleItem {...this.props} key={article.title+i} word={word} onChange={this.checkArticle.bind(this)} article={article}/>
			</li>
		);
		return (
			<div className="container" id="articles-div">

				{/*Word Title*/}
				<div className="row" id="articles-title-div">
					<p id="articles-title">{word}</p>
					<br/>
				</div>

				{/* Sorting Groups */}
				<div className="row" id="articles-sorting-div">
					<Dropdown id="dropdown-toolbar">
						<Button id="dropdown-colors">
							Sort By ...
						</Button>
						<Dropdown.Toggle bsStyle="success"/>
						<Dropdown.Menu className="dropdown-style">
							<MenuItem eventKey="1" onClick={() => this.setState({sortType: 0})}>Title</MenuItem>
							<MenuItem eventKey="2" onClick={() => this.setState({sortType: 1})}>Authors</MenuItem>
							<MenuItem eventKey="3" onClick={() => this.setState({sortType: 2})}>Conferences</MenuItem>
							<MenuItem eventKey="4" onClick={() => this.setState({sortType: 3})}>Occurences</MenuItem>
						</Dropdown.Menu>
					</Dropdown>
				</div>

				{/*Article List*/}
				<div className="row" id="articles-article-list-div">
					<ul id="articles-list-element">
						{mappedArticles}
					</ul>
				</div>

				{/*Word CLoud Button*/}
				<div className="row" id="articles-generate-wc-button-div">
					<IndexLink to='/'>
						<button className="btn btn-primary" id="articles-generate-button" onClick={this.generateWCFromSelected.bind(this)}>
							<span className="glyphicon glyphicon-cloud"></span> Generate Word Cloud From Selected Articles
						</button>
					</IndexLink>
				</div>

				{/*Download Buttons for List*/}
				<div className="row" id="articles-dl-button-div">
					<button className="btn btn-primary" id="articles-dl-pdf-button" onClick={this.listToPDF.bind(this)}>
						<span className="glyphicon glyphicon-download"></span> Download List as PDF
					</button>
					<button className="btn btn-primary" id="articles-dl-txt-button" onClick={this.listToTXT.bind(this)}>
						<span className="glyphicon glyphicon-download"></span> Download List as TXT
					</button>
				</div>

			</div>
		)
	}
}