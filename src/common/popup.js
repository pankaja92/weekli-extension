import React from 'react';
import { render } from 'react-dom';
import Main from './App';

const root = document.querySelector('#app-frame');


const App = () => (
  <>
    <h1>
      Extension ready! Start writing code!
      <span role="img" aria-label="tada">
        🎉
      </span>
      <Main />
    </h1>
  </>
);

render(<App />, root);
