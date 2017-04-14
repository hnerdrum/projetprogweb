import React from 'react';
import Items from './Items';

import 'assets/scss/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
    this.completeItem = this.completeItem.bind(this);
  }
  completeItem(index) {
    let items = this.state.items;
    items[index].completed = true;
    this.setState({items: items});
  }
  render() {
      return (
          <div>
            <h1>{"Henrik's todos!"}</h1>
            <form onSubmit={event => {
              event.preventDefault();
              const newItem = {name: this.refs.item.value, completed: false};
              this.setState({items: this.state.items.concat(newItem)});
              this.refs.item.value = '';
            }}>
              <input type="text" ref="item"/>
            </form>
            <Items items={this.state.items} completeItem={this.completeItem}/>
          </div>
      );
  }
}

export default App;
