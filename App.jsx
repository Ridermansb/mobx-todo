import React  from 'react'
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import PropTypes from 'prop-types';

useStrict(true);

const App = (props) =>
  <Provider {...props.stores} >
    <span>oi</span>
  </Provider>

export default App;