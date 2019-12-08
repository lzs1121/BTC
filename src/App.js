import React from 'react';
import Header from './components/Header'

import { HashRouter, Route, Switch } from 'react-router-dom'
import Posts from './views/Posts';
import Comments from './views/Comments';
import User from './views/User';
import Form from './views/Form'

const SliderComponent = () => (
  <Switch>
    <Route exact path='/' component={Posts} />
    <Route exact path='/form' component={Form} />
    <Route exact path='/user/:id' component={User} />
    <Route exact path='/comments/:id' component={Comments} />
  </Switch>
)

const App = () => {
  return (
    <div>
      <Header></Header>
      <HashRouter>
        <SliderComponent></SliderComponent>
      </HashRouter>
    </div>
  );
}

export default App;
