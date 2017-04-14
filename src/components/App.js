import React from 'react';

import 'assets/scss/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }
    render() {
        console.log('state', this.state);
        return (
            <div>
              <h1>{"Henrik's todos!"}</h1>
              <form onSubmit={event => {
                event.preventDefault();
                const newItem = this.refs.item.value;
                this.setState({items: this.state.items.concat(newItem)});
                this.refs.item.value = '';
              }}>
                <input type="text" ref="item"/>
              </form>
              {this.state.items.map(item => <p>{item}</p>)}
            </div>
        );
    }
}

export default App;
