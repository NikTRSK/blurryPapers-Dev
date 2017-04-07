import React from 'react'
import { Link } from 'react-router'
import Logo from '../components/logo';
import '../../styles/homepage.sass';

const Main = React.createClass({
  render() {
    return (
      <div className="center">
          <Link to="/">
            <Logo/>
          </Link>
        {React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
      </div>
    )
  }
});

export default Main
