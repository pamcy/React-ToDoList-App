import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TabMenuList from './TabMenuList';
import TabContent from './TabContent';

class App extends React.Component {
  render() {
    const routes = [
      {
        path: '/',
        exact: true,
        component: TabContent,
      },
      {
        path: '/progress',
        component: TabContent,
      },
    ];

    return (
      <Router>
        <div className="container">
          <TabMenuList />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} component={route.component} />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
