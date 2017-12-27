import React from 'react';
import TodosList from './todos-list';

const todos = [
  {
    task: 'make react tuto',
    isCompleted: false
  },
  {
    task: 'make dinner',
    isCompleted: true
  }
]

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos: todos
    };
  }
  render(){
    return (
      <div>
        <div>
          <h1>React todo list</h1>
          <TodosList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}