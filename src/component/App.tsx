import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { route } from 'lib/routes';

const App: React.SFC = () => (
  <>
    <Switch>
      {route.map(({path, page, exact}, i) => (
        <Route exact={exact} path={path} component={page} key={i}/>
      ))}
    </Switch>
  </>
)
export default App;
