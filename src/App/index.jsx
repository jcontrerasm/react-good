import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Loader } from '@app/App/components/Loader';
import { Navigator } from '@app/App/components/Navigator';
import { Home } from '@app/App/pages/Home';
import { Detail } from '@app/App/pages/Detail';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoad: false };
  }

  componentDidMount() {
    setTimeout(() =>
      this.setState({ isLoad: true }), 3000);
  }

  isLoading(WrapperComponent) {
    return (
      <React.Fragment>
        <If condition={!this.state.isLoad}>
          <Loader />
        </If>
        <If condition={this.state.isLoad}>
          <Navigator />
          <WrapperComponent />
        </If>
      </React.Fragment>
    );
  }

  render() {
    const withLoader = WrapperComponent => (
      () => this.isLoading(WrapperComponent)
    );

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={withLoader(Home)} />
          <Route exact path="/detail" component={withLoader(Detail)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
