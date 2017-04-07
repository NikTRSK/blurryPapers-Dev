import React from 'react';
import { connect } from "react-redux"
import { fetchBibtex } from "../actions/actionCreators";
import * as ReactBootstrap from 'react-bootstrap'
import '../../../dev/styles/article-item.sass';

export default class ArticleItem extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      showModal: false,
			showAbstract: false
    };
    this.openBibtex = this.openBibtex.bind(this);
    this.closeBibtex = this.closeBibtex.bind(this);
		this.openAbstract = this.openAbstract.bind(this);
		this.closeAbstract = this.closeAbstract.bind(this);
  }

  getInitialState() {
    return { showModal: false };
  }
	openAbstract() {
		this.setState({ showAbstract: true });
	}
	closeAbstract() {
		this.setState({ showAbstract: false });
	}
  closeBibtex() {
    this.setState({ showModal: false });
  }
  openBibtex() {
		this.props.dispatch(fetchBibtex());
    this.setState({ showModal: true });
  }
	render() {
		const { bibtex } = this.props;

		return (
      <div className="container" id="article-container">

				{/* BibTeX popup */}
				<div className="row">
					<div>
						<ReactBootstrap.Modal show={this.state.showModal} onHide={this.closeBibtex}>
							<ReactBootstrap.Modal.Header closeButton className="bibtex-header">
								<ReactBootstrap.Modal.Title>BibTeX</ReactBootstrap.Modal.Title>
							</ReactBootstrap.Modal.Header>
							<ReactBootstrap.Modal.Body className="bibtex-body">
								<pre >{bibtex}
								</pre>
							</ReactBootstrap.Modal.Body>
						</ReactBootstrap.Modal>
					</div>
				</div>

				{/* BibTeX popup */}
				<div className="row">
					<div>
						<ReactBootstrap.Modal show={this.state.showAbstract} onHide={this.closeAbstract}>
							<ReactBootstrap.Modal.Header closeButton className="bibtex-header">
								<ReactBootstrap.Modal.Title>Abstract</ReactBootstrap.Modal.Title>
							</ReactBootstrap.Modal.Header>
							<ReactBootstrap.Modal.Body className="bibtex-body">
								<pre >"Abstract"
								</pre>
							</ReactBootstrap.Modal.Body>
						</ReactBootstrap.Modal>
					</div>
				</div>

				{/* Article Checkbox */}
				<div className="row" id="article-title-container">
					<input type="checkbox" value="" id="article-checkbox"/>
					<a onClick={this.openAbstract}><p id="article-title">Robust principal component analysis?</p></a>
				</div>

				{/* Article Title */}
				<div className="row" id="article-authors-container">
					<p id="article-authors"><a href="#">Emmanuel J. Candès</a>, <a href="#">Xiaodong Li</a>, <a href="#">Yi Ma</a>, <a href="#">John Wright</a></p>
				</div>


				{/* Buttons */}
				<div className="row" id="article-buttons-container">
					<button className="btn btn-primary" id="article-bibtex-button" onClick={this.openBibtex}>
						<span className="glyphicon glyphicon-book"></span> BibTeX
					</button>
					<button className="btn btn-primary" id="article-download-button">
						<span className="glyphicon glyphicon-download"></span> Download
					</button>
				</div>
			</div>
		);
	}
}