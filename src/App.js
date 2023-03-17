import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome greeting="Hi" />
        {isLoggedIn && <button>LogIn</button>}
        {!isLoggedIn && <button>Logout</button>}
      </div>
    )
  }
}

export default App
