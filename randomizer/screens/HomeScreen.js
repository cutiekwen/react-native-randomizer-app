import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/list.png')}
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
        <Text>HomeScreen</Text>

      </View>
        
    
     
    );
  }
}

// Style sheets for HomeScreen

const styles = StyleSheet.create({
 
  container:{
    backgroundColor: '#ffffff50',
    justifyContent: 'center',
  },
  
})


export default HomeScreen; 