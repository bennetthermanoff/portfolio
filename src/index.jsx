import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {AppBar} from './App';
import reportWebVitals from './reportWebVitals';
import {QrPage} from './Content/Qr';
import Pid from './Content/PID/App.tsx';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "@fontsource/inter"; // Defaults to weight 400
import { ContentPage } from './Content/ContentPage'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/home">
          <App isNavigated={true} />
        </Route>
        <Route path="/content/:id" component={ContentPage} />
        <Route path="/qr" component={QrPage}/>
        <Route path="/pid" component={Pid}/>
      </Switch>
      <AppBar />
    </Router>
    
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
