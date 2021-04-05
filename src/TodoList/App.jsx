import React, { useState, useRef, useEffect } from 'react'
import Form from './components/Form'
import FilterButton from './components/FilterButton'
import Todo from './components/Todo'
import Editable from './components/Editable'
import Field from './Components/Field'
import { nanoid } from 'nanoid'

const DATA = [
  { id: 'todo-0', name: 'Eat', completed: true },
  { id: 'todo-1', name: 'Sleep', completed: false },
  { id: 'todo-2', name: 'Repeat', completed: false },
]

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

function App() {
  const [item, setItem] = useState('')
  const [filter, setFilter] = useState('All')
  const [tasks, setTasks] = useState(DATA)

  const inputRef = useRef()

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ))

  const addTask = (name) => {
    const newTask = { id: 'todo-' + nanoid(), name: name, completed: false }
    setTasks([...tasks, newTask])
  }

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task'
  const headingText = `${taskList.length} ${tasksNoun} remaining`

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id)
    setTasks(remainingTasks)
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName }
      }
      return task
    })
    setTasks(editedTaskList)
  }

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  const listHeadingRef = useRef(null)

  const prevTaskLength = usePrevious(tasks.length)

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus()
    }
  }, [tasks.length, prevTaskLength])


   const [firstName, setFirstName] = useState('Moiz')
   const [websiteName, setWebsiteName] = useState('Ciphertrick')
   const [firstNameInput, setFirstNameInput] = useState(false)
   const [websiteNameInput, setWebsiteNameInput] = useState(false)
   
  return (
    <>
      <div id="todoApp">
        <div id="hints">
          <div
            id="TodoMatic"
            className="p-2 bg-white border border-gray-800 rounded-lg w-800 dark:bg-paper-500 dark:border-gray-200 todoapp stack-large"
          >
            <Form addTask={addTask} />
            <div className="flex items-center justify-center">{filterList}</div>
            <h2
              ref={listHeadingRef}
              className="text-2xl text-center text-red-400"
              id="list-heading"
            >
              {headingText}
            </h2>
            <ul
              id="items"
              role="list"
              className="todo-list stack-large stack-exception"
              aria-labelledby="list-heading"
            >
              {taskList}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full my-4">
        <Field
          value={firstName}
          inputChange={(e) => setFirstName(e.target.value)}
          doubleClick={() => setFirstNameInput(true)}
          blur={() => setFirstNameInput(false)}
          active={firstNameInput}
        >
          Enter your first name
        </Field>

        <Field
          value={websiteName}
          inputChange={(e) => setWebsiteName(e.target.value)}
          doubleClick={() => setWebsiteNameInput(true)}
          blur={() => setWebsiteNameInput(false)}
          active={websiteNameInput}
        >
          Enter your website
        </Field>
      </div>
      <Editable
        text={item}
        childRef={inputRef}
        placeholder="Write a task name"
        type="input"
      >
        <input
          className="px-4 py-3 text-base"
          ref={inputRef}
          type="text"
          name="task"
          placeholder="Write a task name"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </Editable>
    </>
  )
}

export default App
