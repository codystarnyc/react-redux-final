// Requirements
// Remove the Reset button and its functionality.
// Add the functionality which counts the number of clicks made to both the increment and decrement buttons.
// This number should show on the page with a label.
// Add an input field where the user can input a number. Next to the input should be a button. When the button is clicked, the original increment and decrement count should reset to the number that was inputted and the number of clicks should reset to zero.
// The number should not add onto the number that was created by clicking the increment and decrement buttons. The number listed should show the exact number inputted.
// Your project should end up looking similar to the following image:
// final project

// Based on the above image, when the Change Count Number button is clicked, the number 4 will be replaced with 33 and the number 12 will be replaced with 0.


import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/counter';

const store = createStore(
  reducer,
  undefined,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
