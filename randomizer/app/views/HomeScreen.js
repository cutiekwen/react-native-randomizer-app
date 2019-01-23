import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import{
  Header
} from 'react-native-elements'

var width = Dimensions.get('window').width;


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/list.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  constructor (props) {
    super(props);
    this.state ={
    
    }
  }

  render() {
   
    return (
      
      
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View style={styles.body}>
          <Text style={styles.text}>
            McDonalds
          </Text>
          <TouchableOpacity 
            style={styles.button}
          > 
            <Text
              style={styles.button_text}
            >
              Randomize
            </Text>
          </TouchableOpacity>
        </View>  
      </View>
      
    
     
    );
  }
}

// Style sheets for HomeScreen

const styles = StyleSheet.create({
 
  container:{
    backgroundColor: '#fff',
    flex:1
  },
  text:{
    color: '#3D6DCC',
    fontSize: 25,
  },
  body:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex:1
  },
  button:{
    backgroundColor: '#3D6DCC',
    borderRadius: 40,
    padding: 10,
    width: width * 0.8,
    marginLeft: width * 0.05,
    marginTop: 30
  },

  button_text:{
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 35,
    padding: 10,
    color: '#fff',
    fontWeight: 'bold',
  }
})


export default HomeScreen; 

