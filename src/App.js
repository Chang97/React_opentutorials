import './App.css';
import Subject from './components/Subject.js';
import TOC from  './components/TOC.js';
import Content from  './components/Content.js';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
