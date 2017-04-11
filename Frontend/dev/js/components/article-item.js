import React from 'react';
import * as ReactBootstrap from 'react-bootstrap'
import Highlight from 'react-highlighter';
import '../../../dev/styles/article-item.sass';

export default class ArticleItem extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      showModal: false,
			showAbstract: false,
	    checked: false
    };
    this.openBibtex = this.openBibtex.bind(this);
    this.closeBibtex = this.closeBibtex.bind(this);
		this.openAbstract = this.openAbstract.bind(this);
		this.closeAbstract = this.closeAbstract.bind(this);
		this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  getInitialState() {
    return {
	    showModal: false,
	    showAbstract: false
    };
  }
	openAbstract() {
		this.props.fetchAbstract();
		this.setState({ showAbstract: true });
	}
	closeAbstract() {
		this.setState({ showAbstract: false });
	}
  closeBibtex() {
    this.setState({ showModal: false });
  }
  openBibtex() {
	  this.props.fetchBibtex();
    this.setState({ showModal: true });
  }
	handleCheckbox() {
		const checked = this.state.checked;
		this.setState({checked: !checked});
		this.props.onChange(this.props.paper.doi, !checked);
	}

	render() {
		const { authors, conferences, downloadLink, title, doi } = this.props.paper;
		const { bibtex } = this.props.bibtexData.bibtex;
		const { abstract } = this.props.abstractData.abstract;
		const { word } = this.props;
		const mappedAuthors = authors.map((author, i) =>
			<a href="#" key={i}>
				{!!i && ", "}
				{author}
			</a>
		);
		const mappedConferences = conferences.map((conference, i) =>
			<a href="#" key={i}>
				{!!i && ", "}
				{conference}
			</a>
		);

		return (
      <div className="container" id="article-container">

				{/* BibTeX popup */}
				<div className="row">
					<div>
						<ReactBootstrap.Modal show={this.state.showModal} onHide={this.closeBibtex}>
							<ReactBootstrap.Modal.Header closeButton>
								<ReactBootstrap.Modal.Title>BibTeX</ReactBootstrap.Modal.Title>
							</ReactBootstrap.Modal.Header>
							<ReactBootstrap.Modal.Body>
								<pre className="article-modal-pre">{bibtex}</pre>
							</ReactBootstrap.Modal.Body>
						</ReactBootstrap.Modal>
					</div>
				</div>

				{/* BibTeX popup */}
				<div className="row">
					<div>
						<ReactBootstrap.Modal show={this.state.showAbstract} onHide={this.closeAbstract}>
							<ReactBootstrap.Modal.Header closeButton>
								<ReactBootstrap.Modal.Title>Abstract</ReactBootstrap.Modal.Title>
							</ReactBootstrap.Modal.Header>
							<ReactBootstrap.Modal.Body>
								<pre className="article-modal-pre">
									<Highlight search={word} matchStyle={{backgroundColor:"#ffd54f"}}>{abstract}</Highlight>
								</pre>
							</ReactBootstrap.Modal.Body>
						</ReactBootstrap.Modal>
					</div>
				</div>

				{/* Article Checkbox + Title */}
				<div className="row" id="article-title-container">
					<input type="checkbox" ref={doi} value={this.state.checked} id="article-checkbox" onChange={this.handleCheckbox}/>
					<a onClick={this.openAbstract}><p id="article-title">{title}</p></a>
				</div>

	      {/* Word + Occurences */}
	      <div className="row" id="article-authors-container">
		      <span id="article-occurences-1">{word}: </span>
		      <span id="article-occurences-2">Occurs </span>
		      <span id="article-occurences-1">4 </span>
		      <span id="article-occurences-2">times.</span>
	      </div>

				{/* Article Authors */}
				<div className="row" id="article-authors-container">
					<span id="article-authors">Authors: </span>
					{mappedAuthors}
				</div>

				{/* Article Conferences */}
				<div className="row" id="article-authors-container">
					<span id="article-conferences">Conferences: </span>
					{mappedConferences}
				</div>

				{/* Buttons */}
				<div className="row" id="article-buttons-container">
					<button className="btn btn-primary" id="article-bibtex-button" onClick={this.openBibtex}>
						<span className="glyphicon glyphicon-book"></span> BibTeX
					</button>
					<a href={downloadLink}>
						<button className="btn btn-primary" id="article-download-button">
							<span className="glyphicon glyphicon-download"></span> Download
						</button>
					</a>
				</div>
			</div>
		);
	}
}