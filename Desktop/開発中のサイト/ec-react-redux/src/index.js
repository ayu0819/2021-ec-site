import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //ラップするコンポネートの中で、Storeが機能できるようにする・connect関数が使えるようになる
import createStore from './reducks/store/store'  // storeよと見込ませる
import {ConnectedRouter} from 'connected-react-router';
import * as History from "history";
import App from './App';
import reportWebVitals from './reportWebVitals';

// (2) createBrowserHistory() の関数 history を定義して store関数に 引数として渡す(router の state を持つことが可能)
const history = History.createBrowserHistory();
// (1) createStore関数 をまず、実行させる ⇨ やっと、Storeが作られる
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> 
    <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
