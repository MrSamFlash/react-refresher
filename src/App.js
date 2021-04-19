import React from "react";
import "./style.css";
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appointment",
      day: "Jul 2nd at 2:15pm",
      reminder: true
    },
    {
      id: 2,
      text: "School meeting",
      day: "Jul 4th at 2:00pm",
      reminder: true
    },
    {
      id: 3,
      text: "React crash course",
      day: "Jul 2nd at 4:15pm",
      reminder: false
    },
    {
      id: 4,
      text: "Going to Disneyland",
      day: "Jul 3rd at 10:15am",
      reminder: false
    }
  ]);

  //Delete task
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}
