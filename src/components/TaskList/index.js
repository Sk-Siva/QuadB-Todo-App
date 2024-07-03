import React, { Component } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./index.css";

class TaskList extends Component {
  state = {
    editingIndex: null,
    editedTask: ''
  };

  startEditing = (index, task) => {
    this.setState({ editingIndex: index, editedTask: task });
  };

  handleEditChange = (e) => {
    this.setState({ editedTask: e.target.value });
  };

  saveTask = (index) => {
    const updatedTasks = this.props.tasks.map((task, i) => 
      i === index ? { ...task, text: this.state.editedTask } : task
    );
    this.props.setTasks(updatedTasks);
    this.setState({ editingIndex: null, editedTask: '' });
  };

  render() {
    return (
      <>
        <h1>Your Tasks</h1>
        {this.props.tasks.length === 0 ? (
          <p>No Tasks Added</p>
        ) : (
          <ul className='list-container'>
            {this.props.tasks.map((task, index) => (
              <li 
                className='list' 
                key={index} 
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              >
                {this.state.editingIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={this.state.editedTask}
                      onChange={this.handleEditChange}
                    />
                    <button className='button' onClick={() => this.saveTask(index)}>Save</button>
                  </>
                ) : (
                  <div className='task-list'>
                    <div className='input-task'><input
                  type="checkbox"
                />
                    {task.text}</div>
                    <div>
                      <button 
                        className='task-btn' 
                        onClick={() => this.startEditing(index, task.text)}
                      >
                        <FaEdit />
                      </button>
                      <button 
                        className='task-btn' 
                        onClick={() => this.props.deleteTask(index)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default TaskList;