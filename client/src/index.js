import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from './froala/lib/FroalaEditor';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/de.js';

import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/js/third_party/spell_checker.min.js';

// import 'font-awesome/css/font-awesome.css';
// import 'froala-editor/js/third_party/font_awesome.min.js';

import FroalaEditorView from './froala/lib/FroalaEditorView';
import FroalaEditorA from './froala/lib/FroalaEditorA';
import FroalaEditorButton from './froala/lib/FroalaEditorButton';
import FroalaEditorImg from './froala/lib/FroalaEditorImg';
import FroalaEditorInput from './froala/lib/FroalaEditorInput';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <FroalaEditorComponent tag = 'textarea' />,); */}
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
