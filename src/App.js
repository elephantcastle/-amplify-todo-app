import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import React, { useState, useEffect } from 'react'

// Import the API category from AWS Amplify
import { API } from 'aws-amplify'

import './App.css';

function App() {
  // Create todos variable and set to empty array
  const [todos, updateTodos] = useState([])

  // Define function to all API
  async function fetchTodos() {
    const data = await API.get('todosapi', '/todos')
    updateTodos(data.todos)
  }

  // Call fetchTodos function when component loads
  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
      <div className="App">
        {
          todos.map((todo, index) => (
            <div key={index}>
              <h2>{todo.title}</h2>
              <h5>${todo.date}</h5>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App)