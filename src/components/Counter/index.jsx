import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement, stepChanged } from '../../actions/counterAction';

const Counter = (props) => (
    <div>
        <div>
            <h1>Counter</h1>
            <h3>{ props.counter.number }</h3>

            <button onClick={props.increment}>+</button>

            <input
                onChange={props.stepChanged}
                value={props.counter.step} type="number"/>

            <button onClick={props.decrement}>-</button>
        </div>
    </div>
);

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => bindActionCreators({
    increment,
    decrement,
    stepChanged
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
