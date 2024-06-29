# To Do List App React (V1)

To Do List App React JS by WebStylePress (Add, Edit, Update, Delete, Toggle Tasks)

## How to Use

Clone or download repo
NodeJS / NPM / Yarn should be installed in your PC

Open terminal or Git for Windows (Git Bash)
Run these commands:

### Install Dependencies

yarn install
<!-- 
if yarn not working or install properly run this command
yarn add @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
yarn add @fortawesome/react-fontawesome@latest
npm i --save @fortawesome/fontawesome-svg-core -->

OR

npm install

### Run app

yarn start

OR

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### Project Structure
    The project structure is organized as follows:

    java
    Copy code
    todo-app/
    ├── public/
    │   ├── index.html
    ├── src/
    │   ├── components/
    │   │   ├── TaskInput.jsx
    │   │   ├── TaskList.jsx
    │   ├── redux/
    │   │   ├── actions.js
    │   │   ├── reducers.js
    │   │   ├── store.js
    │   ├── App.js
    │   ├── index.js
    ├── package.json
    ├── README.md

## Components
    TaskInput: A component for adding a new task.
    TaskList: A component for displaying the list of tasks.

## Redux
    actions.js: Contains the action creators for adding, editing, and deleting tasks.
    reducers.js: Contains the reducer that handles the task-related actions.
    store.js: Configures and exports the Redux store.

## Application Logic

## Adding a Task
    The user inputs a task in the TaskInput component.
    The task is added to the Redux store by dispatching an action.
    The TaskList component listens to the store and updates the displayed list of tasks.
## Deleting a Task
    The user clicks the delete button on a task in the TaskList component.
    The task is removed from the Redux store by dispatching an action.
    The TaskList component listens to the store and updates the displayed list of tasks.
## Editing a Task
    The user clicks the edit button on a task in the TaskList component.
    A popup is shown allowing the user to edit the task.
    The edited task is updated in the Redux store by dispatching an action.
    The TaskList component listens to the store and updates the displayed list of tasks.