// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import ToDoContainer from './components/toDo/ToDoContainer';
import FormAddContainer from './components/Form/FormAdd/FormAddContainer';
// import FormAdd from './components/FormAdd/FormAdd';

// const ToDoContainer = React.lazy(() => import('./components/toDo/ToDoContainer'));
const CalendarContainer = React.lazy(() => import('./components/Calendar/CalendarContainer'));

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      {/* <FormAddContainer /> */}
        <Suspense>
          <Routes>
            <Route path='/todo' element={<ToDoContainer />} />
            <Route path='/calendar' element={<CalendarContainer />} />
          </Routes>
        </Suspense>
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
    </div>
  );
}

export default App;
