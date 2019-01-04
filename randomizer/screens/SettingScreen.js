import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';


class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    header: null,
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/list.png')}
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
        <Text>SettingsScreen</Text>

      </View>
        
    
     
    );
  }
}

// Style sheets for SettingsScreen

const styles = StyleSheet.create({
 
  container:{
    backgroundColor: '#ffffff50',
    justifyContent: 'center',
  },
  
})


export default SettingsScreen; 