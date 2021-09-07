import { memo, VFC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login } from '../components/pages/Login';
import { HomeRoutes } from './HomeRoutes';
import { Error404 } from '../components/pages/Error404';
import { HeaderLayout } from '../components/templates/HederLayout';
import { LoginUserProvider } from '../providers/LoginUser';

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home" render={({ match: { url } }) => (
          <Switch>
            {HomeRoutes.map((route) => (
              <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                <HeaderLayout>
                  {route.children}
                </HeaderLayout>
              </Route>
            ))}
          </Switch>
        )} />
      </LoginUserProvider>
      <Route path="*">
        <Error404 />
      </Route>
    </Switch>
  )
})
