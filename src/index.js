import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'

import reducers from './reducers';
import PostsIndex from './components/PostsIndex'
import PostsNew from './components/PostsNew'
import PostsShow from './components/PostsShow'

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/posts/new" component={ PostsNew } />
          <Route path="/posts/:id" component={ PostsShow } />
          <Route exact path="/" component={ PostsIndex } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
