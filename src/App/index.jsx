import React, { Component, Fragment } from 'react';
import { Loader } from '@app/App/components/Loader';
import { List } from '@app/App/components/List';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoad: false }
  }

  componentDidMount() {
    setTimeout(() =>
      this.setState({ isLoad: true })
    , 3000);
  }

  render() {
    return(
      <Fragment>
        <If condition={!this.state.isLoad}>
          <Loader/>
        </If>
        <If condition={this.state.isLoad}>
          <List keyName="name" keyPrice="price" />
        </If>
      </Fragment>
    );
  }
}
