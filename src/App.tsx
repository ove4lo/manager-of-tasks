import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import MainPage from './pages/MainPage';
import TaskEditPage from './pages/TaskEditPage';
import TaskDetailsPage from './pages/TaskDetailsPage';

function App() {
  return (
    <Router>
      <div className="container mx-auto pt-4">
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/task/:id'} element={<TaskDetailsPage />} />
          <Route path={'/task/edit/:id'} element={<TaskEditPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
