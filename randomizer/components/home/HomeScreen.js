import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/list.png')}
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
        <Text style={styles.text}>RANDOMIZER- swipe left to show setting screen.js</Text>

      </View>
        
    
     
    );
  }
}

// Style sheets for HomeScreen

const styles = StyleSheet.create({
 
  container:{
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex:1
  },
  text:{
    color: 'white',
    fontSize: 25,
  }
})


export default HomeScreen; 