import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, newcount, reset } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} numberClicked={this.props.numberClicked} onnewCount={this.props.NewCount} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onReset={this.props.onReset} />  
          
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReset: () => dispatch(reset()),
    onnewCount: () => dispatch(newcount())
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      numberClicked: state.numberClicked
    };
   
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);