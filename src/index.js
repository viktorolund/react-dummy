import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import { loadShoppableVideos } from "./actions/shoppableVideoActions";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.dispatch(loadShoppableVideos());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
