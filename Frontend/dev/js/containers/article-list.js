import React from 'react';
import ArticleItem from '../components/article-item';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { fetchArticles } from "../actions/actionCreators";
import '../../../dev/styles/article-list.sass';
import FileSaver from "file-saver";
const jsPDF = require('jspdf');

export default class ArticleList extends React.Component {
	constructor(props) {
		super(props);
		this.listToPDF = this.listToPDF.bind(this);
		this.listToTXT = this.listToTXT.bind(this);
		this.findChecked = this.findChecked.bind(this);
	}
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

	findChecked() {
		console.log(this.state);
		var doiQuery = ``;
		const curState = this.state;
		for (var key in curState) {
			if (curState.hasOwnProperty(key)) {
				if (curState[key] === true) {
					doiQuery += `${key} `
				}
			}
		}
		console.log(doiQuery);
	}

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
		const { articles } = this.props.articleData;
		const { word } = this.props.params;
		const { fetchAbstract, abstractData, fetchBibtex, bibtexData } = this.props;
		const mappedArticles = articles.map((article,i) =>
			<li><ArticleItem key={i} onChange={this.checkArticle.bind(this)} paper={article} word={word} abstractData={abstractData} fetchAbstract={fetchAbstract} bibtexData={bibtexData} fetchBibtex={fetchBibtex}/></li>
		);
		return (
			<div className="container" id="articles-div">

				{/*Word Title*/}
				<div className="row" id="articles-title-div">
					<p id="articles-title">{word}</p>
					<br/>
				</div>

				{/*Article List*/}
				<div className="row" id="articles-article-list-div">
					<ul id="articles-list-element">
						{mappedArticles}
					</ul>
				</div>

				{/*Word CLoud Button*/}
				<div className="row" id="articles-generate-wc-button-div">
					<button className="btn btn-primary" id="articles-generate-button" onClick={this.findChecked}>
						<span className="glyphicon glyphicon-cloud"></span> Generate Word Cloud From Selected Articles
					</button>
				</div>

				{/*Download Buttons for List*/}
				<div className="row" id="articles-dl-button-div">
					<button className="btn btn-primary" id="articles-dl-pdf-button" onClick={this.listToPDF}>
						<span className="glyphicon glyphicon-download"></span> Download List as PDF
					</button>
					<button className="btn btn-primary" id="articles-dl-txt-button" onClick={this.listToTXT}>
						<span className="glyphicon glyphicon-download"></span> Download List as TXT
					</button>
				</div>

			</div>
		)
	}
}