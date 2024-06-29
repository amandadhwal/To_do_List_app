import {useState} from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';

 import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  // Tasks (ToDo List) State
  /*
const [toDo, setToDo] = useState([]);
This state holds the list of tasks. Each task is an object with id, title, and status properties.*/
  
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task 
  /*
    Adds a new task to the toDo list.
    Checks if newTask is not empty.
    Creates a new task object with an incremented id, the title from newTask, and status set to false.
    Updates the toDo state with the new task and clears the newTask input.*/
  ///////////////////////////
  const addTask = () => 
    {
    if(newTask) {
      let num = toDo.length + 1; 
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
    }

  // Delete task 
    /*
    Deletes a task based on its id.
    Filters out the task with the given id from the toDo list.
    Updates the toDo state with the filtered list.
*/
  ///////////////////////////
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }

  // Mark task as done or completed
  /*
    Toggles the status of a task based on its id.
    Maps through the toDo list and toggles the status of the task with the matching id.
    Updates the toDo state with the modified list.
*/
  ///////////////////////////
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if( task.id === id ) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update
  ///////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  // Update task
  /*
    Updates the task in the toDo list with the new data from updateData.
    Filters out the task being updated from the toDo list.
    Adds the updated task to the list.
    Updates the toDo state and clears the updateData state.
*/
  ///////////////////////////
  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }

  return (
    <div className="container App">

    <br /><br />
    <h2>To Do List App</h2>
    <br /><br />

    {updateData && updateData ? (
      <UpdateForm 
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}

    {/* Display ToDos */}

    {toDo && toDo.length ? '' : 'No Tasks...'}

    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    />  

    </div>
  );
}

export default App;

/*
Rendering Logic
If updateData contains data, the UpdateForm component is displayed, allowing the user to update a task.
If updateData is empty, the AddTaskForm component is displayed, allowing the user to add a new task.
The ToDo component displays the list of tasks or a message indicating that there are no tasks if the list is empty.
*/
