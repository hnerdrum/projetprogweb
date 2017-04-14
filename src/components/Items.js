import React from 'react';

class Items extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.name}</p>
              <button onClick={() => this.props.removeItem(index)}>Remove</button>
              <button disabled={item.completed} onClick={() => this.props.completeItem(index)}>Complete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Items;
