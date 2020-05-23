import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ClassPage = React.lazy(() =>
  import(/* webpackChunkName: "channel-channel" */ './class')
);
const DetailsAlt = React.lazy(() =>
  import(/* webpackChunkName: "channel-details-alt" */ './details-alt')
);

const PagesProfile = ({ match }) => {
  console.log(match)
  return (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/classes`} />
      <Route
        path={`${match.url}/classes`}
        render={props => <ClassPage {...props} />}
      />
      <Route
        path={`${match.url}/:class_class_id`}
        render={props => <DetailsAlt {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
)};
export default PagesProfile;
