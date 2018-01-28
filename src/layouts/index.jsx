import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';

import 'semantic-ui-css/semantic.min.css';
import './all.scss';


export default class TemplateWrapper extends React.PureComponent {
  static container

  propTypes = {
    children: PropTypes.func,
  }

  setContainerNode = node => { this.container = node }

  render() {
    const {children} = this.props

    return (
      <div ref={this.setContainerNode}>
        <Helmet title="Home | We Build Black" />
        <Navbar context={this.container} />
        <div>{children()}</div>
      </div>
    )
  }
}
