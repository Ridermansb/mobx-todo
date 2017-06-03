import React from 'react';
import ReactDOM from 'react-dom';
import todoStore from './store/todoStore';
import App from './App';

const render = (AppComponent) => {
  ReactDOM.render(
    <AppComponent todoStore={todoStore} />,
    document.getElementById('root'),
  );
};

render(App);