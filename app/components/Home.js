import React, { Component } from 'react';
var { View, Text } = require('react-native');

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';

class Home extends Component {

    componentDidMount() {
        this.props.getData(); //call our action
        console.log(this.props.data);
    }

    render() {
        if (this.props.loading) {
            return (
                <View >
                    <Text>Carregando....</Text>
                </View>
            );
        } else {
            return (
                <View>
                   <Text>{this.props.data[1].title}</Text>
                </View>
            );
        }
    }

};

function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);