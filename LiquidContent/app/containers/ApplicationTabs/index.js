import { View, TabBarIOS, TabBarItemIOS } from 'react-native';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import Home from '../Home';
import About from '../About';

class ApplicationTabs extends Component {

  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  onPress(index) {
    this.props.setTab(index);
  }

  render() {
    return (
      <View>
        {React.createElement(component, this.props)}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);
