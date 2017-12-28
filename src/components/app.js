import React from 'react';
import CreateTodo from './create-todos';
import TodosList from './todos-list';
import _ from 'lodash';

const todos = [
  {
    task: 'learn react',
    isCompleted: true
  },
  {
    task: 'become an architect!',
    isCompleted: false
  }
]

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos
    };
  }
  render(){
    return (
      <div>
        <div>
          <h1>React todo list</h1>
          <CreateTodo 
            todos={this.state.todos}
            createTask={this.createTask.bind(this)} 
          />
          <TodosList 
            todos={this.state.todos} 
            toggleTask={this.toggleTask.bind(this)}
            saveTask = {this.saveTask.bind(this)}
            deleteTask = {this.deleteTask.bind(this)}
          />
        </div>
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos })
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos })
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos })
  }
}