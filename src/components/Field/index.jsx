import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeValue } from '../../actions/fieldActions';

class Field extends Component{
    render(){
        return(
            <div>
                <label>{this.props.value}</label><br/>
                <input onChange={ this.props.changeValue } value={ this.props.value } />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.field.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeValue
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)
