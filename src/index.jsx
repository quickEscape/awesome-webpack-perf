import * as $ from 'jquery';
import Post from '@models/Post.js';
import json from './assets/json.json';
import xml from './assets/data.xml';
import logo from './assets/logo.png';
import './styles/style.css';
import './styles/sass.sass';
import './styles/less.less';
import './babel.js';
import React from 'react';
import { render } from 'react-dom';

const post = new Post('Webpack Post Title', logo);

$('pre').html(post.toString());

console.log('Post to String: ', post.toString());

console.log('JSON: ', json);
console.log('XML: ', xml);

const App = () => (
  <div className="container">
    <h1>Webpack</h1>
    <hr />
    <div className="logo" />
    <hr />
    <pre />
    <hr />
    <div className="box">
      <h2>Sass</h2>
    </div>
    <hr />
    <div className="card">
      <h2>Less</h2>
    </div>
  </div>
);

render(<App />, document.getElementById('app'));