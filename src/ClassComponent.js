import './App.css';
import {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
//import CardData from './components/card-list/card-list.data';

class App extends Component {
    constructor(){
        super();
        this.state = {
            monsters: []
        };
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>
            response.json()).then(users => this.setState({monsters:users}));
    }
  render () {
    return (
        <div className="App">
            <input type="search" placeholder="search salon" />
            <CardList monsters={this.state.monsters} />
        </div>
     );
  
  }
}

export default App;
