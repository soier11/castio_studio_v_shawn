import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);
const Storege = React.lazy(() =>
  import(/* webpackChunkName: "storege" */ './storege')
);
const Channel = React.lazy(() =>
  import(/* webpackChunkName: "channel" */ './channel')
);
const ClassPage = React.lazy(() =>
  import(/* webpackChunkName: "class" */ './classpage')
);

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect
                exact
                from={`${match.url}/`}
                to={`${match.url}/dashboards`}
              />
              <Route
                path={`${match.url}/dashboards`}
                render={(props) => <Dashboards {...props} />}
              />
              <Route
                path={`${match.url}/storege`}
                render={(props) => <Storege {...props} />}
              />
              <Route
                path={`${match.url}/channel`}
                render={(props) => <Channel {...props} />}
              />
              <Route
                path={`${match.url}/class`}
                render={props => <ClassPage {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
