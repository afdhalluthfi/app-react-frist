import React, {Component} from 'react';
import axios from 'axios';
class App extends Component {

  constructor(){
    super()
    this.state={
      name:"bambang",
      user:[]
    }
  }

  getUser=async ()=>{
    let responses =await axios.get('https://jsonplaceholder.typicode.com/users/1')
    this.setState({
      user:responses.data
    })
    // console.log(this.state.user)
  }

  componentDidMount(){
    this.getUser()
  }

    render() {
      let {name} = this.state;
      let {user} = this.state;

      return (
        <div>
          <h1>Hello {name} and your friends {user.name}</h1>
        </div>
      )
    }
}

export default App;