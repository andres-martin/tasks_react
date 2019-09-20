import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      items: []
    };
    // when using new ES& rrow functions there's no need to bind each function
    // to the constructor
    // this.addItem = this.addItem.bind(this);
    // this.submit = this.submit.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.items.map(text => <li key={text}>{text}</li>)}
          </ul>

          <form onSubmit={this.submitItem} >
            <input type="text" onChange={this.addItem} value={this.state.newItem}
              id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
          </form>
        </div>
      </div >
    )
  }
  addItem = e => {
    this.setState({ newItem: e.target.value });
  };

  submitItem = (e) => {
    e.preventDefault();
    if (this.state.newItem !== '') {
      this.setState(state => {
        const items = [...state.items, state.newItem];
        return {
          items,
          newItem: ''
        }
      });
    }

  }



}


export default App;
