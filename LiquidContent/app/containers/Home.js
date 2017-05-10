import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { appStyle } from '../styles';
import MapView from 'react-native-maps';
const {
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      searching: false, 
      ingredientsInput: '',
      points: []
    }
  }

  searchPressed() {
    this.setState({ searching: true })
    this.props.getContentTypes(this.state.ingredientsInput).then((res) => {
      this.setState({ searching: false })
    });
  }

  categoryPressed(id) {
    this.props.getContentItems(id).then((res) => {
      
    });
  }

  contentTypes() {
    return Object.keys(this.props.contentTypes).map(key => this.props.contentTypes[key]);
  }

  render() {
    return (
      <View style={styles.scene}>
        <View style={styles.searchSection}>
          <TextInput style={styles.searchInput}
            returnKeyType="search"
            placeholder="Search Content Types"
            onChangeText={(ingredientsInput) => this.setState({ ingredientsInput })}
            value={this.state.ingredientsInput}
          />
          <TouchableHighlight style={styles.searchButton} onPress={() => this.searchPressed()}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.scrollSection} >
          {!this.state.searching && this.contentTypes().map((type, index) => {
            return <TouchableHighlight key={"content-type-" + index}
              style={styles.searchButton}
              onPress={() => this.categoryPressed(type.id)}>
              <View style={appStyle.contentTypes}>
                <Text style={appStyle.resultText} >{type.name}</Text>
              </View>
            </TouchableHighlight>
          })}
          {this.state.searching ? <Text>Searching...</Text> : null}
          {this.props.contentTypes.length > 0 && <MapView
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
          >{this.props.contentItems.length> 0 && this.props.contentItems.map((item, index) => {
            return <MapView.Marker key={"item-" + index}
              coordinate={item.coordinate}
              title={item.title}
              description={item.desc}
            />
          })}
          </MapView>
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20
  },
  map: {
    height: 440,
    marginTop: 10
  },
  searchSection: {
    height: 50,
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5
  },
  scrollSection: {
    flex: 0.3
  },
  searchButton: {
    flex: 0.2,
    height: 32
  },
  searchButtonText: {
    padding: 5
  },
  searchInput: {
    flex: 0.8
  },
});

function mapStateToProps(state) {
  return {
    contentTypes: state.contentTypes,
    contentItems: state.contentItems
  };
}

export default connect(mapStateToProps)(Home);
