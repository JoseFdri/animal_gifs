import React from 'react';
import './App.css';
import MainList from './components/MainList';

function App() {
  return (
    <div className="App">
      <div className="container-fluid main-container">
          <div className="row mt-5 mb-5">
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <h1>
                Choose an option to get fun :)
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center align-items-center ">
              <MainList>
              </MainList>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
