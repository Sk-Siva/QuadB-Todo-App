# TODO Application

A simple TODO application built with React. Users can add, edit, delete, and mark tasks as completed. The tasks are persisted in local storage.

## Features

- **Add Task**: Users can input a task into a text field and add it to the list.
- **View Tasks**: Display all added tasks in a list format.
- **Delete Task**: Each task has a delete button to remove it from the list.
- **Edit Task**: Each task has an edit button to allow inline editing.
- **Mark as Completed**: Each task can be marked as completed, which will strike through the text.
- **Local Storage**: Tasks are saved to local storage to persist data on page reload.

## Project Structure

```plaintext
todo-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   └── TaskList.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md

Components
App Component
State:
tasks: An array of task objects, each with text and completed properties.
Methods:
componentDidMount: Loads tasks from local storage.
componentDidUpdate: Saves tasks to local storage.
addTask: Adds a new task to the list.
deleteTask: Deletes a task from the list.
toggleCompletion: Toggles the completion status of a task.
setTasks: Sets the entire tasks array.
TaskInput Component
Props:
addTask: A function to add a new task.
State:
task: The current task input value.
Methods:
handleChange: Updates the task input value.
handleSubmit: Calls addTask with the current task input value and clears the input.
TaskList Component
Props:
tasks: An array of task objects.
deleteTask: A function to delete a task.
setTasks: A function to set the entire tasks array.
toggleCompletion: A function to toggle the completion status of a task.
State:
editingIndex: The index of the task currently being edited.
editedTask: The current value of the task being edited.
Methods:
startEditing: Sets the editingIndex and editedTask.
handleEditChange: Updates the editedTask state.
saveTask: Saves the edited task and resets the editing state.
Styles
The project includes basic styling in App.css and index.css. Feel free to customize the styles to your liking.

Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue to improve the application.

License
This project is licensed under the MIT License. See the LICENSE file for more details.