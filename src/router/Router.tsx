import { Switch, Route } from 'react-router-dom';
import { memo, VFC } from 'react';

import { Login } from '../components/pages/Login';
import { HomeRoutes } from './HomeRoutes';
import { Error404 } from '../components/pages/Error404';

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home" render={({ match: { url } }) => (
        <Switch>
          {HomeRoutes.map((route) => (
            <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
              {route.children}
            </Route>
          ))}
        </Switch>
      )} />
      <Route path="*">
        <Error404 />
      </Route>
    </Switch>
  )
})
