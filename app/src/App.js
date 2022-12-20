// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ToDoContainer from './components/toDo/ToDoContainer';
// import FormAddContainer from './components/Form/FormAdd/FormAddContainer';
import CalendarContainer from './components/Calendar/CalendarContainer';
import { initializeApp } from './redux/app-reducer';
// import FormAdd from './components/FormAdd/FormAdd';

// const ToDoContainer = React.lazy(() => import('./components/toDo/ToDoContainer'));
// const CalendarContainer = React.lazy(() => import('./components/Calendar/CalendarContainer'));

const App = (props) => {
  debugger
  const [initialized, setInitialized] = useState(props.initialized)
  useEffect(() => {
    props.initializeApp()
    setInitialized(props.initialized);

  }, [props.initialized])
  return (
    <div>
      {!initialized && <div>hello</div>}
      {initialized &&
            <div className='app_wrapper'>
            <BrowserRouter>
              <Navbar />
              {/* <FormAddContainer /> */}
              <div className='app_wrapper_content'>
                {/* <button onClick={() =>{
                  debugger
                  props.initializeApp()}}>gjkexbnm </button> */}
                {/* <Suspense> */}
                  <Routes>
                    <Route path='/tasks' element={<ToDoContainer />} />
                    {/* <Route path='/calendar' element={<CalendarContainer />} /> */}
                  </Routes>
                {/* </Suspense> */}
              </div>
            </BrowserRouter>
            {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header> */}
          </div>}

    </div>
  );
}

export default App;
