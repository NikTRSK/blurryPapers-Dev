import React from 'react';
import ArticleItem from '../components/article-item';
import { connect } from "react-redux"
import {bindActionCreators} from 'redux';
import { fetchArticles } from "../actions/actionCreators";
import '../../../dev/styles/article-list.sass';

export default class ArticleList extends React.Component {
	componentWillMount() {
		this.props.fetchArticles();
	}

	render() {
		const { articles } = this.props.articleData;
		const { word } = this.props.params;
		const mappedArticles = articles.map((article,i) => <li><ArticleItem paper={article} key={i}/></li>);
		return (
			<div className="container" id="articles-div">

				{/*Word Title*/}
				<div className="row" id="articles-title-div">
					<p id="articles-title">{word}</p>
					<br/>
				</div>

				{/*Article List*/}
				<div className="row" id="artricles-article-list-div">
					<ul id="articles-list-element">
						{mappedArticles}
					</ul>
				</div>

				{/*Word CLoud Button*/}
				<div className="row" id="articles-generate-wc-button-div">
					<button className="btn btn-primary" id="articles-generate-button" onClick={this.openBibtex}>
						<span className="glyphicon glyphicon-cloud"></span> Generate Word Cloud From Selected Articles
					</button>
				</div>

				{/*Download Buttons for List*/}
				<div className="row" id="articles-dl-button-div">
					<button className="btn btn-primary" id="articles-dl-pdf-button" onClick={this.openBibtex}>
						<span className="glyphicon glyphicon-download"></span> Download List as PDF
					</button>
					<button className="btn btn-primary" id="articles-dl-txt-button">
						<span className="glyphicon glyphicon-download"></span> Download List as TXT
					</button>
				</div>

			</div>
		)
	}
}