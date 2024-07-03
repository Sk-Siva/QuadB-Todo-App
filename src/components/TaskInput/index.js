import React, { Component } from 'react';

import "./index.css"

class TaskInput extends Component {
  state = { task: '' };

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: '' });
  };

  render() {
    return (
      <form className='form-container' onSubmit={this.handleSubmit}>
        <label htmlFor='task'>Enter the task</label><br/>
        <input
        id="task"
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
          placeholder="Enter task"
          required
        /> <br/>
        <button type="submit" className='button'>Add Task</button>
      </form>
    );
  }
}

export default TaskInput;
