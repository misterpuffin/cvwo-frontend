import React from 'react';
import './App.css';

import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { Provider } from 'react-redux'
import store from './redux/store';

import { AuthPage, TasksPage } from "./pages"
import { AuthVerify } from './components';


function App() {
  return (
    <div>
      <Router>
        <Provider store = {store}>
          <div className="App">
            <Routes>
              <Route path="/login" element={<AuthPage></AuthPage>}></Route>
              <Route path="/" element= {<TasksPage></TasksPage>}></Route>
            </Routes>
          </div>
          <AuthVerify></AuthVerify>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
