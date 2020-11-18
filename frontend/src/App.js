import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

const App = () => {

  const [routine, setRoutine] = useState('')
  const [user, setUser] = useState(null)

  //Set drop-down value to routine-state
  const handleSelection = (e) => {
    setRoutine(e.target.value)
  }

  return (
    <Router>
      <div>
      <nav>
        <table className="nav-table">
          <tbody>
            <tr>
              <td>
                <Link to="/">Home</Link>
                </td>
                <td>
                <Link to="/suggestions">Suggestions</Link>
                </td>
                <td>
                <Link to="/createnew">Add</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </nav>
        <h1>Workout tracker</h1>
        <Switch>
          <Route path="/suggestions">
            <p>suggestions</p>
          </Route>
          <Route path="/createnew">
            <p>Create a new routine </p>
              <div> Routine name: <input type='text' /></div>
              <button>Create </button>
              <button>Reset </button>
          </Route>
          <Route path="/">
          <div>
            <select defaultValue={'Default'} name="routines" id="routines" onChange={handleSelection}>
              <option value='Default' disabled> select your routine </option>
              <option value='Push'>Push</option>
              <option value='Pull'>Pull</option>
              <option value='Legs'>Legs</option>
              <option value='Full body'>Full body</option>
            </select>
            <div>{`Chosen routine: ${routine}`}</div>
          </div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
