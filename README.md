# TODO Application

A simple TODO application built with React. Users can add, edit, delete, and mark tasks as completed. The tasks are persisted in local storage.

## Features

- **Add Task**: Users can input a task into a text field and add it to the list.
- **View Tasks**: Display all added tasks in a list format.
- **Delete Task**: Each task has a delete button to remove it from the list.
- **Edit Task**: Each task has an edit button to allow inline editing.
- **Mark as Completed**: Each task can be marked as completed, which will strike through the text.
- **Local Storage**: Tasks are saved to local storage to persist data on page reload.

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Sk-Siva/QuadB-Todo-App.git
    cd todo-app
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the application:**
    ```sh
    npm start
    ```

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
