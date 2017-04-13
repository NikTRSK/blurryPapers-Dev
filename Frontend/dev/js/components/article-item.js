import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import Highlight from 'react-highlighter'
import { IndexLink } from 'react-router'
import '../../../dev/styles/article-item.sass'

export default class ArticleItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showAbstract: false,
      checked: false
    }
    this.openBibtex = this.openBibtex.bind(this)
    this.closeBibtex = this.closeBibtex.bind(this)
    this.openAbstract = this.openAbstract.bind(this)
    this.closeAbstract = this.closeAbstract.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }
  openAbstract() {
    this.props.fetchAbstract()
    this.setState({ showAbstract: true })
  }
  closeAbstract() {
    this.props.clearAbstract()
    this.setState({ showAbstract: false })
  }
  openBibtex() {
    this.props.fetchBibtex()
    this.setState({ showModal: true })
  }
  closeBibtex() {
    this.props.clearBibtex()
    this.setState({ showModal: false })
  }
  handleCheckbox() {
    const checked = this.state.checked
    this.setState({ checked: !checked })
    this.props.onChange(this.props.article.doi, !checked)
  }
	// TODO: Switch "Smith" with author
	/*
	this.props.addToHistory(author, 5);
	this.props.generatePapers(author);
	*/
  authorRoute(author) {
    this.props.addToHistory('Smith', 5)
    this.props.generatePapers('Smith')
  }
	// TODO: Switch "Smith" with conference
	/*
	this.props.addToHistory(conference, 5);
	this.props.generatePapers(conference);
	*/
  conferenceRoute(conference) {
    this.props.addToHistory('Smith', 5)
    this.props.generatePapers('Smith')
  }

  render() {
    const { authors, conferences, downloadLink, title, doi, frequency } = this.props.article
    const { bibtex } = this.props.bibtexData.bibtex
    const { abstract } = this.props.abstractData.abstract
    const { word } = this.props
    const { showAbstract, showModal, checked } = this.state
    const mappedAuthors = authors.map((author, i) =>
      <IndexLink to="/" key={i} onClick={this.authorRoute.bind(this, author)}>
				{!!i && ', '}
				{author}
      </IndexLink>
		)
    const mappedConferences = conferences.map((conference, i) =>
      <IndexLink to="/" key={i} onClick={this.conferenceRoute.bind(this, conference)}>
				{!!i && ', '}
				{conference}
      </IndexLink>
		)

    return (
      <div className="container" id="article-container">

				{/* BibTeX popup */}
        <div className="row">
          <div>
            <ReactBootstrap.Modal show={showModal} onHide={this.closeBibtex}>
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
            <ReactBootstrap.Modal show={showAbstract} onHide={this.closeAbstract}>
              <ReactBootstrap.Modal.Header closeButton>
                <ReactBootstrap.Modal.Title>Abstract</ReactBootstrap.Modal.Title>
              </ReactBootstrap.Modal.Header>
              <ReactBootstrap.Modal.Body>
                <pre className="article-modal-pre">
                  <Highlight search={word} matchStyle={{ backgroundColor: '#ffd54f' }}>
                    {abstract}
                  </Highlight>
                </pre>
                <a target="_blank" href={downloadLink}>
                  <button className="btn btn-primary" id="article-download-button">
                    <span className="glyphicon glyphicon-download"></span> Download
                  </button>
                </a>
              </ReactBootstrap.Modal.Body>
            </ReactBootstrap.Modal>
          </div>
        </div>

				{/* Article Checkbox + Title */}
        <div className="row" id="article-title-container">
          <table>
            <tr>
              <th className="article-checkbox-col">
                <input type="checkbox" ref={doi} value={checked} id="article-checkbox" onChange={this.handleCheckbox} />
              </th>
              <th className="article-title-col">
                <a onClick={this.openAbstract}><p id="article-title">{title}</p></a>
              </th>
            </tr>
          </table>
        </div>

        {/* Word + Occurences */}
        <div className="row" id="article-authors-container">
          <span id="article-occurences-1">{word}: </span>
          <span id="article-occurences-2">Occurs </span>
          <span id="article-occurences-1">{frequency} </span>
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
          <a target="_blank" href={downloadLink}>
            <button className="btn btn-primary" id="article-download-button">
              <span className="glyphicon glyphicon-download"></span> Download
            </button>
          </a>
        </div>
      </div>
		)
  }
}

ArticleItem.propTypes = {
  addToHistory: React.PropTypes.func,
  generatePapers: React.PropTypes.func,
  fetchAbstract: React.PropTypes.func,
  clearAbstract: React.PropTypes.func,
  fetchBibtex: React.PropTypes.func,
  onChange: React.PropTypes.func,
  clearBibtex: React.PropTypes.object,
  article: React.PropTypes.object,
  bibtexData: React.PropTypes.object,
  abstractData: React.PropTypes.object,
  word: React.PropTypes.string
}
