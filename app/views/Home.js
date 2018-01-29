import React, { Component } from 'react';
var { View, Text, StyleSheet } = require('react-native');

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CustomListview from '../components/CustomListview'

import * as Actions from '../actions';

class Home extends Component {

    componentDidMount() {
        this.props.getDiscography(); //call our action
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
                <View style={styles.container}>
                    <CustomListview 
                        itemList={this.props.data}
                    />
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFCFC',
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(Home);