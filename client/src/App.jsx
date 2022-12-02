import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import TasksList from "./components/TasksList";
import TasksForm from "./components/TasksForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksList />} />
        <Route path="/tasks/new" element={<TasksForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
