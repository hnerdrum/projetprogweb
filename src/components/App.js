import React from 'react';
import Items from './Items';

import 'assets/scss/main.scss';

const ITEMS_KEY = 'HENRIKS_TODOS_ITEMS';
function getItems() {
  return JSON.parse(localStorage.getItem(ITEMS_KEY)) || [];
}
function saveItems(items) {
  localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: getItems()};
    this.completeItem = this.completeItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  addItem(event) {
    event.preventDefault();
    const newItem = {name: this.refs.item.value, completed: false};
    let items = this.state.items.concat(newItem);
    this.setState({items: items});
    this.refs.item.value = '';
    saveItems(items);
  }

  removeItem(index) {
    let items = this.state.items;
    items.splice(index, 1);
    this.setState({items: items});
    saveItems(items);
  }

  completeItem(index) {
    let items = this.state.items;
    items[index].completed = true;
    this.setState({items: items});
    saveItems(items);
  }

  render() {
      return (
          <div>
            <h1>{"Henrik's todos!"}</h1>
            <form onSubmit={this.addItem}>
              <input type="text" ref="item"/>
            </form>
            <Items items={this.state.items} completeItem={this.completeItem} removeItem={this.removeItem}/>
          </div>
      );
  }
}

export default App;
