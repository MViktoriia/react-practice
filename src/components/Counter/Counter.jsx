import React from 'react';
import Controls from './Controls';
import Value from './Value';
// import './Counter.css';
import { StyledCounter } from './Counter.styled';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <StyledCounter>
        <Value value={this.state.value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </StyledCounter>
    );
  }
}

export default Counter;
