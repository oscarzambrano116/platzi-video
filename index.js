import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

render(
  <Media
    title="Que es responsive design?"
    author="Oscar Zambrano"
    image="./images/covers/responsive.jpg"
    type="video"
  />
  , app);
// render(que va renderizar, donde lo va a renderizar);
