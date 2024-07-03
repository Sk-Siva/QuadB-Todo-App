import React, { Component } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import "./App.css";

class App extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    // Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      this.setState({ tasks });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Save tasks to local storage whenever the tasks state changes
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, { text: task, completed: false }]
    }));
  };

  deleteTask = (index) => {
    this.setState((prevState) => {
      const tasks = prevState.tasks.slice();
      tasks.splice(index, 1);
      return { tasks };
    });
  };

  setTasks = (tasks) => {
    this.setState({ tasks });
  };

  render() {
    return (
      <div className='container'>
        <h1>TODO APPLICATION</h1>
        <TaskInput addTask={this.addTask} />
        <TaskList 
          tasks={this.state.tasks} 
          deleteTask={this.deleteTask} 
          setTasks={this.setTasks}
        />
      </div>
    );
  }
}

export default App;