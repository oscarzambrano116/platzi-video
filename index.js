import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

const home = document.getElementById('home-container');

render(<Playlist data={data} />, home);
// render(que va renderizar, donde lo va a renderizar);
