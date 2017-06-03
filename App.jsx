import React  from 'react'
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import PropTypes from 'prop-types';
import TodoAdd from './TodoAdd'

useStrict(true);

const App = (props) =>
  <Provider {...props} >
    <TodoAdd />
  </Provider>

export default App;